// TODO buy button event

import Image from 'next/image'

import Link from 'next/link'
import { NextSeo } from 'next-seo';

import fetcher from '../../functions/fetcher'


import {useRouter} from 'next/router'
import menuquery from '../../functions/queries/menuquery'




function SylogosPage({data, notFound,title}) {

  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  const sylogos = data.sylogois[0]

  if(!sylogos){
    return (
      <h2 className="text-center" >Δεν βρέθηκε</h2>
    )
  }











  return (

    <div className="container">

    <NextSeo title={`${title} | MyPigeon`}
      description={`Σύλλογος ${title}`}
      canonical={process.env.NEXT_PUBLIC_SITE_URL+router.asPath}
      openGraph={{
    type: 'website',
    url: `${process.env.NEXT_PUBLIC_SITE_URL+router.asPath}`,
    title:`${title} | MyPigeon`,
    description:`Σύλλογος ${title}`,
    images: [
      {
        url:`${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
        alt: 'logo',
      }

    ],
    site_name: 'MyPigeon',
  }}
    />
  <div className="inner-page margin-default">

  <div className="text-page">

        <div className="woocommerce-notices-wrapper" />
        <div id="product-2252" className="has-post-thumbnail product type-product post-2252 status-publish first instock product_cat-accessories product_cat-shoes product_tag-boot product_tag-shoes product_tag-owboy shipping-taxable purchasable product-type-simple">
          <div className="row">

            <div className="col-md-6">
           <div className = "wpb_wrapper p-3" >
              <div className="heading  color-black transform-header-up   vc_custom_1508350389768">
   <h3 className="header">{sylogos.title}</h3>
 </div>

 <div className="align-default ">
   <ul className="social-icons-list   vc_custom_1513441326654 " >

     {sylogos.proedros &&  <li>
         <span>Υπεύθυνος συλλόγου: </span>
         <span className="font-weight-bold">
           <a >{sylogos.proedros}</a>
         </span>
       </li>}


   {sylogos.telephone &&  <li>
       <span className="fa fa-phone"/>
       <span className="head">
         <a href={`tel:${sylogos.telephone}`}>{sylogos.telephone}</a>
       </span>
     </li>}

     {sylogos.email && <li>
       <span className="fa fa-envelope"/>
       <span className="head">
         <a href={`mailto:${sylogos.email}`}>{sylogos.email}</a>
       </span>
     </li>}

     {sylogos.website && <li>
       <span className="fa fa-globe"/>
       <span className="head">
       <a href={sylogos.website} target="_blank">{sylogos.website}</a>
       </span>
     </li>}


   </ul>
 </div>


 </div>
           </div>





          </div>





        </div>
      </div>


    </div>
</div>


)

}

export default SylogosPage

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
var nquery = `
query {

  sylogois{

    urlkey
  }
}
`

var data = await fetcher(nquery,{},process.env.STRAPI_ADMIN_TOKEN)

  const paths = data.sylogois.map((post) => ({
    params: { urlkey: post.urlkey }
  }))

  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {

  var nquery = `
  query($urlkey:String!) {

    sylogois(where:{urlkey:$urlkey}){
      title
      telephone
      email
      proedros
      website
      description
    }

}
  `


  const data = await fetcher(nquery,{
    variables:{
      urlkey:params.urlkey
    }
  },process.env.STRAPI_ADMIN_TOKEN)

  var menu = await menuquery()
  var bodyClass="archive post-type-archive post-type-archive-product woocommerce woocommerce-page woocommerce-js"


  // Pass data to the page via props
  return { props: { data,title:data.sylogois[0] && data.sylogois[0].title,menu,bodyClass },revalidate:30 }

}
