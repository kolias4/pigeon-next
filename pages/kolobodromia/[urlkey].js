// TODO buy button event

import Image from 'next/image'

import Link from 'next/link'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import fetcher from '../../functions/fetcher'
import KolobodromioTabs from '../../components/kolobodromiotabs'
import {useRouter} from 'next/router'
import menuquery from '../../functions/queries/menuquery'
import Seo from '../../components/Seo'




function KolobodromioPage({data, notFound,title}) {

  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  const kolobodromio = data.kolovodromias[0]

  if(!kolobodromio){
    return (
      <h2 className="text-center" >Δεν βρέθηκε</h2>
    )
  }


  const handleThumbs = () => {
   if(kolobodromio.images && (kolobodromio.images.length <=1)){
     return null
   }
   return (
     kolobodromio.images.map((item,i) => {

       return (
         <div className="p-2"  key={item.url}>
           <Image key={`kolobodromioimage${i}`} src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.url}`}  alt={`kolobodromio${i}`} objectFit="cover" width={100} height={100} />


         </div>

       )
     })
   )
 }







  return (

    <div className="container">
    <Seo title={`${title} | Κολομποδρόμια | MyPigeon`} description={`Κολομπροδρόμιο ${title}`}
    pageurl={process.env.NEXT_PUBLIC_SITE_URL+router.asPath}
    image={{
      url:kolobodromio.images[0]? `${process.env.NEXT_PUBLIC_STRAPI_URL}${kolobodromio.images[0].url}` : `${process.env.NEXT_PUBLIC_STRAPI_URL}/logo2.jpg`,
      width:kolobodromio.images[0]?.width || 1203,
      height:kolobodromio.images[0]?.height || 1200,
      alt:`${title}img`
    }}

     />

    {/* <NextSeo title={`${title} | MyPigeon`}
      description={`Κολομπροδρόμιο ${title}`}
      canonical={process.env.NEXT_PUBLIC_SITE_URL+router.asPath}
      openGraph={{
    type: 'website',
    url: `${process.env.NEXT_PUBLIC_SITE_URL+router.asPath}`,
    title:`${title} | MyPigeon`,
    description:`Κολομπροδρόμιο ${title}`,
    images: [
      {
        url:`${process.env.NEXT_PUBLIC_STRAPI_URL}${kolobodromio.images[0] && kolobodromio.images[0].url || '/logo2.jpg'}`,
        alt:`${title}`,
      }

    ],
    site_name: 'MyPigeon',
  }}
    /> */}


  <div className="inner-page margin-default">

  <div className="text-page">

        <div className="woocommerce-notices-wrapper" />
        <div id="product-2252" className="has-post-thumbnail product type-product post-2252 status-publish first instock product_cat-accessories product_cat-shoes product_tag-boot product_tag-shoes product_tag-owboy shipping-taxable purchasable product-type-simple">
          <div className="row">
            <div className="col-md-6">
          <div className="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 "  style={{opacity: 1, transition: 'opacity 0.25s ease-in-out 0s'}}>

            {/* <Slider {...settings}>
              {kolobodromio.images.map((item,i) => {
                return (
                  <div className="text-center">
                  <Image priority={true} key={`kolobodromio${i}`} src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.url}`}  alt={`kolobodromio${i}`} objectFit="cover" width={500} height={500} />
                 </div>
                )
              })}
            </Slider> */}

            <Carousel
                className="mycarousel"
                renderThumbs={handleThumbs}
                showIndicators={false}
                showStatus={false}
                thumbWidth={100}
                >
                  {kolobodromio.images.map((item,i) => {
                    return (
                      <div className="text-center">
                      <Image key={`kolobodromio${i}`} src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.url}`}  alt={`kolobodromio${i}`} objectFit="contain" width={600} height={600} />
                     </div>
                    )
                  })}

                  </Carousel>




          </div>
          </div>

           <div className="col-md-6">
          <div className = "wpb_wrapper" >
             <div className="heading  color-black transform-header-up   vc_custom_1508350389768">
  <h3 className="header">{kolobodromio.title}</h3>
</div>

<div className="align-default ">
  <ul className="social-icons-list   vc_custom_1513441326654 " >
  {kolobodromio.telephone &&  <li>
      <span className="fa fa-phone"/>
      <span className="head">
        <a href={`tel:${kolobodromio.telephone}`}>{kolobodromio.telephone}</a>
      </span>
    </li>}

    {kolobodromio.email && <li>
      <span className="fa fa-envelope"/>
      <span className="head">
        <a href={`mailto:${kolobodromio.email}`}>{kolobodromio.email}</a>
      </span>
    </li>}

    {kolobodromio.website && <li>
      <span className="fa fa-globe"/>
      <span className="head">
      <a href={kolobodromio.website} target="_blank">{kolobodromio.website}</a>
      </span>
    </li>}


  </ul>
</div>


</div>
          </div>


          </div>

          <KolobodromioTabs description={kolobodromio.description} videos={kolobodromio.videos} location={kolobodromio.googlemapskey} />




        </div>
      </div>


    </div>
</div>


)

}

export default KolobodromioPage

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
var nquery = `
query {

  kolovodromias{
     url_key
 }
}
`

var data = await fetcher(nquery,{},process.env.STRAPI_ADMIN_TOKEN)

  const paths = data.kolovodromias.map((post) => ({
    params: { urlkey: post.url_key }
  }))

  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {

  var nquery = `
  query($urlkey:String!) {

    kolovodromias(where:{url_key:$urlkey}){
      title
description
email
website
googlemapskey
images{
  url
  width
  height
}
videos{
  url
  mime
}
telephone

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
  return { props: { data,title:data.kolovodromias[0] && data.kolovodromias[0].title,menu,bodyClass },revalidate:30 }

}
