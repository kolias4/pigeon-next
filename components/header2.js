import Image from 'next/image'
import Link from 'next/link'

function Header2({menu}){
  return(
    <>
    <div id="nav-wrapper">
	<nav class="navbar">
		<div class="container">


			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar top-bar"></span>
					<span class="icon-bar middle-bar"></span>
					<span class="icon-bar bottom-bar"></span>
				</button>
          <Link href="/">
								<a class="logo">
					{/* <img width="168" height="158" src="http://senorcavallo.just-themes.com/wp-content/uploads/2018/01/senor_cavallo_logo-2.png" class="attachment-full size-full" alt=""/> */}
          <Image width={168} height={168} alt="logo" src="/logo.png"/>
          				</a>
              </Link>
							</div>
			<div id="navbar" class="navbar-collapse collapse">
				<div class="toggle-wrap">
					<button type="button" class="navbar-toggle collapsed">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar top-bar"></span>
						<span class="icon-bar middle-bar"></span>
						<span class="icon-bar bottom-bar"></span>
					</button>
					<div class="clearfix"></div>
				</div>
				<ul id="menu-main-menu" class="nav navbar-nav">
          <li id="menu-item-2104" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-2104">
             <Link href="/about">
            <a >
            <span>Σχετικά με εμάς</span>
          </a>
          </Link>
          </li>
<li id="menu-item-2547" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2547"><a ><span>Αρθρα</span></a>
<ul class="sub-menu">
  {menu.map((item) => {
    return (
      <li key={item.title} id="menu-item-43" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-43">
        <Link href={`/blog/category/${item.url_key}`}>
        <a>
          <span>{item.title}</span>
        </a>
        </Link>
      </li>

    )
  })}
</ul>
</li>

<li id="menu-item-60" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-60"><a><span>Gallery</span></a>
<ul class="sub-menu">
	<li id="menu-item-47" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-47"><a href="http://senorcavallo.just-themes.com/gallery-2-columns/"><span>Gallery 2-columns</span></a></li>
	<li id="menu-item-48" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-48"><a href="http://senorcavallo.just-themes.com/gallery-3-columns/"><span>Gallery 3-columns</span></a></li>
	<li id="menu-item-49" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-49"><a href="http://senorcavallo.just-themes.com/gallery-4-columns/"><span>Gallery 4-columns</span></a></li>
</ul>
</li>
<li id="menu-item-619" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-619"><a href="#"><span>Shop</span></a>
<ul class="sub-menu">
	<li id="menu-item-623" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-623"><a href="http://senorcavallo.just-themes.com/shop/"><span>Shop</span></a></li>
	<li id="menu-item-622" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-622"><a href="http://senorcavallo.just-themes.com/cart/"><span>Cart</span></a></li>
	<li id="menu-item-621" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-621"><a href="http://senorcavallo.just-themes.com/checkout/"><span>Checkout</span></a></li>
	<li id="menu-item-620" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-620"><a href="http://senorcavallo.just-themes.com/my-account/"><span>My account</span></a></li>
</ul>
</li>
<li id="menu-item-46" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-25 current_page_item menu-item-46"><a href="http://senorcavallo.just-themes.com/contacts/"><span>Contacts</span></a></li>
<li id="menu-item-61" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-has-mega-menu menu-item-61"><a><span>Elements</span></a><div class="mega-menu">
<ul class="sub-menu mega-menu-row">
	<li id="menu-item-783" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mega-menu-col menu-item-783"><a><span>Typography</span></a>
	<ul class="sub-menu sub-menu-has-icons">
		<li id="menu-item-597" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-597"><a href="http://senorcavallo.just-themes.com/headers/" class="fa fa-font"><span>Headers</span></a></li>
		<li id="menu-item-579" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-579"><a href="http://senorcavallo.just-themes.com/text/" class="fa fa-align-left"><span>Text</span></a></li>
		<li id="menu-item-594" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-594"><a href="http://senorcavallo.just-themes.com/text_columns/" class="fa fa-columns"><span>Text Columns</span></a></li>
		<li id="menu-item-643" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-643"><a href="http://senorcavallo.just-themes.com/table/" class="fa fa-table"><span>Table</span></a></li>
		<li id="menu-item-588" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-588"><a href="http://senorcavallo.just-themes.com/separators/" class="fa fa-arrows-h"><span>Separators</span></a></li>
	</ul>
</li>
	<li id="menu-item-784" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mega-menu-col menu-item-784"><a><span>Form Elements</span></a>
	<ul class="sub-menu sub-menu-has-icons">
		<li id="menu-item-555" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-555"><a href="http://senorcavallo.just-themes.com/buttons/" class="fa fa-mouse-pointer"><span>Buttons</span></a></li>
		<li id="menu-item-705" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-705"><a href="http://senorcavallo.just-themes.com/forms/" class="fa fa-edit"><span>Forms</span></a></li>
	</ul>
</li>
	<li id="menu-item-785" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mega-menu-col menu-item-785"><a><span>Shortcodes</span></a>
	<ul class="sub-menu sub-menu-has-icons">
		<li id="menu-item-527" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-527"><a href="http://senorcavallo.just-themes.com/accordions/" class="fa fa-list"><span>Accordions</span></a></li>
		<li id="menu-item-538" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-538"><a href="http://senorcavallo.just-themes.com/alert/" class="fa fa-exclamation-triangle"><span>Alerts</span></a></li>
		<li id="menu-item-568" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-568"><a href="http://senorcavallo.just-themes.com/tabs/" class="fa fa-th-large"><span>Tabs</span></a></li>
		<li id="menu-item-56" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-56"><a href="http://senorcavallo.just-themes.com/shortcodes/" class="fa fa-caret-square-o-right"><span>Shortcodes</span></a></li>
	</ul>
</li>
	<li id="menu-item-786" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mega-menu-col menu-item-786"><a href="#"><span>Lists</span></a>
	<ul class="sub-menu sub-menu-has-icons">
		<li id="menu-item-675" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-675"><a href="http://senorcavallo.just-themes.com/icons-page/" class="fa fa-gratipay"><span>Icons</span></a></li>
		<li id="menu-item-562" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-562"><a href="http://senorcavallo.just-themes.com/list/" class="fa fa-twitter"><span>Lists and Social Icons</span></a></li>
	</ul>
</li>
</ul>
</div></li>
</ul>				<div class="nav-mob">
					<ul class="nav navbar-nav">
											<li>
							<a href="http://senorcavallo.just-themes.com/cart/" class="shop_table cart-mob" title="View your shopping cart">
								<span class="cart-contents header-cart-count count">0</span>
								<i class="fa fa-shopping-cart" aria-hidden="true"></i>
								<span class="name">Cart</span>
							</a>
						</li>
										</ul>
				</div>
			</div>
		</div>
	</nav>
</div>

<header className="page-header jtx-parallax header-bcn">
  <div className="container">
    <h1>Contacts</h1>
    <ul className="breadcrumbs" typeof="BreadcrumbList" vocab="https://schema.org/">{/* Breadcrumb NavXT 6.3.0 */}
      <li className="home"><span property="itemListElement" typeof="ListItem"><a property="item" typeof="WebPage" title="Go to Senor Cavallo." href="http://senorcavallo.just-themes.com" className="home"><span property="name">Home</span></a><meta property="position" content={1} /></span></li>
      <li className="post post-page current-item"><span property="itemListElement" typeof="ListItem"><span property="name">Contacts</span><meta property="position" content={2} /></span></li>
    </ul>	  </div>
  <ul className="nav-left">
    <li><a href="#" target="_blank"><span className="fa fa-facebook-f" /></a></li>
    <li><a href="#" target="_blank"><span className="fa fa-twitter" /></a></li>
    <li><a href="#" target="_blank"><span className="fa fa-google-plus" /></a></li>
    <li><a href="#" target="_blank"><span className="fa fa-instagram" /></a></li>
  </ul>
  <div className="nav-right">
    <a href="http://senorcavallo.just-themes.com/cart/" className="shop_table cart " title="View your shopping cart">
      <i className="fa fa-shopping-cart" aria-hidden="true" />
      <span className="cart-contents header-cart-count count">0</span>
    </a>
    <div id="top-search" className="top-search">
      <a href="#" id="top-search-ico" className="fa fa-search" aria-hidden="true" />
      <input placeholder="Search" defaultValue type="text" />
      <span className="search-close">×</span>
    </div>
  </div>
</header>

    </>

  )

}

export default Header2
