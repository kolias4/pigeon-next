import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Image from "next/image"
import PigeonTabs from "../pigeontabs"
import Link from "next/link"



const PigeonBid = ({pigeon}) => {

    const handleThumbs = () => {
        if(pigeon.eikones && (pigeon.eikones.length <=1)){
          return null
        }
        return (
          pigeon.eikones.map((item,i) => {
      
            return (
              <div className="p-2"  key={item.url}>
                <Image key={`pigeonimage${i}`} src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.url}`}  alt={pigeon.kodikos} objectFit="cover" width={100} height={100} />
      
      
              </div>
      
            )
          })
        )
      }

    return (
        <div className="archive post-type-archive post-type-archive-product woocommerce woocommerce-page woocommerce-js">
        <div className="inner-page">
        <div className="text-page">

        <div className="woocommerce-notices-wrapper" />
        <div id="product-2252" className="has-post-thumbnail product type-product post-2252 status-publish first instock product_cat-accessories product_cat-shoes product_tag-boot product_tag-shoes product_tag-owboy shipping-taxable purchasable product-type-simple">
          <div className="">
            <div className="my-3">
          <div className="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 "  style={{opacity: 1, transition: 'opacity 0.25s ease-in-out 0s'}}>

            {/* <Slider {...settings}>
              {pigeon.eikones.map((item,i) => {
                return (
                  <div className="text-center">
                  <Image key={`pigeonimage${i}`} src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.url}`}  alt={pigeon.kodikos} objectFit="cover" width={500} height={500} />
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
                  {pigeon.eikones.map((item,i) => {
                    return (
                      <div className="text-center">
                      <Image key={`pigeonimage${i}`} src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.url}`}  alt={pigeon.kodikos} objectFit="contain" width={600} height={600} />
                     </div>
                    )
                  })}

                  </Carousel>




          </div>
          </div>

           <div className="my-3 ">
          <div className="summary entry-summary">
            <h1 className="product_title entry-title">{pigeon.kodikos}</h1>
            <h5>{pigeon.name}</h5>

            <div className="product_meta">
              <span className="posted_in">Κατηγορία:
                <Link href={`/pigeons/breed/${pigeon.breed.urlkey}`}>
                  <a> {pigeon.breed.breed}</a>
                </Link>

               </span>
              {/* <span className="tagged_as">Tags: <a href="http://senorcavallo.just-themes.com/product-tag/boot/" rel="tag">boot</a>, <a href="http://senorcavallo.just-themes.com/product-tag/shoes/" rel="tag">shoes</a>, <a href="http://senorcavallo.just-themes.com/product-tag/%d1%81owboy/" rel="tag">сowboy</a></span> */}
            </div>

        


           
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

export default PigeonBid