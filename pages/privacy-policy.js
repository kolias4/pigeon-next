import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

import fetcher from '../functions/fetcher'
import menuquery from '../functions/queries/menuquery'


function Privacy({data,title}){

  const router = useRouter()

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
      <div className=" col-md-12 text-page">
      <ReactMarkdown>
      {data.oroiXrisi.terms}
      </ReactMarkdown>

      </div>
    </div>
  </div>
</div>


  )

}

export default Privacy

export async function getStaticProps() {
  // Fetch data from external API



  var nquery = `
  query {
    oroiXrisi{
      terms

    }

}
  `

  var menu = await menuquery()
  const data = await fetcher(nquery,{},process.env.STRAPI_ADMIN_TOKEN)


  // Pass data to the page via props
  return { props: { data,title:"Προσωπικά Δεδομένα",menu },revalidate:30 }
}
