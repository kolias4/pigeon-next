import Link from 'next/link'

function Header({menu}){

  return (
    <header>

    <div id="nav-wrapper">
      <nav className="navbar navbar-homepage">
        <div className="container">
          <a className="logo-home" href="http://senorcavallo.just-themes.com/">
            <img width={168} height={158} src="/logo.png" className="attachment-full size-full" alt="logo"/>
          </a>
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar top-bar"/>
              <span className="icon-bar middle-bar"/>
              <span className="icon-bar bottom-bar"/>
            </button>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <div className="toggle-wrap">
              <button type="button" className="navbar-toggle collapsed">
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

              <li id="menu-item-59" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-59">
                <a>
                  <span>Αρθρα</span>
                </a>
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


                  {/* <li id="menu-item-44" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-44">
                    <a href="http://senorcavallo.just-themes.com/blog-three-columns/">
                      <span>Blog Three Columns</span>
                    </a>
                  </li> */}
                </ul>
              </li>
              <li id="menu-item-61" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
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
              <li id="menu-item-60" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-60">
                <a>
                  <span>Gallery</span>
                </a>
                <ul className="sub-menu">
                  <li id="menu-item-47" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-47">
                    <a href="http://senorcavallo.just-themes.com/gallery-2-columns/">
                      <span>Gallery 2-columns</span>
                    </a>
                  </li>
                  <li id="menu-item-48" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-48">
                    <a href="http://senorcavallo.just-themes.com/gallery-3-columns/">
                      <span>Gallery 3-columns</span>
                    </a>
                  </li>
                  <li id="menu-item-49" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-49">
                    <a href="http://senorcavallo.just-themes.com/gallery-4-columns/">
                      <span>Gallery 4-columns</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li id="menu-item-619" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-619">
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
              </li>
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
                {/* <ul className="sub-menu">
                  <li id="menu-item-2548" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2548">
                    <a href="http://senorcavallo.just-themes.com/about-club/">
                      <span>About Club</span>
                    </a>
                  </li>
                  <li id="menu-item-750" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-750">
                    <a href="http://senorcavallo.just-themes.com/team/">
                      <span>Our Team</span>
                    </a>
                  </li>
                  <li id="menu-item-57" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-57">
                    <a href="http://senorcavallo.just-themes.com/testimonials/">
                      <span>Testimonials</span>
                    </a>
                  </li>
                </ul> */}
              </li>
            </ul>
            <div className="nav-mob">
              <ul className="nav navbar-nav">
                <li>
                  <a href="http://senorcavallo.just-themes.com/cart/" className="shop_table cart-mob" title="View your shopping cart">
                    <span className="cart-contents header-cart-count count">0</span>
                    <i className="fa fa-shopping-cart" aria-hidden="true"/>
                    <span className="name">Cart</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
    </header>

  )

}

export default Header;
