import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Card } from 'react-bootstrap';
import dateShow from '../../functions/date/dateShow';


import fetcher from '../../functions/fetcher'
import menuquery from '../../functions/queries/menuquery'
import parseresults from '../../functions/results/parseresults';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
// import { socket } from '../lib/socket';
// import { useEffect } from 'react';




function Agonas({data,title,results}){

  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

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

//   console.log(results)

  var theader = Object.keys(results[0])



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

  <Table className="table table-bordered table-striped">
      <Thead>
        <Tr>
        {theader.map((heading) => {
            return (
          <Th>{heading}</Th>
            
            )
        })}
         
        </Tr>
      </Thead>
      <Tbody>
      {results.map((result,i) => {
          return (
            <Tr key={`trow${i}`}>
            {theader.map((heading) => {
            return (
          <Td>{result[heading]}</Td>
            
            )
        })}
         
        </Tr>

          )
      })}
     
     
      </Tbody>
    </Table>
  
  </div>
</div>


  )

}

export default Agonas

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
  var nquery = `
  query {
    apotelesmatas{
    urlkey
  }
  }
  `
  
  var data = await fetcher(nquery,{},process.env.STRAPI_ADMIN_TOKEN)
  
  
  
    // Get the paths we want to pre-render based on posts
    const paths = data.apotelesmatas.map((result) => ({
      params: { urlkey: result.urlkey}
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: true }
  }

export async function getStaticProps({ params }) {
  // Fetch data from external API



  var nquery = `
  query($urlkey:String!){
    apotelesmatas(where:{urlkey:$urlkey}){
     id
     title
     start
     urlkey
     totalrun
     finished
     results{
        mime
        url
      }
   }
   }
 
   `

  var menu = await menuquery()
  const data = await fetcher(nquery,{
    variables:{
        urlkey:params.urlkey
      }
  },process.env.STRAPI_ADMIN_TOKEN)

  var agonas = data.apotelesmatas[0]

  if(!agonas){
    return {
        notFound: true,
      }
}

try {

  var results = await parseresults(`${process.env.NEXT_PUBLIC_STRAPI_URL}${agonas.results.url}`)
  

}
catch(err){
    return {
        notFound: true,
      }
}


  


  // Pass data to the page via props
  return { props: { data:agonas,title:agonas.title,menu,results:results },revalidate:30 }
}
