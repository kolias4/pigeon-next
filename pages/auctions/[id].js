import { NextSeo } from "next-seo"
import { useRouter } from "next/router"
import { Card } from "react-bootstrap"
import fetcher from "../../functions/fetcher"
import menuquery from "../../functions/queries/menuquery"
import Image from 'next/image'
import { useState,useEffect, useContext, useRef } from "react"
import MyModal from "../../components/modals/mymodal"
import PigeonBid from "../../components/pigeonview/pigeonbid"
import useNow from "../../hooks/useNow"
import isDateBetween from "../../functions/date/isDateBetween"
import dateFormatFull from "../../functions/date/dateFormatFull"
import ActiveStatus from "../../components/ActiveStatus"
import dateShow from "../../functions/date/dateShow"
import jfetcher from "../../functions/jfetcher"
import BidTimer from "../../components/bids/bidtimer"
import PigeonBidPlace from "../../components/forms/PigeonBidPlace"
import { AppContext, UiContext } from "../../context/context"
import { socket } from '../../lib/socket'
import BidUsers from "../../components/bids/BidUsers"
import SetPhone from "../../components/bids/SetPhone"
import LoginForm from "../../components/forms/login"
import RegisterForm from "../../components/forms/register"









const BidOfferPage = ({data,title}) => {

    const router = useRouter()

    if (router.isFallback) {
      return <div>Loading...</div>
    }

    const {user,setUser} = useContext(AppContext)

    const [revealmodal,setRevealModal] = useState(false)

    const [modalstate,setModalState] = useState('register')

    const [revealRmodal,setRevealRmodal] = useState(false)
  
    const {setToaster} = useContext(UiContext)

    const [viewdpigeon,setViewdPigeon] = useState(null)

    

    const [bidEnd,setBidEnd] = useState(data.bid.end)
    var now = useNow(bidEnd)

    const [isActive,setIsActive] = useState(isDateBetween(now,dateFormatFull(data.bid.start),dateFormatFull(bidEnd)))

    const [bidOffers,setBidOffers] = useState([])

    const [socketOffer,setSocketOffer] = useState({})

    const [socketDelete,setSocketDelete] = useState({})

    const handlePigeonView = (id) => {

      let selected_pigeon = data.bid.pigeons.filter((pigeon) => pigeon.id == id)[0]
      setViewdPigeon(selected_pigeon)
      setRevealModal(true)

    }

    // const handleSocketBid = (data) => {

    //   let n_bidOffers = bidOffers.filter(bidOffer => bidOffer.id != data.id).concat(data)

    //   console.log(data,"data")
    //   setBidOffers(n_bidOffers)
      

    // }

    useEffect(() => {
      jfetcher({url:`/api/getbids`,method:'POST',body:{id:data.bid.id}})
      .then(res => setBidOffers(res))

    },[])

      useEffect(() => {
        
    socket.connect();
    socket.on(`bid${data.bid.id}`, (data) => {
      setSocketOffer(data)
    });
    socket.on(`bid${data.bid.id}delete`, (data) => {
      setSocketDelete(data)
    });

    socket.on(`bid${data.bid.id}timeupdate`, (data) => {
      setBidEnd(data)
    });

  return () => {
    socket.removeAllListeners(`bid${data.bid.id}`);
    socket.disconnect();
  }

  },[])

  useEffect(()=>{
    
    
    // if(!socketload.current){
    //   socketload.current = true
    //   return;
    // }
    if(!socketOffer.id){
      return;
    }

       let n_bidOffers = bidOffers.filter(bidOffer => bidOffer.id != socketOffer.id).concat(socketOffer)

      // console.log(data,"data")
      setBidOffers(n_bidOffers)

  },[socketOffer])

  useEffect(()=> {
    if(!socketDelete.id){
      return;
    }
    let n_bidOffers = bidOffers.filter(bidOffer => bidOffer.id != socketDelete.id)
    setBidOffers(n_bidOffers)



  },[socketDelete])

  


    return (
      <>

      <MyModal dialogClassName="bidpigeonmodal" reveal={revealmodal} setReveal={setRevealModal} title={viewdpigeon? viewdpigeon.kodikos : ""}>

         <PigeonBid pigeon={viewdpigeon}/>

      </MyModal>

      <MyModal contentClassName="mymodalcontent" title={modalstate === "register"? "ΕΓΓΡΑΦΗ ΝΕΟΥ ΧΡΗΣΤΗ":"ΕΙΣΟΔΟΣ ΧΡΗΣΤΗ"} reveal={revealRmodal} setReveal={setRevealRmodal}>

   {modalstate === "register"? <RegisterForm onSuccess={() => {
     setToaster({show:true,message:"Η ΕΓΓΡΑΦΗ ΟΛΟΚΛΗΡΩΘΗΚΕ",success:true});
     setRevealRmodal(false)
   }
 }
    onFail={() => {
      setToaster({show:true,message:"ΚΑΤΙ ΠΗΓΕ ΛΑΘΟΣ",fail:true});
      setRevealRmodal(false)

    }
      }
      setUser={setUser}
    /> :
    <LoginForm
      onSuccess={() => {
        setToaster({show:true,message:"ΕΙΣΟΔΟΣ ΕΠΙΤΥΧΗΣ",success:true});
        setRevealRmodal(false)
      }

    }

    onFail={() => {
      setToaster({show:true,message:"ΚΑΤΙ ΠΗΓΕ ΛΑΘΟΣ",fail:true});
      setRevealRmodal(false)

    }
      }

      setUser={setUser}



    />
  }
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
              
              <ActiveStatus isactive={isActive}/>
              

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

    <BidTimer onComplete={() => setIsActive(false)} now={now} event={{end:bidEnd}}/>
      
    </div>

            </div>

          </div>

          <div className="bidsuserscontainer my-2 p-2  border">
          <h5 className="text-center">TOP 5 ΠΡΟΣΦΟΡΕΣ </h5>
          <BidUsers bidOffers={bidOffers}/>

          </div>
        
        </div>
      </div>

      <div className="my-5">
      {
        isActive? user? user.phone?
      <PigeonBidPlace setToaster={setToaster} bidId={data.bid.id} startprice={data.bid.startprice} bidOffers={bidOffers} />
        :
         <SetPhone setUser={setUser}/>
        :
        <p>
        Πρέπει να <a onClick={() => {setModalState('login');setRevealRmodal(true);}} className="hoverable">ΣΥΝΔΕΘΕΙΤΕ</a> για να συμμετάσχετε στη Δημοπρασία
        <br />
        Δέν έχετε λογαριασμό; <a onClick={() => {setModalState('register');setRevealRmodal(true);}} className="hoverable">ΕΓΓΡΑΦΗ</a>
        </p>
        :
        null
      }
      
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