import { NextSeo } from "next-seo"
import { useRouter } from "next/router"
import { Card } from "react-bootstrap"
import fetcher from "../../functions/fetcher"
import menuquery from "../../functions/queries/menuquery"
import Image from 'next/image'
import { useState,useEffect, useContext } from "react"
import MyModal from "../../components/modals/mymodal"
import PigeonBid from "../../components/pigeonview/pigeonbid"
import useNow from "../../hooks/useNow"
import isDateBetween from "../../functions/date/isDateBetween"
import dateFormatFull from "../../functions/date/dateFormatFull"
import ActiveStatus from "../../components/ActiveStatus"
import dateShow from "../../functions/date/dateShow"
import jfetcher from "../../functions/jfetcher"
import BidTimer from "../../components/bidtimer"
import PigeonBidPlace from "../../components/forms/PigeonBidPlace"
import { AppContext } from "../../context/context"






const BidOfferPage = ({data,title}) => {

    const router = useRouter()

     const {user,setUser} = useContext(AppContext)

    const [revealmodal,setRevealModal] = useState(false)

    const [viewdpigeon,setViewdPigeon] = useState(null)

    var now = useNow()

    const [bidEnd,setBidEnd] = useState(data.bid.end)

    const [bidOffers,setBidOffers] = useState([])

    const handlePigeonView = (id) => {

      let selected_pigeon = data.bid.pigeons.filter((pigeon) => pigeon.id == id)[0]
      setViewdPigeon(selected_pigeon)
      setRevealModal(true)

    }

    useEffect(() => {
      jfetcher({url:`/api/getbids`,method:'POST',body:{id:data.bid.id}})
      .then(res => setBidOffers(res))

    },[])

    if (router.isFallback) {
        return <div>Loading...</div>
      }


    return (
      <>

      <MyModal dialogClassName="bidpigeonmodal" reveal={revealmodal} setReveal={setRevealModal} title={viewdpigeon? viewdpigeon.kodikos : ""}>

         <PigeonBid pigeon={viewdpigeon}/>

      </MyModal>

      <NextSeo title={`${title} | MyPigeon`}
        canonical={process.env.NEXT_PUBLIC_SITE_URL+router.asPath}
        openGraph={{
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_SITE_URL + router.asPath}`,
      title:`${title} | MyPigeon`,
      images: [
        {
          url:`${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
          alt: 'logo',
        }
  
      ],
      site_name: 'MyPigeon',
    }}
      />
  
  
    {/* Content */}
    <div className="margin-top">

    <h1 className="text-center">{data.bid.title}</h1>
    <h5 className="text-center">{data.bid.description}</h5>

    <div className="container">

      <div className="row">
        <div className="col-md-6">
            <div className="pigeoncontainer border my-2">

             <h5 className="text-center">Περιστέρια Δημοπρασίας</h5>
             
             <div className="d-flex align-items-center flex-wrap">

               {data.bid.pigeons.map((pigeon) => (
                <Card key={pigeon.kodikos} style={{maxWidth:"200px"}} className="mx-2 my-2">
  <Card.Header>
      <span className="my-0 font-weight-bold">{pigeon.kodikos}</span>
  </Card.Header>
  <div className="imagecontainer">
    {pigeon.eikones[0] ?
     <Image width={800} height={800} src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${pigeon.eikones[0].url}`} objectFit="cover"/>

     : null}

  </div>
  <Card.Body className="d-flex flex-column">
 
  
  
    <div className="">
    
    <span onClick={() => handlePigeonView(pigeon.id)} className=" btn btn-second color-hover-main mt-auto" >Δείτε</span>
    
    </div>

  </Card.Body>
</Card>

               
               ))}
               </div>

            </div>
        </div>

        <div className="col-md-6">
          <div className="bidscontainer my-2 p-2  border">

            <h5 className="text-center">Λεπτομέριες Δημπρασίας </h5>

            <div className="my-2 d-flex flex-column">

            <div className="d-flex align-items-center">
              
              <ActiveStatus isactive={isDateBetween(now,dateFormatFull(data.bid.start),dateFormatFull(bidEnd))}/>
              

            </div>

            <div className="start my-2">
    <span className="font-weight-bold">Έναρξη :</span>
    <span>{dateShow(data.bid.start)}</span>
    </div>

    <div className="end my-2">
    <span className="font-weight-bold">Λήξη :</span>
    <span>{dateShow(bidEnd)}</span>
    </div>

    <div className="bidstartprice my-2">
      <span className="font-weight-bold">
        Τιμή Εκκίνησης :
      </span>
      <span>{data.bid.startprice}€</span>
    </div>

    <div className="bidofferscount my-2">
      <span className="font-weight-bold">Σύνολο Προσφορών :</span>
      <span>{bidOffers.length}</span>
    </div>

    <div className="timer my-2">

    <BidTimer now={now} event={{end:bidEnd}}/>
      
    </div>

            </div>

          </div>
        
        </div>
      </div>

      <div className="my-5">
      <PigeonBidPlace startprice={data.bid.startprice} bidOffers={bidOffers} />
      
      </div>

    </div>
  
  
  
    </div>
  </>
  
  
    )
}

export default BidOfferPage

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
  var nquery = `
  query {
    bids{
    id
    }
      
    }
  `
  
  var data = await fetcher(nquery,{},process.env.STRAPI_ADMIN_TOKEN)

    const paths = data.bids.map((bid) => ({
      params: { id: bid.id}
    }))
  

    return { paths, fallback: true }
  }

  export async function getStaticProps({ params }) {

    var nquery = `
    query($id:ID!) {
        bid(id:$id){
            id
            start
            end
            title
            startprice 
            description
            pigeons{
             id
             youtubeid
             breed{
               urlkey
               breed
             }
             eikones{
               url
             }
             pedigree{
               url
               width
               height
             }
             name
             kodikos
             video{
               url
             }
             perigrafi
           }
             
           }
  
  }
    `
  
  
    const data = await fetcher(nquery,{
      variables:{
        id:params.id
      }
    },process.env.STRAPI_ADMIN_TOKEN)
  
    var menu = await menuquery()

    if(!data.bid){
        return {
            notFound: true,
          }
    }
    
    // Pass data to the page via props
    return { props: { data,title:`Δημοπρασία ${data.bid.id}`,menu },revalidate:30 }
  
  }