import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {useState} from 'react'
import MobileMenu from './mobilemenu'

function Header2({menu,title}){

  const [menuopen,setMenuOpen] = useState(false)
  const [menuactive,setMenuActive] = useState([])

  const handleClick = (e) => {
    console.log(e.target.name)
    if(menuactive.includes(e.target.name)){
      setMenuActive(menuactive.filter(el => el !== e.target.name))
    }

    else {
      setMenuActive(menuactive.concat(e.target.name))
    }
  }

  const router = useRouter()
  return(
    <>
    {/* <MobileMenu menu={menu} menuopen={menuopen} setMenuOpen={setMenuOpen}/> */}

    <div id="nav-wrapper" className={menuopen ? 'mob-visible':''}>
      <nav className="navbar ">
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



          <div id="navbar" className={`navbar-collapse ${menuopen ? '':'collapse'}`}>
            <div style={{height:'70px'}} className="toggle-wrap">
              <button  onClick={() => setMenuOpen(!menuopen)} type="button" className={`navbar-toggle ${menuopen ? '':'collapsed'} `}>
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar top-bar"/>
                <span className="icon-bar middle-bar"/>
                <span className="icon-bar bottom-bar"/>
              </button>
              <div className="clearfix"/>
            </div>
            <ul id="menu-main-menu" className="nav navbar-nav">
              {/* <li id="menu-item-2104" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2093 current_page_item menu-item-2104">
                <a href="http://senorcavallo.just-themes.com/">
                  <span>Home</span>
                </a>
              </li> */}

              <li  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-59">
                <a className={`${menuactive.includes('arthra') ?'show':''}`} name="arthra" onClick={handleClick} >
                  <span >Αρθρα</span>
                </a>
                <ul className={`sub-menu ${menuactive.includes('arthra') ?'show':''}`}>
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


                  {/* <li id="menu-item-44" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-44">
                    <a href="http://senorcavallo.just-themes.com/blog-three-columns/">
                      <span>Blog Three Columns</span>
                    </a>
                  </li> */}
                </ul>
              </li>
              <li className={`menu-item menu-item-has-children ${router.asPath.startsWith("/pigeons")?'current_page_item':''}`}>
                <a className={`${menuactive.includes('pigeons') ?'show':''}`} name="pigeons" onClick={handleClick}>
                  <span>Περιστέρια</span>
                </a>

                  <ul className={`sub-menu ${menuactive.includes('pigeons') ?'show':''}`}>
                    {menu && menu.breeders.map((breeder,i) => {
                      return (
                        <li key={breeder.breeder_name}  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                          <a className={`${menuactive.includes(breeder.breeder_name) ?'show':''}`} name={breeder.breeder_name} onClick={handleClick}>
                            <span>{breeder.breeder_name}</span>
                          </a>
                          <ul style={{marginTop:'0px',marginLeft:'-12px'}} className={`sub-menu ${menuactive.includes(breeder.breeder_name) ?'show':''}`}>
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
                <a className={`${menuactive.includes('kolobodromia') ?'show':''}`} name="kolobodromia" onClick={handleClick}>
                  <span>Κολομποδρόμια</span>
                </a>
                <ul className={`sub-menu ${menuactive.includes('kolobodromia') ?'show':''}`}>
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


              <li className={`menu-item menu-item-has-children ${router.asPath.startsWith("/sylogoi")?'current_page_item':''}`}>
                <a className={` ${menuactive.includes('omospondia') ?'show':''}`} name="omospondia" onClick={handleClick}>
                  <span>Ομοσπονδία</span>
                </a>

                  <ul className={`sub-menu ${menuactive.includes('omospondia') ?'show':''}`}>
                    {menu && menu.kyklois.map((kyklos,i) => {
                      return (
                        <li key={kyklos.title}  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                          <a className={` ${menuactive.includes(kyklos.title) ?'show':''}`} name={kyklos.title} onClick={handleClick}>
                            <span>{kyklos.title}</span>
                          </a>
                          <ul style={{marginTop:'0px',marginLeft:'-12px'}} className={`sub-menu ${menuactive.includes(kyklos.title) ?'show':''}`}>
                            {kyklos.sylogois.map((sylogos,i) => {
                              return (
                                <li key={sylogos.title} className="menu-item menu-item-type-post_type menu-item-object-page  ">
                                  <Link href={`/sylogoi/${sylogos.urlkey}`}>
                                  <a  className="">
                                    <span>{sylogos.title}</span>
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



              {/* <li id="menu-item-619" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-619">
                <a href="#">
                  <span>Shop</span>
                </a>
                <ul  className="sub-menu">
                  <li id="menu-item-623" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-619">
                    <a href="http://senorcavallo.just-themes.com/shop/">
                      <span>Shop</span>

                    </a>

                  </li>
                  <li id="menu-item-622" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-619">
                    <a href="http://senorcavallo.just-themes.com/cart/">
                      <span>Cart</span>
                    </a>

                  </li>
                  <li id="menu-item-621" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-621">
                    <a href="http://senorcavallo.just-themes.com/checkout/">
                      <span>Checkout</span>
                    </a>
                  </li>
                  <li id="menu-item-620" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-620">
                    <a href="http://senorcavallo.just-themes.com/my-account/">
                      <span>My account</span>
                    </a>
                  </li>
                </ul>
              </li> */}

              <li  className={`menu-item menu-item-has-children `}>
                <a className={`${menuactive.includes('agones') ?'show':''}`} name="agones" onClick={handleClick}>
                  <span>Αγώνες</span>
                </a>
                <ul className={`sub-menu ${menuactive.includes('agones') ?'show':''}`}>

                <li  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-46">
                <Link href="/apotelesmata">
                <a >
                  <span>Αποτελέσματα</span>
                </a>
                </Link>
              </li>

              <li  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2547">
                <Link href="/livestream">
                <a >
                  <span>Live Stream</span>
                </a>
                </Link>
             
              </li>
              

                </ul>
              </li>

              {/* <li id="menu-item-2sadf" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2547">
                <Link href="/apotelesmata">
                <a >
                  <span>Αποτελέσματα</span>
                </a>
                </Link>
             
              </li> */}

              <li  className={`menu-item menu-item-has-children `}>
                <a className={`${menuactive.includes('diafora') ?'show':''}`} name="diafora" onClick={handleClick}>
                  <span>Διάφορα</span>
                </a>
                <ul className={`sub-menu ${menuactive.includes('diafora') ?'show':''}`}>

                <li id="menu-item-46" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-46">
                <Link href="/contact">
                <a >
                  <span>Επικοινωνία</span>
                </a>
                </Link>
              </li>

              <li id="menu-item-2547" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2547">
                <Link href="/about">
                <a >
                  <span>Σχετικά με εμάς</span>
                </a>
                </Link>
             
              </li>
              

                </ul>
              </li>


             

            
            </ul>
            {/* <div className="nav-mob"> //mobile menu emfanizetai kato ap to menu
              <ul className="nav navbar-nav">
                <li>
                  <a href="http://senorcavallo.just-themes.com/cart/" className="shop_table cart-mob" title="View your shopping cart">
                    <span className="cart-contents header-cart-count count">0</span>
                    <i className="fa fa-shopping-cart" aria-hidden="true"/>
                    <span className="name">Cart</span>
                  </a>
                </li>
              </ul>
            </div> */}
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
  {/* <ul className="nav-left">
    <li><a href="#" target="_blank"><span className="fa fa-facebook-f" /></a></li>
    <li><a href="#" target="_blank"><span className="fa fa-twitter" /></a></li>
    <li><a href="#" target="_blank"><span className="fa fa-google-plus" /></a></li>
    <li><a href="#" target="_blank"><span className="fa fa-instagram" /></a></li>
  </ul> */}
  {/* <div className="nav-right">
    <a href="http://senorcavallo.just-themes.com/cart/" className="shop_table cart " title="View your shopping cart">
      <i className="fa fa-shopping-cart" aria-hidden="true" />
      <span className="cart-contents header-cart-count count">0</span>
    </a>
    <div id="top-search" className="top-search">
      <a href="#" id="top-search-ico" className="fa fa-search" aria-hidden="true" />
      <input placeholder="Search" defaultValue type="text" />
      <span className="search-close">×</span>
    </div>
  </div> */}
</header>

    </>

  )

}

export default Header2
