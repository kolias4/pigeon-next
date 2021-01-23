// TODO buy button event

import Image from 'next/image'

import Link from 'next/link'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import fetcher from '../../functions/fetcher'
import KolobodromioTabs from '../../components/kolobodromiotabs'

import {useRouter} from 'next/router'
import menuquery from '../../functions/queries/menuquery'




function KolobodromioPage({data, notFound}) {

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

  const settings = {
   autoplay:false,
   dots: false,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
   nextArrow: <SampleNextArrow />,
   prevArrow: <SamplePrevArrow />
 };



  function SampleNextArrow(props) {
   const { className, style, onClick } = props;
   return (
     <div
       className="arrow right"
       style={{display: "block", position:"absolute", width:'20px',height:'20px',right:'10px', top:'50%', zIndex:'1000' }}
       onClick={onClick}
     />
   );
 }

 function SamplePrevArrow(props) {
   const { className, style, onClick } = props;
   return (
     <div
       className="arrow left"
       style={{display: "block", position:"absolute", width:'20px',height:'20px',left:'10px', top:'50%', zIndex:'1000' }}
       onClick={onClick}
     />
   );
 }







  return (

    <div className="container">
  <div className="inner-page margin-default">

  <div className="text-page">

        <div className="woocommerce-notices-wrapper" />
        <div id="product-2252" className="has-post-thumbnail product type-product post-2252 status-publish first instock product_cat-accessories product_cat-shoes product_tag-boot product_tag-shoes product_tag-owboy shipping-taxable purchasable product-type-simple">
          <div className="row">
            <div className="col-md-6">
          <div className="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 "  style={{opacity: 1, transition: 'opacity 0.25s ease-in-out 0s'}}>

            <Slider {...settings}>
              {kolobodromio.images.map((item,i) => {
                return (
                  <div className="text-center">
                  <Image priority={true} key={`kolobodromio${i}`} src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.url}`}  alt={`kolobodromio${i}`} objectFit="cover" width={500} height={500} />
                 </div>
                )
              })}
            </Slider>




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

var data = await fetcher(nquery)

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
  })

  var menu = await menuquery()
  var bodyClass="archive post-type-archive post-type-archive-product woocommerce woocommerce-page woocommerce-js"


  // Pass data to the page via props
  return { props: { data,title:data.kolovodromias[0] && data.kolovodromias[0].title,menu,bodyClass },revalidate:30 }

}
