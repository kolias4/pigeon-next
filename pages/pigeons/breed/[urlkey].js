import Image from 'next/image'

import Link from 'next/link'
import { NextSeo } from 'next-seo';

import fetcher from '../../../functions/fetcher'
import {useRouter} from 'next/router'
import menuquery from '../../../functions/queries/menuquery'


function BreedPage({data, notFound,title}) {

  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  if(!data.pigeons){
    return (
      <h2 className="text-center" >Δεν βρέθηκαν Περιστέρια σε αυτήν την κατηγορία </h2>
    )
  }

  if(!data.pigeons[0]){
    return (
      <h2 className="text-center" >Δεν βρέθηκαν Περιστέρια σε αυτήν την κατηγορία </h2>
    )
  }





  return (
    <div className="container">

    <NextSeo title={`${title} | MyPigeon`}
      description={`Εκτροφέας ${title}`}
      canonical={process.env.NEXT_PUBLIC_SITE_URL+router.asPath}
      openGraph={{
    type: 'website',
    url: `${process.env.NEXT_PUBLIC_SITE_URL+router.asPath}`,
    title:`${title} | MyPigeon`,
    description:`Εκτροφέας  ${title}`,
    images: [
      {
        url:`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.breeds[0] && data.breeds[0].photo.url || '/logo.png'}`,
        alt:`${title}`,
      }

    ],
    site_name: 'MyPigeon',
  }}
    />

    <div className="inner-page margin-default">
      <div className="row">
        <div className="col-lg-8 col-lg-push-4 col-md-8 col-md-push-4 text-page">
          <header className="woocommerce-products-header"></header>
          <div className="woocommerce-notices-wrapper"/>


          <ul className="products columns-4">
            {data.pigeons.map((pigeon,i) => {
              var imagepath = pigeon.eikones[0] && pigeon.eikones[0].url
              return (

                <li className="has-post-thumbnail product type-product post-2707 status-publish first instock product_cat-accessories product_cat-hat product_cat-tools product_tag-barrel shipping-taxable purchasable product-type-simple">
                  <div className="matchHeight1 item">
                    <div className="matchHeight jtx-product" data-mh="jtx-product" style={{
                        height: 403
                      }}>
                      <Link href={`/pigeons/${pigeon.urlkey}`}>
                      <a >
                        <div className="image">
                          {imagepath && <Image width={290} height={290} objectFit="cover" src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${imagepath}`}/>}
                          </div>
                        <h2 className="woocommerce-loop-product__title">{pigeon.kodikos}</h2>
                      </a>
                      </Link>
                      <div className="post_content entry-content">

                          {pigeon.name}


                      </div>
                    </div>
                    <span className="price">
                      <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">€</span>{pigeon.timi}</span>
                    </span>
                    <Link href={`/pigeons/${pigeon.urlkey}`}>
                    <a className=" btn btn-second color-hover-main" >Δείτε το</a>
                  </Link>
                  </div>
                </li>


              )
            })}

            {/* <li className="has-post-thumbnail product type-product post-2252 status-publish instock product_cat-accessories product_cat-shoes product_tag-boot product_tag-shoes product_tag-owboy shipping-taxable purchasable product-type-simple">
              <div className="matchHeight1 item">
                <div className="matchHeight jtx-product" data-mh="jtx-product" style={{
                    height: 403
                  }}>
                  <a href="http://senorcavallo.just-themes.com/product/brown-shoes/">
                    <div className="image">
                      <img width={290} height={290} src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/3.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="alt" srcSet="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/3.jpg 290w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/3-150x150.jpg 150w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/3-100x100.jpg 100w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/3-90x90.jpg 90w" sizes="(max-width: 290px) 100vw, 290px"/></div>
                    <h2 className="woocommerce-loop-product__title">Brown Shoes</h2>
                  </a>
                  <div className="post_content entry-content">Proin congue fringilla tortor, nec tempor arcu ...</div>
                </div>
                <span className="price">
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">$</span>62.00</span>
                </span>
                <a href="/shop/?add-to-cart=2252" data-quantity={1} className="button product_type_simple add_to_cart_button ajax_add_to_cart btn btn-second color-hover-main" data-product_id={2252} data-product_sku="data-product_sku" aria-label="Add “Brown Shoes” to your cart" rel="nofollow">Add to cart</a>
              </div>
            </li> */}

          </ul>
        </div>
        <div className="col-lg-4 col-md-4 col-lg-pull-8 col-md-pull-8">
          <div id="content-sidebar" className="content-sidebar woocommerce-sidebar widget-area" role="complementary">

            <aside id="woocommerce_product_categories-2" className="widget woocommerce widget_product_categories">
              <h3 className="header-widget">Κατηγορίες</h3>
              <ul className="product-categories">
                {data.catbreeds.map((catbreed) => (
                  <li key={catbreed.breed} className="cat-item">
                    <Link href={`/pigeons/breed/${catbreed.urlkey}`}>
                    <a >{catbreed.breed} </a>
                    </Link>
                  </li>

                ))}


              </ul>
            </aside>

          </div>
        </div>
      </div>
    </div>
  </div>
)

}

export default BreedPage

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
var nquery = `
query {

  breeds{
    urlkey
  }
}
`

var data = await fetcher(nquery)



  // Get the paths we want to pre-render based on posts
  const paths = data.breeds.map((post) => ({
    params: { urlkey: post.urlkey }
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {

  var nquery = `
  query($urlkey:String!) {

    breeds(where:{urlkey:$urlkey}){
      breed
      photo{
        url
        }
    }

    catbreeds:breeds(where:{breeder:{id:"2"}}){
  breed
  urlkey

}

  pigeons(where:{breed:{urlkey:$urlkey}}){

    kodikos
    name
    eikones{
      url
    }
    urlkey
    timi
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
  return { props: { data,title:data.breeds[0] && data.breeds[0].breed,menu,bodyClass },revalidate:30 }

}

// export async function getServerSideProps() {
//
//
//
//
// var bodyClass="archive post-type-archive post-type-archive-product woocommerce woocommerce-page woocommerce-js"
//
//
//   // Pass data to the page via props
//   return { props:{bodyClass} }
// }
