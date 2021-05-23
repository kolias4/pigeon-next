import { useRouter } from 'next/router'
import Image from 'next/image'


import fetcher from '../../functions/fetcher'
import menuquery from '../../functions/queries/menuquery'
import { Card } from 'react-bootstrap';
import useNow from '../../hooks/useNow';
import isDateBetween from '../../functions/date/isDateBetween';
import dateFormatFull from '../../functions/date/dateFormatFull';
import ActiveStatus from '../../components/ActiveStatus'
import dateShow from '../../functions/date/dateShow';
import Link from 'next/link'
import Seo from '../../components/Seo';

// import { socket } from '../lib/socket';
// import { useEffect } from 'react';




function AuctionPage({data,title}){

  const router = useRouter()
   var now = useNow()

  // useEffect(() => {
  //   socket.connect();
  //   socket.on('bid2', (data) => {
  //     console.log("Welcome event inside JoinRoom", data);
  //     console.log("socket")
      
  // });

  // return () => {
  //   socket.removeAllListeners("bid2");
  //   socket.disconnect();
  // }

  

  // },[])



  return (
    <div className="container">

    <Seo title={`${title} | Ταχυδρομικά Περιστέρια | MyPigeon`}
      description="Δημοπρασίες Ταχυδρομικών Περιστεριών"
      pageurl={process.env.NEXT_PUBLIC_SITE_URL + router.asPath}
    />

 


  {/* Content */}
  <div className="margin-top">

   <div className="row">

   {data.bids.map((bid,i) => {

     var bidoffers = bid.bid_offers.sort((a,b) => {
        if(a.price > b.price){
            return -1
        }
        if(b.price > a.price){
            return 1
        }
        return 0
    } )


     return(
    <div key={bid.title} className="col-lg-3 col-md-4  my-3">
   
       <Card className="h-100">
  <Card.Header>
      <span className="my-0 font-weight-bold">Δημοπρασία {bid.id}</span>
  </Card.Header>
  <div className="imagecontainer">
    {bid.image ?
     <Image width={800} height={800} src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${bid.image.url}`} objectFit="cover"/>

     : null}

  </div>
  <Card.Body className="d-flex flex-column">
    <div className="d-flex align-items-center my-1">

    <ActiveStatus isactive={isDateBetween(now,dateFormatFull(bid.start),dateFormatFull(bid.end))}>

    </ActiveStatus>

    </div>
    <div className="my-1 d-flex flex-column">
    <div className="start">
    <span className="font-weight-bold">Έναρξη :</span>
    <span>{dateShow(bid.start)}</span>
    </div>

    <div className="end">
    <span className="font-weight-bold">Λήξη :</span>
    <span>{dateShow(bid.end)}</span>
    </div>

    <div className="startprice">
    <span className="font-weight-bold">Τιμή Εκκίνησης :</span>
    <span>{bid.startprice}€</span>
    </div>

    {bidoffers[0] && <div className="maxbid">
    <span className="font-weight-bold">Top Προσφορά  :</span>
    <span>{bidoffers[0].price}€</span>
    </div>}

     

    </div>

    

    <Card.Title className="font-weight-bold">{bid.title}</Card.Title>
    <Card.Text>
      {bid.description}
    </Card.Text>
    <div className="mt-auto">
     <Link href={`/auctions/${bid.id}`}>
    <a className=" btn btn-second color-hover-main mt-auto" >Συμμετοχή</a>
    </Link>
    </div>

  </Card.Body>
</Card>
           </div>

   )})}


   </div>


  </div>
</div>


  )

}

export default AuctionPage

export async function getServerSideProps() {
  // Fetch data from external API



  var nquery = `
  query{
    bids{
      id
      title
      start
      end
      startprice
      description
      bid_offers{
        price
      }
      image{
        url
      }

    
    }
    }
  `

  var menu = await menuquery()
  const data = await fetcher(nquery,{},process.env.STRAPI_ADMIN_TOKEN)


  // Pass data to the page via props
  return { props: { data,title:"Δημοπρασίες",menu } }
}
