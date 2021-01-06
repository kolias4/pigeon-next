import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Header2({menu,title}){

  const router = useRouter()
  return(
    <>
    <div id="nav-wrapper">
	<nav className="navbar">
		<div className="container">


			<div className="navbar-header">
				<button type="button" className="navbar-toggle collapsed">
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar top-bar"></span>
					<span className="icon-bar middle-bar"></span>
					<span className="icon-bar bottom-bar"></span>
				</button>
          <Link href="/">
								<a className="logo">
					{/* <img width="168" height="158" src="http://senorcavallo.just-themes.com/wp-content/uploads/2018/01/senor_cavallo_logo-2.png" className="attachment-full size-full" alt=""/> */}
          <Image width={168} height={158} alt="logo" src="/logo.png"/>
          				</a>
              </Link>
							</div>
			<div id="navbar" className="navbar-collapse collapse">
				<div className="toggle-wrap">
					<button type="button" className="navbar-toggle collapsed">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar top-bar"></span>
						<span className="icon-bar middle-bar"></span>
						<span className="icon-bar bottom-bar"></span>
					</button>
					<div className="clearfix"></div>
				</div>
				<ul id="menu-main-menu" className="nav navbar-nav">
          <li id="menu-item-2104" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-2104">
             <Link href="/about">
            <a >
            <span>Σχετικά με εμάς</span>
          </a>
          </Link>
          </li>
<li id="menu-item-2547" className={`menu-item menu-item-has-children ${router.asPath.startsWith("/blog")?'current_page_item':''}`}><a ><span>Αρθρα</span></a>
<ul className="sub-menu">
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

<li id="menu-item-60" className="menu-item  menu-item-has-children "><a><span>Gallery</span></a>
<ul className="sub-menu">
	<li id="menu-item-47" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-47"><a href="http://senorcavallo.just-themes.com/gallery-2-columns/"><span>Gallery 2-columns</span></a></li>
	<li id="menu-item-48" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-48"><a href="http://senorcavallo.just-themes.com/gallery-3-columns/"><span>Gallery 3-columns</span></a></li>
	<li id="menu-item-49" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-49"><a href="http://senorcavallo.just-themes.com/gallery-4-columns/"><span>Gallery 4-columns</span></a></li>
</ul>
</li>
<li id="menu-item-619" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-619"><a href="#"><span>Shop</span></a>
<ul className="sub-menu">
	<li id="menu-item-623" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-623"><a href="http://senorcavallo.just-themes.com/shop/"><span>Shop</span></a></li>
	<li id="menu-item-622" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-622"><a href="http://senorcavallo.just-themes.com/cart/"><span>Cart</span></a></li>
	<li id="menu-item-621" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-621"><a href="http://senorcavallo.just-themes.com/checkout/"><span>Checkout</span></a></li>
	<li id="menu-item-620" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-620"><a href="http://senorcavallo.just-themes.com/my-account/"><span>My account</span></a></li>
</ul>
</li>
<li id="menu-item-46" className={`menu-item ${router.asPath.startsWith("/contact")?'current_page_item':''} `}>
<Link href="/contact">
<a>
<span>Επικοινωνία</span>
</a>
</Link>
</li>
<li id="menu-item-61" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-has-mega-menu menu-item-61"><a><span>Elements</span></a><div className="mega-menu">
<ul className="sub-menu mega-menu-row">
	<li id="menu-item-783" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mega-menu-col menu-item-783"><a><span>Typography</span></a>
	<ul className="sub-menu sub-menu-has-icons">
		<li id="menu-item-597" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-597"><a href="http://senorcavallo.just-themes.com/headers/" className="fa fa-font"><span>Headers</span></a></li>
		<li id="menu-item-579" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-579"><a href="http://senorcavallo.just-themes.com/text/" className="fa fa-align-left"><span>Text</span></a></li>
		<li id="menu-item-594" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-594"><a href="http://senorcavallo.just-themes.com/text_columns/" className="fa fa-columns"><span>Text Columns</span></a></li>
		<li id="menu-item-643" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-643"><a href="http://senorcavallo.just-themes.com/table/" className="fa fa-table"><span>Table</span></a></li>
		<li id="menu-item-588" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-588"><a href="http://senorcavallo.just-themes.com/separators/" className="fa fa-arrows-h"><span>Separators</span></a></li>
	</ul>
</li>
	<li id="menu-item-784" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mega-menu-col menu-item-784"><a><span>Form Elements</span></a>
	<ul className="sub-menu sub-menu-has-icons">
		<li id="menu-item-555" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-555"><a href="http://senorcavallo.just-themes.com/buttons/" className="fa fa-mouse-pointer"><span>Buttons</span></a></li>
		<li id="menu-item-705" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-705"><a href="http://senorcavallo.just-themes.com/forms/" className="fa fa-edit"><span>Forms</span></a></li>
	</ul>
</li>
	<li id="menu-item-785" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mega-menu-col menu-item-785"><a><span>Shortcodes</span></a>
	<ul className="sub-menu sub-menu-has-icons">
		<li id="menu-item-527" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-527"><a href="http://senorcavallo.just-themes.com/accordions/" className="fa fa-list"><span>Accordions</span></a></li>
		<li id="menu-item-538" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-538"><a href="http://senorcavallo.just-themes.com/alert/" className="fa fa-exclamation-triangle"><span>Alerts</span></a></li>
		<li id="menu-item-568" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-568"><a href="http://senorcavallo.just-themes.com/tabs/" className="fa fa-th-large"><span>Tabs</span></a></li>
		<li id="menu-item-56" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-56"><a href="http://senorcavallo.just-themes.com/shortcodes/" className="fa fa-caret-square-o-right"><span>Shortcodes</span></a></li>
	</ul>
</li>
	<li id="menu-item-786" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mega-menu-col menu-item-786"><a href="#"><span>Lists</span></a>
	<ul className="sub-menu sub-menu-has-icons">
		<li id="menu-item-675" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-675"><a href="http://senorcavallo.just-themes.com/icons-page/" className="fa fa-gratipay"><span>Icons</span></a></li>
		<li id="menu-item-562" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-562"><a href="http://senorcavallo.just-themes.com/list/" className="fa fa-twitter"><span>Lists and Social Icons</span></a></li>
	</ul>
</li>
</ul>
</div></li>
</ul>				<div className="nav-mob">
					<ul className="nav navbar-nav">
											<li>
							<a href="http://senorcavallo.just-themes.com/cart/" className="shop_table cart-mob" title="View your shopping cart">
								<span className="cart-contents header-cart-count count">0</span>
								<i className="fa fa-shopping-cart" aria-hidden="true"></i>
								<span className="name">Cart</span>
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
    <h1>{title}</h1>
    <ul className="breadcrumbs" typeof="BreadcrumbList" vocab="https://schema.org/">{/* Breadcrumb NavXT 6.3.0 */}
      <li className="home">
        <span property="itemListElement" typeof="ListItem">
          <Link href="/">
          <a property="item" typeof="WebPage"   className="home">
          <span property="name">Αρχική</span>
        </a>
        </Link>
      </span>
    </li>
      <li className="post post-page current-item">
        <span property="itemListElement" typeof="ListItem">
          <span property="name">{title}</span>
          </span>
        </li>
    </ul>
  </div>
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
