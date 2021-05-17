import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Card } from 'react-bootstrap';
import dateShow from '../../functions/date/dateShow';


import fetcher from '../../functions/fetcher'
import menuquery from '../../functions/queries/menuquery'
// import { socket } from '../lib/socket';
// import { useEffect } from 'react';




function Apotelesmata({data,title}){

  const router = useRouter()

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

  if(!data.apotelesmatas[0]){
    return (
      <div className="container">
        <h3>Δεν υπάρχουν καταχωρημένα αποτελέσματα</h3>
      </div>
    )
  }



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
        url:`${process.env.NEXT_PUBLIC_SITE_URL}/logo2.jpg`,
        width:1203,
        height:1200,
        alt: 'logo'
      }

    ],
    site_name: 'MyPigeon',
  }}
    />


  {/* Content */}
  <div className="margin-top">
    <div className="row">
     {data.apotelesmatas.map((result,i) => {
       return (
        <div key={result.title} className="col-lg-3 col-md-4  my-3">
        <Card className="h-100">

        <Card.Header className="text-center">
      <span className="my-0 font-weight-bold ">{result.title}</span>
  </Card.Header>

  <Card.Body className="d-flex flex-column">

  <div className="start my-2">
    <span className="font-weight-bold">Έναρξη :</span>
    <span>{dateShow(result.start)}</span>
    </div>

    <div className="start my-2">
    <span className="font-weight-bold">Έτρεξαν :</span>
    <span>{result.totalrun}</span>
    </div>

    <div className="start my-2">
    <span className="font-weight-bold">Τερμάτισαν :</span>
    <span>{result.finished}</span>
    </div>

    <div className="mt-auto text-center">
     <Link href={`/apotelesmata/${result.urlkey}`}>
    <a className=" btn btn-second color-hover-main mt-auto" >Αποτελέσματα</a>
    </Link>
    </div>
    

  </Card.Body>

        </Card>
        </div>
       )
     })}

    </div>
  </div>
</div>


  )

}

export default Apotelesmata

export async function getStaticProps() {
  // Fetch data from external API



  var nquery = `
  query{
    apotelesmatas(sort:"start:asc"){
     id
     title
     start
     urlkey
     totalrun
     finished
   }
   }
 
   `

  var menu = await menuquery()
  const data = await fetcher(nquery,{},process.env.STRAPI_ADMIN_TOKEN)


  // Pass data to the page via props
  return { props: { data,title:"Αποτελέσματα Αγώνων",menu },revalidate:30 }
}
