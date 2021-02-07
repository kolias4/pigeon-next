import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (<footer>

    <section id="block-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6 col-ms-12  matchHeight clearfix">
            <div className="footer-widget-area">
              <div id="media_image-2" className="widget widget_media_image">
              {/* <img width={168} height={158} src="http://senorcavallo.just-themes.com/wp-content/uploads/2018/01/senor_cavallo_logo-2.png" className="image wp-image-2853  attachment-full size-full" alt="alt" /> */}
                <Image width={168} height={158} alt="logo" src="/logo.png"/>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-ms-12  matchHeight clearfix">
            <div style={{color:'white'}} className="footer-widget-area">
              {/* <div id="text-3" className="widget widget_text">
                <h4 className="header-widget">About Сlub</h4>
                <div className="textwidget">
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
              </div> */}
              <div id="jtx_icons-3" className="widget widget_jtx_icons">
                <ul className="social-big">
                  <li><a target="_blank" rel="noopener" href="https://web.facebook.com/pigeon.my.1" className="fa fa-facebook"/></li>
                  {/* <li><a href="#" className="fa fa-twitter"/></li>

                  <li><a href="#" className="fa fa-instagram"/></li>
                  <li><a href="#" className="fa fa-google-plus"/></li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-ms-12 hidden-xs hidden-ms hidden-sm matchHeight clearfix">
            <div className="footer-widget-area">
              <div id="nav_menu-2" className="widget widget_nav_menu">
                <h4 className="header-widget">Explore</h4>
                <div className="menu-footer-menu-container">
                  <ul id="menu-footer-menu" className="menu">
                    <li id="menu-item-2177" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2093 current_page_item menu-item-2177">
                      <Link href="/privacy-policy">
                      <a style={{color:'#c4aa4f'}}>Προσωπικά δεδομένα</a>
                      </Link>
                    </li>
                    {/* <li id="menu-item-2178" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2178">
                      <a href="http://senorcavallo.just-themes.com/blog-three-columns/">Blog</a>
                    </li>
                    <li id="menu-item-2179" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2179">
                      <a href="http://senorcavallo.just-themes.com/contacts/">Contacts</a>
                    </li>
                    <li id="menu-item-2180" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2180">
                      <a href="http://senorcavallo.just-themes.com/testimonials/">Testimonials</a>
                    </li>
                    <li id="menu-item-2181" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2181">
                      <a href="http://senorcavallo.just-themes.com/gallery-3-columns/">Gallery</a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <div className="footer-block footer-gotop-hide-">
      <div className="container text-center">
        <p>
          <a target="_blank" rel="noopener">Mypigeon </a>
          © All Rights Reserved - 2021
        </p>

      </div>
    </div>

  </footer>)
}

export default Footer;
