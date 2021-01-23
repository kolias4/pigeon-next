import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {useState} from 'react'
import MobileMenu from './mobilemenu'

function Header2({menu,title}){

  const [menuopen,setMenuOpen] = useState(false)

  const router = useRouter()
  return(
    <>
    <MobileMenu menu={menu} menuopen={menuopen} setMenuOpen={setMenuOpen}/>
    <div id="nav-wrapper">
	<nav className="navbar">
		<div className="container">


			<div className="navbar-header">
				<button onClick={() => setMenuOpen(!menuopen)} type="button" className="navbar-toggle collapsed">
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
          <li id="menu-item-2547" className={`menu-item menu-item-has-children ${router.asPath.startsWith("/blog")?'current_page_item':''}`}><a ><span>Αρθρα</span></a>
          <ul className="sub-menu">
            {menu && menu.categoryArthras.map((item) => {
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

          <li id="menu-item-61" className={`menu-item menu-item-has-children ${router.asPath.startsWith("/pigeons")?'current_page_item':''}`}>
            <a>
              <span>Περιστέρια</span>
            </a>

              <ul className="sub-menu">
                {menu && menu.breeders.map((breeder,i) => {
                  return (
                    <li key={breeder.breeder_name}  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                      <a>
                        <span>{breeder.breeder_name}</span>
                      </a>
                      <ul style={{marginTop:'0px',marginLeft:'-12px'}} className="sub-menu">
                        {breeder.breeds.map((breed,i) => {
                          return (
                            <li key={breed.breed} className="menu-item menu-item-type-post_type menu-item-object-page  ">
                              <Link href={`/pigeons/breed/${breed.urlkey}`}>
                              <a  className="">
                                <span>{breed.breed}</span>
                              </a>
                              </Link>
                            </li>

                          )
                        })}


                      </ul>
                    </li>

                  )
                })}



              </ul>

          </li>

          <li  className={`menu-item menu-item-has-children ${router.asPath.startsWith("/kolobodromia")?'current_page_item':''}`}>
            <a>
              <span>Κολομποδρόμια</span>
            </a>
            <ul className="sub-menu">
            {menu && menu.kolovodromias.map((kolobodromio,i) => {
              return (
                <li key={kolobodromio.title} className="menu-item menu-item-type-post_type menu-item-object-page  ">
                  <Link href={`/kolobodromia/${kolobodromio.url_key}`}>
                  <a  className="">
                    <span>{kolobodromio.title}</span>
                  </a>
                  </Link>
                </li>

              )
            })}

            </ul>
          </li>

          <li id="menu-item-46" className={`menu-item ${router.asPath.startsWith("/contact")?'current_page_item':''} `}>
          <Link href="/contact">
          <a>
          <span>Επικοινωνία</span>
          </a>
          </Link>
          </li>


          <li id="menu-item-2104" className={`menu-item ${router.asPath.startsWith("/about")?'current_page_item':''} `}>
             <Link href="/about">
            <a >
            <span>Σχετικά με εμάς</span>
          </a>
          </Link>
          </li>






</ul>
	<div className="nav-mob">
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
