import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router'
import Image from 'next/image'


import fetcher from '../../functions/fetcher'
import menuquery from '../../functions/queries/menuquery'
import { Card } from 'react-bootstrap';
import useNow from '../../hooks/useNow';
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
       <div className="col-md-3">
       <Card>
  <Card.Header >Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <a className=" btn btn-second color-hover-main" >Δείτε το</a>
  </Card.Body>
</Card>
       </div>
       <div className="col-md-3">
       <Card>
  <Card.Header>
      <h3 className="my-0">sdds</h3>
  </Card.Header>
  <Card.Body>
  <span style={{width:'25px',height:'25px',backgroundColor:'#28a745'}} className="border border-success rounded-circle d-inline-block"></span>
   <span style={{height:'25px'}} className="d-inline-block ml-2 ">Σε εξέλιξη</span>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <a className=" btn btn-second color-hover-main" >Δείτε το</a>
  </Card.Body>
</Card>
           </div>
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
      pigeons{
        kodikos
        name
        eikones{
          url
        }
      }
    
    }
    }
  `

  var menu = await menuquery()
  const data = await fetcher(nquery,{},process.env.STRAPI_ADMIN_TOKEN)


  // Pass data to the page via props
  return { props: { data,title:"Δημοπρασίες",menu },revalidate:30 }
}
