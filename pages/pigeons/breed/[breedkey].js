import Image from 'next/image'

import Link from 'next/link'

import fetcher from '../../../functions/fetcher'
import {useRouter} from 'next/router'


function BreedPage({data, notFound}) {

  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  if (notFound) {
    return (<h1 className="text-center">Δεν βρέθηκαν άρθρα</h1>)
  }

  return (
    <div className="container">
    <div className="inner-page margin-default">
      <div className="row">
        <div className="col-lg-8 col-lg-push-4 col-md-8 col-md-push-4 text-page">
          <header className="woocommerce-products-header"></header>
          <div className="woocommerce-notices-wrapper"/>
          <p className="woocommerce-result-count">
            Showing all 12 results
          </p>
          <form className="woocommerce-ordering" method="get">
            <div className="select-wrap">
              <select name="orderby" className="orderby" aria-label="Shop order">
                <option value="menu_order" selected="selected">Default sorting</option>
                <option value="popularity">Sort by popularity</option>
                <option value="rating">Sort by average rating</option>
                <option value="date">Sort by latest</option>
                <option value="price">Sort by price: low to high</option>
                <option value="price-desc">Sort by price: high to low</option>
              </select>
            </div>
            <input type="hidden" name="paged" defaultValue={1}/>
          </form>
          <ul className="products columns-4">
            <li className="has-post-thumbnail product type-product post-2707 status-publish first instock product_cat-accessories product_cat-hat product_cat-tools product_tag-barrel shipping-taxable purchasable product-type-simple">
              <div className="matchHeight1 item">
                <div className="matchHeight jtx-product" data-mh="jtx-product" style={{
                    height: 403
                  }}>
                  <a href="http://senorcavallo.just-themes.com/product/barrel/">
                    <div className="image">
                      <img width={290} height={290} src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/7.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="alt" srcSet="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/7.jpg 290w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/7-150x150.jpg 150w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/7-100x100.jpg 100w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/7-90x90.jpg 90w" sizes="(max-width: 290px) 100vw, 290px"/></div>
                    <h2 className="woocommerce-loop-product__title">Barrel</h2>
                  </a>
                  <div className="post_content entry-content">Proin congue fringilla tortor, nec tempor arcu ...</div>
                </div>
                <span className="price">
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">$</span>43.00</span>
                </span>
                <a href="/shop/?add-to-cart=2707" data-quantity={1} className="button product_type_simple add_to_cart_button ajax_add_to_cart btn btn-second color-hover-main" data-product_id={2707} data-product_sku="data-product_sku" aria-label="Add “Barrel” to your cart" rel="nofollow">Add to cart</a>
              </div>
            </li>
            <li className="has-post-thumbnail product type-product post-2252 status-publish instock product_cat-accessories product_cat-shoes product_tag-boot product_tag-shoes product_tag-owboy shipping-taxable purchasable product-type-simple">
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
            </li>
            <li className="has-post-thumbnail product type-product post-2255 status-publish instock product_cat-accessories product_cat-hat product_cat-shoes product_tag-boot product_tag-hat product_tag-shoes product_tag-owboy shipping-taxable purchasable product-type-simple">
              <div className="matchHeight1 item">
                <div className="matchHeight jtx-product" data-mh="jtx-product" style={{
                    height: 403
                  }}>
                  <a href="http://senorcavallo.just-themes.com/product/brown-shoes-and-hat/">
                    <div className="image">
                      <img width={290} height={290} src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/4.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="alt" srcSet="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/4.jpg 290w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/4-150x150.jpg 150w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/4-100x100.jpg 100w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/4-90x90.jpg 90w" sizes="(max-width: 290px) 100vw, 290px"/></div>
                    <h2 className="woocommerce-loop-product__title">Brown Shoes and Hat</h2>
                  </a>
                  <div className="post_content entry-content">Proin congue fringilla tortor, nec tempor arcu ...</div>
                </div>
                <span className="price">
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">$</span>44.00</span>
                </span>
                <a href="/shop/?add-to-cart=2255" data-quantity={1} className="button product_type_simple add_to_cart_button ajax_add_to_cart btn btn-second color-hover-main" data-product_id={2255} data-product_sku="data-product_sku" aria-label="Add “Brown Shoes and Hat” to your cart" rel="nofollow">Add to cart</a>
              </div>
            </li>
            <li className="has-post-thumbnail product type-product post-2708 status-publish last instock product_cat-accessories product_cat-tools shipping-taxable purchasable product-type-simple">
              <div className="matchHeight1 item">
                <div className="matchHeight jtx-product" data-mh="jtx-product" style={{
                    height: 403
                  }}>
                  <a href="http://senorcavallo.just-themes.com/product/cradle/">
                    <div className="image">
                      <img width={290} height={290} src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/6.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="alt" srcSet="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/6.jpg 290w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/6-150x150.jpg 150w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/6-100x100.jpg 100w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/6-90x90.jpg 90w" sizes="(max-width: 290px) 100vw, 290px"/></div>
                    <h2 className="woocommerce-loop-product__title">Cradle</h2>
                  </a>
                  <div className="post_content entry-content">Suspendisse at sodales quam, vitae varius nisi. ...</div>
                </div>
                <span className="price">
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">$</span>66.00</span>
                </span>
                <a href="/shop/?add-to-cart=2708" data-quantity={1} className="button product_type_simple add_to_cart_button ajax_add_to_cart btn btn-second color-hover-main" data-product_id={2708} data-product_sku="data-product_sku" aria-label="Add “Cradle” to your cart" rel="nofollow">Add to cart</a>
              </div>
            </li>
            <li className="has-post-thumbnail product type-product post-2253 status-publish first instock product_cat-hat product_tag-dark product_tag-hat product_tag-owboy sale shipping-taxable purchasable product-type-simple">
              <div className="matchHeight1 item">
                <div className="matchHeight jtx-product" data-mh="jtx-product" style={{
                    height: 413
                  }}>
                  <a href="http://senorcavallo.just-themes.com/product/dark-cowboy-hat/">
                    <div className="image">
                      <span className="onsale">Sale!</span>
                      <img width={300} height={300} src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/8-300x300.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="alt" srcSet="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/8-300x300.jpg 300w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/8-150x150.jpg 150w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/8-768x768.jpg 768w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/8-1024x1024.jpg 1024w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/8-600x600.jpg 600w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/8-100x100.jpg 100w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/8-90x90.jpg 90w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/8.jpg 1400w" sizes="(max-width: 300px) 100vw, 300px"/></div>
                    <h2 className="woocommerce-loop-product__title">Dark cowboy hat</h2>
                  </a>
                  <div className="post_content entry-content">Suspendisse at sodales quam, vitae varius nisi. ...</div>
                </div>
                <span className="price">
                  <del>
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">$</span>33.00</span>
                  </del>
                  <ins>
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">$</span>18.00</span>
                  </ins>
                </span>
                <a href="/shop/?add-to-cart=2253" data-quantity={1} className="button product_type_simple add_to_cart_button ajax_add_to_cart btn btn-second color-hover-main" data-product_id={2253} data-product_sku="data-product_sku" aria-label="Add “Dark cowboy hat” to your cart" rel="nofollow">Add to cart</a>
              </div>
            </li>
            <li className="has-post-thumbnail product type-product post-2709 status-publish instock product_cat-accessories product_cat-tools shipping-taxable purchasable product-type-simple">
              <div className="matchHeight1 item">
                <div className="matchHeight jtx-product" data-mh="jtx-product" style={{
                    height: 413
                  }}>
                  <a href="http://senorcavallo.just-themes.com/product/delivery/">
                    <div className="image">
                      <img width={290} height={290} src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/11.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="alt" srcSet="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/11.jpg 290w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/11-150x150.jpg 150w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/11-100x100.jpg 100w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/11-90x90.jpg 90w" sizes="(max-width: 290px) 100vw, 290px"/></div>
                    <h2 className="woocommerce-loop-product__title">Delivery</h2>
                  </a>
                  <div className="post_content entry-content">Proin congue fringilla tortor, nec tempor arcu ...</div>
                </div>
                <span className="price">
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">$</span>1.00</span>
                </span>
                <a href="/shop/?add-to-cart=2709" data-quantity={1} className="button product_type_simple add_to_cart_button ajax_add_to_cart btn btn-second color-hover-main" data-product_id={2709} data-product_sku="data-product_sku" aria-label="Add “Delivery” to your cart" rel="nofollow">Add to cart</a>
              </div>
            </li>
            <li className="has-post-thumbnail product type-product post-2457 status-publish instock product_cat-accessories product_cat-hat product_cat-tools product_tag-bag product_tag-leather shipping-taxable purchasable product-type-simple">
              <div className="matchHeight1 item">
                <div className="matchHeight jtx-product" data-mh="jtx-product" style={{
                    height: 403
                  }}>
                  <a href="http://senorcavallo.just-themes.com/product/handbag/">
                    <div className="image">
                      <img width={290} height={290} src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/9.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="alt" srcSet="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/9.jpg 290w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/9-150x150.jpg 150w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/9-100x100.jpg 100w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/9-90x90.jpg 90w" sizes="(max-width: 290px) 100vw, 290px"/></div>
                    <h2 className="woocommerce-loop-product__title">Handbag</h2>
                  </a>
                  <div className="post_content entry-content">Mauris ultricies sit amet elit ut interdum. Morbi ...</div>
                </div>
                <span className="price">
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">$</span>42.00</span>
                </span>
                <a href="/shop/?add-to-cart=2457" data-quantity={1} className="button product_type_simple add_to_cart_button ajax_add_to_cart btn btn-second color-hover-main" data-product_id={2457} data-product_sku="data-product_sku" aria-label="Add “Handbag” to your cart" rel="nofollow">Add to cart</a>
              </div>
            </li>
            <li className="has-post-thumbnail product type-product post-2256 status-publish last instock product_cat-accessories product_tag-leather shipping-taxable purchasable product-type-simple">
              <div className="matchHeight1 item">
                <div className="matchHeight jtx-product" data-mh="jtx-product" style={{
                    height: 403
                  }}>
                  <a href="http://senorcavallo.just-themes.com/product/leather-belt/">
                    <div className="image">
                      <img width={290} height={290} src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/12.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="alt" srcSet="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/12.jpg 290w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/12-150x150.jpg 150w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/12-100x100.jpg 100w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/12-90x90.jpg 90w" sizes="(max-width: 290px) 100vw, 290px"/></div>
                    <h2 className="woocommerce-loop-product__title">Leather belt</h2>
                  </a>
                  <div className="post_content entry-content">Proin congue fringilla tortor, nec tempor arcu ...</div>
                </div>
                <span className="price">
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">$</span>15.00</span>
                </span>
                <a href="/shop/?add-to-cart=2256" data-quantity={1} className="button product_type_simple add_to_cart_button ajax_add_to_cart btn btn-second color-hover-main" data-product_id={2256} data-product_sku="data-product_sku" aria-label="Add “Leather belt” to your cart" rel="nofollow">Add to cart</a>
              </div>
            </li>
            <li className="has-post-thumbnail product type-product post-2254 status-publish first instock product_cat-hat product_tag-boot product_tag-hat product_tag-owboy shipping-taxable purchasable product-type-simple">
              <div className="matchHeight1 item">
                <div className="matchHeight jtx-product" data-mh="jtx-product" style={{
                    height: 435
                  }}>
                  <a href="http://senorcavallo.just-themes.com/product/light-brown-cowboy-hat/">
                    <div className="image">
                      <img width={300} height={300} src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/5-300x300.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="alt" srcSet="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/5-300x300.jpg 300w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/5-150x150.jpg 150w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/5-768x768.jpg 768w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/5-1024x1024.jpg 1024w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/5-600x600.jpg 600w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/5-100x100.jpg 100w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/5-90x90.jpg 90w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/5.jpg 1400w" sizes="(max-width: 300px) 100vw, 300px"/></div>
                    <h2 className="woocommerce-loop-product__title">Light brown cowboy hat</h2>
                  </a>
                  <div className="post_content entry-content">Aenean augue nibh, varius vitae varius tincidunt, ...</div>
                </div>
                <span className="price">
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">$</span>28.00</span>
                </span>
                <a href="/shop/?add-to-cart=2254" data-quantity={1} className="button product_type_simple add_to_cart_button ajax_add_to_cart btn btn-second color-hover-main" data-product_id={2254} data-product_sku="data-product_sku" aria-label="Add “Light brown cowboy hat” to your cart" rel="nofollow">Add to cart</a>
              </div>
            </li>
            <li className="has-post-thumbnail product type-product post-2239 status-publish instock product_cat-accessories product_cat-shoes product_tag-boot product_tag-owboy sale shipping-taxable purchasable product-type-simple">
              <div className="matchHeight1 item">
                <div className="matchHeight jtx-product" data-mh="jtx-product" style={{
                    height: 435
                  }}>
                  <a href="http://senorcavallo.just-themes.com/product/riders-shoes/">
                    <div className="image">
                      <span className="onsale">Sale!</span>
                      <img width={290} height={290} src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/1.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="alt" srcSet="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/1.jpg 290w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/1-150x150.jpg 150w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/1-100x100.jpg 100w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/1-90x90.jpg 90w" sizes="(max-width: 290px) 100vw, 290px"/></div>
                    <h2 className="woocommerce-loop-product__title">Rider’s shoes</h2>
                  </a>
                  <div className="post_content entry-content">Lorem ipsum dolor sit amet, consectetur ...</div>
                </div>
                <span className="price">
                  <del>
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">$</span>23.00</span>
                  </del>
                  <ins>
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">$</span>19.00</span>
                  </ins>
                </span>
                <a href="/shop/?add-to-cart=2239" data-quantity={1} className="button product_type_simple add_to_cart_button ajax_add_to_cart btn btn-second color-hover-main" data-product_id={2239} data-product_sku="data-product_sku" aria-label="Add “Rider’s shoes” to your cart" rel="nofollow">Add to cart</a>
              </div>
            </li>
            <li className="has-post-thumbnail product type-product post-2249 status-publish instock product_cat-accessories product_cat-hat product_cat-shoes product_tag-boot product_tag-hat product_tag-shoes shipping-taxable purchasable product-type-simple">
              <div className="matchHeight1 item">
                <div className="matchHeight jtx-product" data-mh="jtx-product" style={{
                    height: 403
                  }}>
                  <a href="http://senorcavallo.just-themes.com/product/shoes-and-hat/">
                    <div className="image">
                      <img width={290} height={290} src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/2.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="alt" srcSet="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/2.jpg 290w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/2-150x150.jpg 150w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/2-100x100.jpg 100w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/2-90x90.jpg 90w" sizes="(max-width: 290px) 100vw, 290px"/></div>
                    <h2 className="woocommerce-loop-product__title">Shoes and Hat</h2>
                  </a>
                  <div className="post_content entry-content">Mauris ultricies sit amet elit ut interdum. Morbi ...</div>
                </div>
                <span className="price">
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">$</span>47.00</span>
                </span>
                <a href="/shop/?add-to-cart=2249" data-quantity={1} className="button product_type_simple add_to_cart_button ajax_add_to_cart btn btn-second color-hover-main" data-product_id={2249} data-product_sku="data-product_sku" aria-label="Add “Shoes and Hat” to your cart" rel="nofollow">Add to cart</a>
              </div>
            </li>
            <li className="has-post-thumbnail product type-product post-2257 status-publish last instock product_cat-accessories product_tag-leather shipping-taxable purchasable product-type-simple">
              <div className="matchHeight1 item">
                <div className="matchHeight jtx-product" data-mh="jtx-product" style={{
                    height: 403
                  }}>
                  <a href="http://senorcavallo.just-themes.com/product/wallet/">
                    <div className="image">
                      <img width={290} height={290} src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/10.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="alt" srcSet="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/10.jpg 290w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/10-150x150.jpg 150w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/10-100x100.jpg 100w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/10-90x90.jpg 90w" sizes="(max-width: 290px) 100vw, 290px"/></div>
                    <h2 className="woocommerce-loop-product__title">Wallet</h2>
                  </a>
                  <div className="post_content entry-content">Proin congue fringilla tortor, nec tempor arcu ...</div>
                </div>
                <span className="price">
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">$</span>23.00</span>
                </span>
                <a href="/shop/?add-to-cart=2257" data-quantity={1} className="button product_type_simple add_to_cart_button ajax_add_to_cart btn btn-second color-hover-main" data-product_id={2257} data-product_sku="data-product_sku" aria-label="Add “Wallet” to your cart" rel="nofollow">Add to cart</a>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-4 col-lg-pull-8 col-md-pull-8">
          <div id="content-sidebar" className="content-sidebar woocommerce-sidebar widget-area" role="complementary">
            <aside id="woocommerce_widget_cart-2" className="widget woocommerce widget_shopping_cart">
              <h3 className="header-widget">Cart</h3>
              <div className="widget_shopping_cart_content">
                <p className="woocommerce-mini-cart__empty-message">No products in the cart.</p>
              </div>
            </aside>
            <aside id="woocommerce_product_categories-2" className="widget woocommerce widget_product_categories">
              <h3 className="header-widget">Categories</h3>
              <ul className="product-categories">
                <li className="cat-item cat-item-215">
                  <a href="http://senorcavallo.just-themes.com/product-category/accessories/">Accessories</a>
                </li>
                <li className="cat-item cat-item-213">
                  <a href="http://senorcavallo.just-themes.com/product-category/hat/">Hats</a>
                </li>
                <li className="cat-item cat-item-211">
                  <a href="http://senorcavallo.just-themes.com/product-category/shoes/">Shoes</a>
                </li>
                <li className="cat-item cat-item-218">
                  <a href="http://senorcavallo.just-themes.com/product-category/tools/">Tools</a>
                </li>
                <li className="cat-item cat-item-225">
                  <a href="http://senorcavallo.just-themes.com/product-category/uncategorized/">Uncategorized</a>
                </li>
              </ul>
            </aside>
            <aside id="woocommerce_product_tag_cloud-2" className="widget woocommerce widget_product_tag_cloud">
              <h3 className="header-widget">Tags</h3>
              <div className="tagcloud">
                <a href="http://senorcavallo.just-themes.com/product-tag/bag/" className="tag-cloud-link tag-link-217 tag-link-position-1" style={{
                    fontSize: '8pt'
                  }} aria-label="bag (1 product)">bag</a>
                <a href="http://senorcavallo.just-themes.com/product-tag/barrel/" className="tag-cloud-link tag-link-219 tag-link-position-2" style={{
                    fontSize: '8pt'
                  }} aria-label="barrel (1 product)">barrel</a>
                <a href="http://senorcavallo.just-themes.com/product-tag/boot/" className="tag-cloud-link tag-link-212 tag-link-position-3" style={{
                    fontSize: '22pt'
                  }} aria-label="boot (5 products)">boot</a>
                <a href="http://senorcavallo.just-themes.com/product-tag/dark/" className="tag-cloud-link tag-link-214 tag-link-position-4" style={{
                    fontSize: '8pt'
                  }} aria-label="dark (1 product)">dark</a>
                <a href="http://senorcavallo.just-themes.com/product-tag/hat/" className="tag-cloud-link tag-link-210 tag-link-position-5" style={{
                    fontSize: '19.666666666667pt'
                  }} aria-label="hat (4 products)">hat</a>
                <a href="http://senorcavallo.just-themes.com/product-tag/leather/" className="tag-cloud-link tag-link-216 tag-link-position-6" style={{
                    fontSize: '16.75pt'
                  }} aria-label="leather (3 products)">leather</a>
                <a href="http://senorcavallo.just-themes.com/product-tag/shoes/" className="tag-cloud-link tag-link-209 tag-link-position-7" style={{
                    fontSize: '16.75pt'
                  }} aria-label="shoes (3 products)">shoes</a>
                <a href="http://senorcavallo.just-themes.com/product-tag/%d1%81owboy/" className="tag-cloud-link tag-link-208 tag-link-position-8" style={{
                    fontSize: '22pt'
                  }} aria-label="сowboy (5 products)">сowboy</a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  </div>
)

}

export default BreedPage

export async function getServerSideProps() {




var bodyClass="archive post-type-archive post-type-archive-product woocommerce woocommerce-page woocommerce-js"


  // Pass data to the page via props
  return { props:{bodyClass} }
}
