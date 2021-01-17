import Image from 'next/image'

import Link from 'next/link'

import fetcher from '../../functions/fetcher'
import {useRouter} from 'next/router'
import menuquery from '../../functions/queries/menuquery'


function PigeonPage({data, notFound}) {

  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }







  return (

    <div className="container">
  <div className="inner-page margin-default">

  <div className="text-page">

        <div className="woocommerce-notices-wrapper" />
        <div id="product-2252" className="has-post-thumbnail product type-product post-2252 status-publish first instock product_cat-accessories product_cat-shoes product_tag-boot product_tag-shoes product_tag-owboy shipping-taxable purchasable product-type-simple">
          <div className="row">
            <div className="col-md-6">
          <div className="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images" data-columns={4} style={{opacity: 1, transition: 'opacity 0.25s ease-in-out 0s'}}>
            <figure className="woocommerce-product-gallery__wrapper">
              <div data-thumb="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/3-100x100.jpg" data-thumb-alt className="woocommerce-product-gallery__image"><a href="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/3.jpg">
              <img width={290} height={290} src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/3.jpg" className="wp-post-image" alt title={3} data-caption data-src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/3.jpg" data-large_image="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/3.jpg" data-large_image_width={290} data-large_image_height={290} srcSet="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/3.jpg 290w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/3-150x150.jpg 150w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/3-100x100.jpg 100w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/3-90x90.jpg 90w" sizes="(max-width: 290px) 100vw, 290px" /></a>
            </div>
            </figure>
          </div>
          </div>

           <div className="col-md-6">
          <div className="summary entry-summary">
            <h1 className="product_title entry-title">Brown Shoes</h1>
            <p className="price"><span className="woocommerce-Price-amount amount">
              <span className="woocommerce-Price-currencySymbol">$</span>62.00</span>
            </p>
            <form className="cart" action="http://senorcavallo.just-themes.com/product/brown-shoes/" method="post" encType="multipart/form-data">
              <div className="quantity">
                <label className="screen-reader-text" htmlFor="quantity_60033e69636ca">Brown Shoes quantity</label>
                <input type="number" id="quantity_60033e69636ca" className="input-text qty text" step={1} min={1} max name="quantity" defaultValue={1} title="Qty" size={4} inputMode="numeric" />
                <span className="more" /><span className="less" /></div>
              <button type="submit" name="add-to-cart" value={2252} className="single_add_to_cart_button button alt btn btn-second color-hover-main color-hover-second">Add to cart</button>
            </form>
            <div className="product_meta">
              <span className="posted_in">Categories: <a href="http://senorcavallo.just-themes.com/product-category/accessories/" rel="tag">Accessories</a>, <a href="http://senorcavallo.just-themes.com/product-category/shoes/" rel="tag">Shoes</a></span>
              <span className="tagged_as">Tags: <a href="http://senorcavallo.just-themes.com/product-tag/boot/" rel="tag">boot</a>, <a href="http://senorcavallo.just-themes.com/product-tag/shoes/" rel="tag">shoes</a>, <a href="http://senorcavallo.just-themes.com/product-tag/%d1%81owboy/" rel="tag">сowboy</a></span>
            </div>
          </div>
          </div>


          </div>


          <div className="woocommerce-tabs wc-tabs-wrapper">
            <ul className="tabs wc-tabs" role="tablist">
              <li className="description_tab active" id="tab-title-description" role="tab" aria-controls="tab-description">
                <a href="#tab-description">Description</a>
              </li>
              <li className="reviews_tab" id="tab-title-reviews" role="tab" aria-controls="tab-reviews">
                <a href="#tab-reviews">Reviews (0)</a>
              </li>
            </ul>
            <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description" style={{display: 'block'}}>
              <h2>Description</h2>
              <p>Proin congue fringilla tortor, nec tempor arcu posuere eu. Fusce commodo posuere felis ut luctus. Vestibulum convallis velit eget nunc rutrum posuere. Nunc iaculis mi sed neque congue egestas. Maecenas vel aliquet libero. Sed varius nibh enim, posuere faucibus felis volutpat quis. Nam vel dui ac nulla elementum imperdiet. Aliquam lacinia quam nec sapien tempus, ut ornare enim pharetra. Praesent condimentum purus et lectus euismod, vitae ultrices augue vehicula.</p>
            </div>
            <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab" id="tab-reviews" role="tabpanel" aria-labelledby="tab-title-reviews" style={{display: 'none'}}>
              <div id="reviews" className="woocommerce-Reviews">
                <div id="comments">
                  <h2 className="woocommerce-Reviews-title">
                    Reviews		</h2>
                  <p className="woocommerce-noreviews">There are no reviews yet.</p>
                </div>
                <div id="review_form_wrapper">
                  <div id="review_form">
                    <div id="respond" className="comment-respond">
                      <span id="reply-title" className="comment-reply-title">Be the first to review “Brown Shoes” <small><a rel="nofollow" id="cancel-comment-reply-link" href="/product/brown-shoes/#respond" style={{display: 'none'}}>Cancel reply</a></small></span>			<form action="http://senorcavallo.just-themes.com/wp-comments-post.php" method="post" id="commentform" className="comment-form" noValidate>
                        <p className="comment-notes"><span id="email-notes">Your email address will not be published.</span> Required fields are marked <span className="required">*</span></p><div className="comment-form-rating"><label htmlFor="rating">Your rating</label><p className="stars">						<span>							<a className="star-1" href="#">1</a>							<a className="star-2" href="#">2</a>							<a className="star-3" href="#">3</a>							<a className="star-4" href="#">4</a>							<a className="star-5" href="#">5</a>						</span>					</p><select name="rating" id="rating" required style={{display: 'none'}}>
                            <option value>Rate…</option>
                            <option value={5}>Perfect</option>
                            <option value={4}>Good</option>
                            <option value={3}>Average</option>
                            <option value={2}>Not that bad</option>
                            <option value={1}>Very poor</option>
                          </select></div><p className="comment-form-comment"><label htmlFor="comment">Your review&nbsp;<span className="required">*</span></label><textarea id="comment" name="comment" cols={45} rows={8} required defaultValue={""} /></p><p className="comment-form-author"><label htmlFor="author">Name&nbsp;<span className="required">*</span></label> <input id="author" name="author" type="text" defaultValue size={30} required /></p>
                        <p className="comment-form-email"><label htmlFor="email">Email&nbsp;<span className="required">*</span></label> <input id="email" name="email" type="email" defaultValue size={30} required /></p>
                        <p className="form-submit"><input name="submit" type="submit" id="submit" className="submit" defaultValue="Submit" /> <input type="hidden" name="comment_post_ID" defaultValue={2252} id="comment_post_ID" />
                          <input type="hidden" name="comment_parent" id="comment_parent" defaultValue={0} />
                        </p><p style={{display: 'none'}}><input type="hidden" id="akismet_comment_nonce" name="akismet_comment_nonce" defaultValue="70540d8b6a" /></p><p style={{display: 'none'}} />			<input type="hidden" id="ak_js" name="ak_js" defaultValue={1610825324108} /></form>
                    </div>{/* #respond */}
                  </div>
                </div>
                <div className="clear" />
              </div>
            </div>
          </div>

        </div>
      </div>


    </div>
</div>


)

}

export default PigeonPage

export async function getServerSideProps() {




var bodyClass="archive post-type-archive post-type-archive-product woocommerce woocommerce-page woocommerce-js"


  // Pass data to the page via props
  return { props:{bodyClass} }
}

// export async function getStaticPaths() {
//   // Call an external API endpoint to get posts
// var nquery = `
// query {
//
//   breeds{
//     urlkey
//   }
// }
// `
//
// var data = await fetcher(nquery)
//
//
//   const paths = data.breeds.map((post) => ({
//     params: { urlkey: post.urlkey }
//   }))
//
//   return { paths, fallback: true }
// }
//
// export async function getStaticProps({ params }) {
//
//   var nquery = `
//   query($urlkey:String!) {
//
//     breeds(where:{urlkey:$urlkey}){
//       breed
//     }
//
//     catbreeds:breeds(where:{breeder:{id:"2"}}){
//   breed
//   urlkey
//
// }
//
//   pigeons(where:{breed:{urlkey:$urlkey}}){
//
//     kodikos
//     name
//     eikones{
//       url
//     }
//     urlkey
//     timi
//   }
//
// }
//   `
//
//
//   const data = await fetcher(nquery,{
//     variables:{
//       urlkey:params.urlkey
//     }
//   })
//
//   var menu = await menuquery()
//   var bodyClass="archive post-type-archive post-type-archive-product woocommerce woocommerce-page woocommerce-js"
//
//
//
//   return { props: { data,title:data.breeds[0] && data.breeds[0].breed,menu,bodyClass },revalidate:30 }
//
// }
