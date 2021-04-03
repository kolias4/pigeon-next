import { NextSeo } from 'next-seo';
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

   <div className="row">

   {data.bids.map((bid,i) => (
    <div key={bid.title} className="col-md-3 my-3">
   
       <Card className="h-100">
  <Card.Header>
      <span className="my-0 font-weight-bold">Δημοπρασία {bid.id}</span>
  </Card.Header>
  <div className="imagecontainer">
    {bid.image ?
     <Image width={300} height={300} src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${bid.image.url}`} objectFit="cover"/>

     : null}

  </div>
  <Card.Body className="d-flex flex-column">
    <div className="d-flex align-items-center my-1">

    <ActiveStatus isactive={isDateBetween(now,dateFormatFull(bid.start),dateFormatFull(bid.end))}>

    </ActiveStatus>

    </div>
    <div className="my-1 d-flex flex-column">
    <div className="start">
    <span className="font-weight-bold">Αρχή :</span>
    <span>{dateShow(bid.start)}</span>
    </div>

    <div className="end">
    <span className="font-weight-bold">Τέλος :</span>
    <span>{dateShow(bid.end)}</span>
    </div>

     

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

   ))}


   </div>


  </div>
</div>


  )

}

export default AuctionPage

export async function getStaticProps() {
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
      image{
        url
      }

    
    }
    }
  `

  var menu = await menuquery()
  const data = await fetcher(nquery,{},process.env.STRAPI_ADMIN_TOKEN)


  // Pass data to the page via props
  return { props: { data,title:"Δημοπρασίες",menu },revalidate:30 }
}
