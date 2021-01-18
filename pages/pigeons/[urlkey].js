// TODO buy button event

import Image from 'next/image'

import Link from 'next/link'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import fetcher from '../../functions/fetcher'
import PigeonTabs from '../../components/pigeontabs'

import {useRouter} from 'next/router'
import menuquery from '../../functions/queries/menuquery'




function PigeonPage({data, notFound}) {

  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  const pigeon = data.pigeons[0]

  if(!pigeon){
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
              {pigeon.eikones.map((item,i) => {
                return (
                  <div className="text-center">
                  <Image key={`pigeonimage${i}`} src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.url}`}  alt={pigeon.kodikos} objectFit="cover" width={500} height={500} />
                 </div>
                )
              })}
            </Slider>




          </div>
          </div>

           <div className="col-md-6">
          <div className="summary entry-summary">
            <h1 className="product_title entry-title">{pigeon.kodikos}</h1>
            <h5>{pigeon.name}</h5>
            <p className="price"><span className="woocommerce-Price-amount amount">
              <span className="woocommerce-Price-currencySymbol">€</span>{pigeon.timi}</span>
            </p>

            <div className="product_meta">
              <span className="posted_in">Κατηγορία:
                <Link href={`/pigeons/breed/${pigeon.breed.urlkey}`}>
                  <a> {pigeon.breed.breed}</a>
                </Link>

               </span>
              {/* <span className="tagged_as">Tags: <a href="http://senorcavallo.just-themes.com/product-tag/boot/" rel="tag">boot</a>, <a href="http://senorcavallo.just-themes.com/product-tag/shoes/" rel="tag">shoes</a>, <a href="http://senorcavallo.just-themes.com/product-tag/%d1%81owboy/" rel="tag">сowboy</a></span> */}
            </div>
            {pigeon.pros_polisi && <form className="cart">

              <button type="submit" name="add-to-cart" value={2252} className="single_add_to_cart_button button alt btn btn-second color-hover-main color-hover-second">Add to cart</button>
            </form>}
          </div>
          </div>


          </div>

          <PigeonTabs description={pigeon.perigrafi} video={pigeon.video} youtubevideo={pigeon.youtubeid} pedigree={pigeon.pedigree} />




        </div>
      </div>


    </div>
</div>


)

}

export default PigeonPage

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
var nquery = `
query {

  pigeons{
    urlkey
  }
}
`

var data = await fetcher(nquery)

  const paths = data.pigeons.map((post) => ({
    params: { urlkey: post.urlkey }
  }))

  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {

  var nquery = `
  query($urlkey:String!) {

    pigeons(where:{urlkey:$urlkey}){
  kodikos
  timi
  eikones{
    url
  }
  breed{
  breed
  urlkey
}
  pedigree{
    url
    width
    height
  }
  youtubeid
  video{
     url
     mime
  }
  perigrafi
  pros_polisi
  name
  id
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
  return { props: { data,title:data.pigeons[0] && data.pigeons[0].kodikos,menu,bodyClass },revalidate:30 }

}
