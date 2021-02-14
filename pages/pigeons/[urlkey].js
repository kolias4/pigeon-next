// TODO buy button event

import "react-responsive-carousel/lib/styles/carousel.min.css"

import { Carousel } from 'react-responsive-carousel'
import { NextSeo } from 'next-seo';
import {useRouter} from 'next/router'
import {useState,useContext} from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { AppContext, UiContext } from '../../context/context';
import MyModal from '../../components/modals/mymodal';
import PigeonOffer from '../../components/forms/pigeonoffer';
import PigeonTabs from '../../components/pigeontabs'
import fetcher from '../../functions/fetcher'
import menuquery from '../../functions/queries/menuquery'




function PigeonPage({data, notFound,title}) {

  const router = useRouter()


  if (router.isFallback) {
    return <div>Loading...</div>
  }

  const [reveal,setReveal] = useState(false)

  const {setToaster} = useContext(UiContext)
  const {user} = useContext(AppContext)



  const pigeon = data.pigeons[0]

  if(!pigeon){
    return (
      <h2 className="text-center" >Δεν βρέθηκε</h2>
    )
  }


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

    <div className="container">

    <NextSeo title={`${title} | MyPigeon`}
      description={`Περιστέρι ${title}`}
      canonical={process.env.NEXT_PUBLIC_SITE_URL+router.asPath}
      openGraph={{
    type: 'website',
    url: `${process.env.NEXT_PUBLIC_SITE_URL+router.asPath}`,
    title:`${title} | MyPigeon`,
    description:`Περιστέρι ${title}`,
    images: [
      {
        url:`${process.env.NEXT_PUBLIC_STRAPI_URL}${pigeon.eikones[0] && pigeon.eikones[0].url || '/logo.png'}`,
        alt:`${title}`,
      }

    ],
    site_name: 'MyPigeon',
  }}
    />

    <MyModal contentClassName="mymodalcontent" title={`Αγορά ${pigeon.kodikos}`} reveal={reveal} setReveal={setReveal}>
      <PigeonOffer
      user={user}
      onSuccess={() => {
        setToaster({show:true,message:"Το αίτημα αγοράς καταχωρήθηκε. Ευχαριστούμε που μας επιλέξατε",success:true});
        setReveal(false)
      }
    }

      onFail={() => {
        setToaster({show:true,message:"ΚΑΤΙ ΠΗΓΕ ΛΑΘΟΣ",fail:true});

      }
    }

      pigeon_id={pigeon.id}

      />
    </MyModal>



  <div className="inner-page margin-default">

  <div className="text-page">

        <div className="woocommerce-notices-wrapper" />
        <div id="product-2252" className="has-post-thumbnail product type-product post-2252 status-publish first instock product_cat-accessories product_cat-shoes product_tag-boot product_tag-shoes product_tag-owboy shipping-taxable purchasable product-type-simple">
          <div className="row">
            <div className="col-md-6">
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

           <div className="col-md-6  ">
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

            <p className="price my-3">
              <span className="woocommerce-Price-amount amount">
                <span className="text-dark">Τιμή: </span>
              <span className="woocommerce-Price-currencySymbol">€</span>{pigeon.timi}
            </span>
            </p>

            {pigeon.pros_polisi && <div style={{fontSize:'1.5rem'}} className="offercount my-3">
            <span className="font-weight-bold">Καταχωρημένες αιτήσεις: {pigeon.pigeonoffers.length}</span>

            </div>}

            {pigeon.sold_out && <div>
              <h3 className="text-danger">Πουλήθηκε</h3>
            </div>

            }


            {pigeon.pros_polisi && <div className="cart">

              <button onClick={()=> setReveal(true)} type="button" name="add-to-cart" className=" btn btn-second color-hover-main">
               Αίτηση Αγοράς
              </button>
            </div>}
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

var data = await fetcher(nquery,{},process.env.STRAPI_ADMIN_TOKEN)

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
  sold_out
  name
  id

  pigeonoffers{
    id

  }


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
  return { props: { data,title:data.pigeons[0] && data.pigeons[0].kodikos,menu,bodyClass },revalidate:30 }

}
