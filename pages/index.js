import Head from 'next/head'
import {useEffect,useState} from 'react'
import fetcher from '../functions/fetcher'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'


 export default function Home({data}) {

  const [activeslide,setActiveSlide]= useState(null)

  const slides=data.slider.slider_images

  const handleSlider = () => {
    var len = slides.length
    var current_slide = activeslide
    if(current_slide < len-1){
      setActiveSlide(current_slide + 1)
    }
    else {
      setActiveSlide(0)
    }
  }

  useEffect(() => {

    const intervalId = setInterval(() => {
      handleSlider()
    },5300)

    return () => clearInterval(intervalId)

},[activeslide]);

useEffect(() => {

   setActiveSlide(0)

},[]);
  return (
    <div >






    <section data-vc-full-width="true" data-vc-full-width-init="true" data-vc-stretch-content="true" className="" >
      <div data-vc-full-width="true" data-vc-full-width-init="true" data-vc-stretch-content="true" className="vc_row wpb_row vc_row-fluid vc_row-no-padding" >
        <div className="wpb_column vc_column_container vc_col-sm-12 jtx-sr jtx-sr-effect-fade_in jtx-sr-id-796528285 jtx-sr-el-text_el jtx-sr-delay-200 jtx-sr-duration-300 jtx-sr-sequences-100">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div className="slider-zoom  zoom-out zoom-color-white zoom-align-center zoom-style-default overlay-plain bullets-false zs-enabled" id="like_sc_zoom_slider_104670324" data-zs-prev="prev" data-zs-next="next" data-zs-overlay="plain" data-zs-initzoom={1.0} data-zs-speed={20000} data-zs-interval={4500} data-zs-switchspeed={7000} data-zs-arrows="false" data-zs-bullets="false" data-zs-src="[&quot;http:\/\/senorcavallo.just-themes.com\/wp-content\/uploads\/2017\/11\/slide1.jpg&quot;,&quot;http:\/\/senorcavallo.just-themes.com\/wp-content\/uploads\/2017\/11\/slide3.jpg&quot;,&quot;http:\/\/senorcavallo.just-themes.com\/wp-content\/uploads\/2017\/11\/slide4.jpg&quot;]" data-zs-src2="data-zs-src2" style={{
                  position: 'relative'
                }}>
                <div className="zs-slideshow">
                  <div className="zs-slides">
                    {slides.map((slide,i) => {
                      return (

                        <div key={`slide${i}`} className={`zs-slide zs-slide-${i} ${activeslide === i? 'active myactive':''}`} style={{backgroundImage:`url(${process.env.NEXT_PUBLIC_STRAPI_URL}${slide.url})`}}/>


                      )
                    })}
                  {/* <div className="zs-slide zs-slide-0" style={{backgroundImage: 'url("http://senorcavallo.just-themes.com/wp-content/uploads/2017/11/slide1.jpg")'}}/>
                  <div className="zs-slide zs-slide-1 active" style={{backgroundImage: 'url("http://senorcavallo.just-themes.com/wp-content/uploads/2017/11/slide3.jpg")',transition: 'transform 20000ms ease-out 0s, opacity 800ms ease 0s',opacity: 1,transform: 'scale(1, 1)',zIndex: 2}}/>
                  <div className="zs-slide zs-slide-2" style={{backgroundImage: 'url("http://senorcavallo.just-themes.com/wp-content/uploads/2017/11/slide4.jpg")'}}/> */}
                </div>
                </div>
                <div className="container" style={{
                    zIndex: 2,
                    position: 'relative'
                  }}>
                  <div className="slider-inner">
                    <div className="es-resp">
                      <div className="visible-lg" style={{
                          height: 500
                        }}/>
                      <div className="visible-md" style={{
                          height: 300
                        }}/>
                      <div className="hidden-lg hidden-md hidden-ms hidden-xs " style={{
                          height: 290
                        }}/>
                      <div className="visible-ms" style={{
                          height: 290
                        }}/>
                      <div className="visible-xs" style={{
                          height: 280
                        }}/></div>
                    <div className="heading  inline align-center color-main subcolor-white transform-default   vc_custom_1516288099100" id="like_sc_header_1212805265" style={{
                        fontFamily: 'Rufina !important',
                        fontWeight: 700,
                        fontStyle: 'normal'
                      }}>
                      <h2 style={{
                          fontWeight: 700,
                          fontStyle: 'normal',
                          visibility: 'visible',
                          transform: 'translateY(0px) scale(1)',
                          opacity: 1,
                          transition: 'all 0.3s ease 0s',
                          fontFamily: 'Rufina !important'
                        }} className="header" data-sr-id={2}>Senor Cavallo
                        <span className="subheader" data-sr-id={3} style={{
                            visibility: 'visible',
                            transform: 'translateY(0px) scale(1)',
                            opacity: 1,
                            transition: 'all 0.3s ease 0s'
                          }}>- Riding Club</span>
                      </h2>
                    </div>
                    <div className="jtx-content-width width-0" style={{
                        maxWidth: 700
                      }}>
                      <div className="wpb_text_column wpb_content_element  vc_custom_1513383880691">
                        <div className="wpb_wrapper">
                          <p style={{
                              textAlign: 'center',
                              visibility: 'visible',
                              transform: 'translateY(0px) scale(1)',
                              opacity: 1,
                              transition: 'all 0.3s ease 0s'
                            }} data-sr-id={4}>
                            <span className="text-md">Praesent ac ipsum nisi. Integer non condimentum quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam arcu, sodales a varius eget.</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="es-resp">
                      <div className="visible-lg" style={{
                          height: 54
                        }}/>
                      <div className="visible-md" style={{
                          height: 54
                        }}/>
                      <div className="hidden-lg hidden-md hidden-ms hidden-xs " style={{
                          height: 54
                        }}/>
                      <div className="visible-ms" style={{
                          height: 54
                        }}/>
                      <div className="visible-xs" style={{
                          height: 54
                        }}/></div>
                    <div className="btn-wrap align-center">
                      <a href="href" className="btn  btn-second transform-default color-text-main color-hover-white btn-wide align-center   vc_custom_1513384107705" id="like_sc_button_1168674312" data-sr-id={5} style={{
                          visibility: 'visible',
                          transform: 'translateY(0px) scale(1)',
                          opacity: 1,
                          transition: 'all 0.3s ease 0s'
                        }}>read more</a>
                    </div>
                    <div className="es-resp">
                      <div className="visible-lg" style={{
                          height: 180
                        }}/>
                      <div className="visible-md" style={{
                          height: 120
                        }}/>
                      <div className="hidden-lg hidden-md hidden-ms hidden-xs " style={{
                          height: 120
                        }}/>
                      <div className="visible-ms" style={{
                          height: 120
                        }}/>
                      <div className="visible-xs" style={{
                          height: 120
                        }}/></div>
                  </div>
                </div>
                <ul className="nav-left">
                  <li>
                    <a href="#" target="_blank"><span className="fa fa-facebook-f"/></a>
                  </li>
                  <li>
                    <a href="#" target="_blank"><span className="fa fa-twitter"/></a>
                  </li>
                  <li>
                    <a href="#" target="_blank"><span className="fa fa-google-plus"/></a>
                  </li>
                  <li>
                    <a href="#" target="_blank"><span className="fa fa-instagram"/></a>
                  </li>
                </ul>
                <div className="nav-right">
                  <a href="http://senorcavallo.just-themes.com/cart/" className="shop_table cart" title="View your shopping cart">
                    <i className="fa fa-shopping-cart" aria-hidden="true"/>
                    <span className="cart-contents header-cart-count count">0</span>
                  </a>
                  <div id="top-search" className="top-search">
                    <a href="#" id="top-search-ico" className="fa fa-search" aria-hidden="true"/>
                    <input placeholder="Search" defaultValue="defaultValue" type="text"/>
                    <span className="search-close">×</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vc_row-full-width vc_clearfix"/>
    </section>

    <div className="container-fluid">
      {/* Content */}
      <div className="margin-disabled">
        <div className="row">
          <div className=" col-md-12 text-page">
            <article id="post-2093" className="post-2093 page type-page status-publish hentry">
              <div className="entry-content clearfix" id="entry-div">

                <div className="vc_row-full-width vc_clearfix"/>
                <section className="vc_section vc_custom_1518023914640 bg-color-theme_color call-us">
                  <div className="vc_row wpb_row vc_row-fluid vc_row-o-equal-height vc_row-o-content-middle vc_row-flex">
                    <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-3 vc_col-md-6">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="wpb_text_column wpb_content_element  vc_custom_1513387421625">
                            <div className="wpb_wrapper">
                              <p>
                                <strong>
                                  <span className="text-large" style={{
                                      color: '#28201d'
                                    }}>Call to our manager<br/>
                                  </span>
                                  <span className="text-large" style={{
                                      color: '#ffffff'
                                    }}>and get an advice</span>
                                </strong>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-3 vc_col-md-6">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <ul className="block-icon  icon-h-right align-left i-transparent layout-inline">
                            <li className=" icon-image">
                              <span className="icon-image bg-main"><img src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/11/phone-call-.png" className="icon-image" alt="0-800 255 29 020"/></span>
                              <div className="block-right">
                                <h4 className="font-main">
                                  0-800 255 29 020
                                </h4>
                                <div className="descr"/></div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-3 vc_col-md-6">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="align-default icon-style-square">
                            <ul className="social-small   vc_custom_1511208384929 icon-style-square icon-weight-bold" id="like_sc_header_1256223746">
                              <li><a href="#" className="fa fa-twitter"/></li>
                              <li><a href="#" className="fa fa-facebook"/></li>
                              <li><a href="#" className="fa fa-instagram"/></li>
                              <li><a href="#" className="fa fa-google-plus"/></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-3 vc_col-md-6">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="btn-wrap align-left">
                            <a href="/contacts/" className="btn  btn-xs btn-second transform-default color-text-default color-hover-default align-left   vc_custom_1513441693504" id="like_sc_button_278609766">contact us</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section data-vc-full-width="true" data-vc-full-width-init="true" data-vc-parallax="1.2" data-vc-parallax-image="data-vc-parallax-image" className="vc_section vc_section-has-fill vc_general vc_parallax vc_parallax-content-moving bg-color-white bg-pos-center-center">
                  <div className="vc_row wpb_row vc_row-fluid vc_custom_1511210269077">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="es-resp">
                            <div className="visible-lg" style={{
                                height: 30
                              }}/>
                            <div className="visible-md" style={{
                                height: 120
                              }}/>
                            <div className="hidden-lg hidden-md hidden-ms hidden-xs " style={{
                                height: 130
                              }}/>
                            <div className="visible-ms" style={{
                                height: 190
                              }}/>
                            <div className="visible-xs" style={{
                                height: 200
                              }}/></div>
                          <div className="heading  head-subheader align-center color-black subcolor-main transform-default bg-image   vc_custom_1513346533124" id="like_sc_header_1872379077" style={{
                              fontFamily: 'Rufina !important',
                              fontWeight: 700,
                              fontStyle: 'normal'
                            }}>
                            {/* <h5 className="subheader">Who we are</h5> */}
                            <h3 style={{
                                fontFamily: 'Rufina !important',
                                fontWeight: 700,
                                fontStyle: 'normal'
                              }} className="header">{data.about.title}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-vc-full-width="true" data-vc-full-width-init="true" className="vc_row wpb_row vc_row-fluid" >
                    <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-has-fill bg-pos-center-center jtx-sr jtx-sr-effect-slide_from_left jtx-sr-id-1840206000 jtx-sr-el-block jtx-sr-delay-0 jtx-sr-duration-500 jtx-sr-sequences-100" data-sr-id={7} style={{
                        visibility: 'visible',
                        transform: 'translateX(0px) scale(1)',
                        opacity: 1,
                        transition: 'all 0.3s ease 0s'
                      }}>
                      <div className="vc_column-inner vc_custom_1513454744328">
                        <div className="wpb_wrapper">
                          {/* <div className="heading  heading-large head-subheader align-left color-black subcolor-second transform-default   vc_custom_1513346469845" id="like_sc_header_1051267961" style={{
                              fontFamily: 'Rufina !important',
                              fontWeight: 700,
                              fontStyle: 'normal'
                            }}>
                            <h2 className="subheader">40 Years of</h2>
                            <h2 style={{
                                fontFamily: 'Rufina !important',
                                fontWeight: 700,
                                fontStyle: 'normal'
                              }} className="header">Riding Experience</h2>
                          </div> */}
                          <div className="es-resp">
                            <div className="visible-lg" style={{
                                height: 8
                              }}/>
                            <div className="visible-md" style={{
                                height: 8
                              }}/>
                            <div className="hidden-lg hidden-md hidden-ms hidden-xs " style={{
                                height: 8
                              }}/>
                            <div className="visible-ms" style={{
                                height: 8
                              }}/>
                            <div className="visible-xs" style={{
                                height: 8
                              }}/></div>
                          {/* <div className="wpb_text_column wpb_content_element  vc_custom_1513346334246">
                            <div className="wpb_wrapper">
                              <h4 style={{
                                  textAlign: 'left'
                                }}>
                                <span className="text-xl">Phasellus non ultricies massa. Donec semper ac risus ut suscipit. In dictum blandit turpis nec suscipit.
                                </span>
                              </h4>
                            </div>
                          </div> */}
                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <p>
                                <div  className="text-md crop_string">
                                  <ReactMarkdown>
                                    {data.about.body}

                                  </ReactMarkdown>
                                </div>
                              </p>
                            </div>
                          </div>
                          <div className="es-resp">
                            <div className="visible-lg" style={{
                                height: 24
                              }}/>
                            <div className="visible-md" style={{
                                height: 24
                              }}/>
                            <div className="hidden-lg hidden-md hidden-ms hidden-xs " style={{
                                height: 24
                              }}/>
                            <div className="visible-ms" style={{
                                height: 24
                              }}/>
                            <div className="visible-xs" style={{
                                height: 24
                              }}/></div>
                          <div className="btn-wrap align-left btn-wrap-inline">
                            <a href="href" className="btn  btn-xs btn-second transform-default color-text-default color-hover-black align-left   vc_custom_1513358515887" id="like_sc_button_717250034">read more</a>
                          </div>
                          <div className="btn-wrap align-left btn-wrap-inline">
                            <a href="href" className="btn  btn-xs btn-default transform-default color-text-white color-hover-black align-left   vc_custom_1513358523023" id="like_sc_button_1895455874">contact us</a>
                          </div>
                          <div className="es-resp">
                            <div className="visible-lg" style={{
                                height: 100
                              }}/>
                            <div className="visible-md" style={{
                                height: 100
                              }}/>
                            <div className="hidden-lg hidden-md hidden-ms hidden-xs " style={{
                                height: 100
                              }}/>
                            <div className="visible-ms" style={{
                                height: 100
                              }}/>
                            <div className="visible-xs" style={{
                                height: 40
                              }}/></div>
                        </div>
                      </div>
                    </div>
                    <div className="wpb_column vc_column_container vc_col-sm-6 vc_hidden-xs jtx-sr jtx-sr-effect-slide_from_right jtx-sr-id-256455631 jtx-sr-el-block jtx-sr-delay-200 jtx-sr-duration-300 jtx-sr-sequences-100" data-sr-id={9} style={{
                        visibility: 'visible',
                        transform: 'translateX(0px) scale(1)',
                        opacity: 1,
                        transition: 'all 0.3s ease 0s'
                      }}>
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="es-resp">
                            <div className="visible-lg" style={{
                                height: 48
                              }}/>
                            <div className="visible-md" style={{
                                height: 48
                              }}/>
                            <div className="hidden-lg hidden-md hidden-ms hidden-xs " style={{
                                height: 48
                              }}/>
                            <div className="visible-ms" style={{
                                height: 48
                              }}/>
                            <div className="visible-xs" style={{
                                height: 0
                              }}/></div>
                          <div className="wpb_single_image wpb_content_element vc_align_center  vc_custom_1513346768356 img-shadow-plain">
                            <figure className="wpb_wrapper vc_figure">
                              <div className="vc_single_image-wrapper   vc_box_border_grey">
                                {/* <img  src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/12/about-photo.png" className="vc_single_image-img attachment-full" alt="alt" srcSet="http://senorcavallo.just-themes.com/wp-content/uploads/2017/12/about-photo.png 570w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/12/about-photo-300x232.png 300w" sizes="(max-width: 570px) 100vw, 570px"/> */}
                                {data.about.image[0] &&
                                  <Image width={500} height={500} src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.about.image[0].url}`} alt="about"/>
                                }
                              </div>
                            </figure>
                          </div>
                          <div className="es-resp">
                            <div className="visible-lg" style={{
                                height: 0
                              }}/>
                            <div className="visible-md" style={{
                                height: 0
                              }}/>
                            <div className="hidden-lg hidden-md hidden-ms hidden-xs " style={{
                                height: 60
                              }}/>
                            <div className="visible-ms" style={{
                                height: 60
                              }}/>
                            <div className="visible-xs" style={{
                                height: 60
                              }}/></div>
                        </div>
                      </div>
                    </div>
                  </div><div className="vc_row-full-width vc_clearfix"/><div className="vc_parallax-inner skrollable skrollable-before" data-bottom-top="top: -20%;" data-top-bottom="top: 0%;" style={{
      height: '120%',
      backgroundImage: 'url("")',
      top: '-20%'
    }}/></section><div className="vc_row-full-width vc_clearfix"/>
                {/* <section data-vc-full-width="true" data-vc-full-width-init="true" className="vc_section bg-color-gray" >
                  <div className="vc_row wpb_row vc_row-fluid">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="es-resp">
                            <div className="visible-lg" style={{
                                height: 64
                              }}/>
                            <div className="visible-md" style={{
                                height: 64
                              }}/>
                            <div className="hidden-lg hidden-md hidden-ms hidden-xs " style={{
                                height: 64
                              }}/>
                            <div className="visible-ms" style={{
                                height: 64
                              }}/>
                            <div className="visible-xs" style={{
                                height: 0
                              }}/></div>
                          <div className="services-sc bg-gray highlight-disabled  row">
                            <div className="swiper-container services-slider swiper-container-horizontal" data-cols={3} data-autoplay={0}>
                              <div className="swiper-wrapper">
                                <div className="col-lg-4 col-md-4 col-sm-6  swiper-slide swiper-slide-active" >
                                  <article id="post-2369" className="matchHeight post-2369 services type-services status-publish has-post-thumbnail hentry services-category-riding-club" style={{
                                      height: 320
                                    }}>
                                    <a href="http://senorcavallo.just-themes.com/services/horse-tours/" className="photo">
                                      <img src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/service4_Horses_Rent-740x500.jpg" className="attachment-senorcavallo-service size-senorcavallo-service" alt="alt" srcSet="http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/service4_Horses_Rent-740x500.jpg 740w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/service4_Horses_Rent-770x520.jpg 770w" sizes="(max-width: 740px) 100vw, 740px"/>
                                    </a>
                                    <div className="description">
                                      <a href="http://senorcavallo.just-themes.com/services/horse-tours/">
                                        <h4 className="header">Horse Tours</h4>
                                      </a>
                                      <div className="info">
                                        <a href="http://senorcavallo.just-themes.com/services/horse-tours/" className="btn btn-xs btn-arrow"><span className="fa fa-arrow-right"/></a>
                                      </div>
                                    </div>
                                  </article>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6  swiper-slide swiper-slide-next" >
                                  <article id="post-2367" className="matchHeight post-2367 services type-services status-publish has-post-thumbnail hentry services-category-riding-club" style={{
                                      height: 320
                                    }}>
                                    <a href="http://senorcavallo.just-themes.com/services/grooming-services/" className="photo">
                                      <img  src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/service2_Horse_Grooming-740x500.jpg" className="attachment-senorcavallo-service size-senorcavallo-service" alt="alt" srcSet="http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/service2_Horse_Grooming-740x500.jpg 740w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/service2_Horse_Grooming-770x520.jpg 770w" sizes="(max-width: 740px) 100vw, 740px"/>
                                    </a>
                                    <div className="description">
                                      <a href="http://senorcavallo.just-themes.com/services/grooming-services/">
                                        <h4 className="header">Grooming Services</h4>
                                      </a>
                                      <div className="info">
                                        <a href="http://senorcavallo.just-themes.com/services/grooming-services/" className="btn btn-xs btn-arrow"><span className="fa fa-arrow-right"/></a>
                                      </div>
                                    </div>
                                  </article>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6  swiper-slide" >
                                  <article id="post-2366" className="matchHeight post-2366 services type-services status-publish has-post-thumbnail hentry services-category-riding-club" style={{
                                      height: 320
                                    }}>
                                    <a href="http://senorcavallo.just-themes.com/services/winds-classes-2/" className="photo">
                                      <img  src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/service1_Ridind_School-740x500.jpg" className="attachment-senorcavallo-service size-senorcavallo-service" alt="alt" srcSet="http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/service1_Ridind_School-740x500.jpg 740w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/service1_Ridind_School-770x520.jpg 770w" sizes="(max-width: 740px) 100vw, 740px"/>
                                    </a>
                                    <div className="description">
                                      <a href="http://senorcavallo.just-themes.com/services/winds-classes-2/">
                                        <h4 className="header">Riding School</h4>
                                      </a>
                                      <div className="info">
                                        <a href="http://senorcavallo.just-themes.com/services/winds-classes-2/" className="btn btn-xs btn-arrow"><span className="fa fa-arrow-right"/></a>
                                      </div>
                                    </div>
                                  </article>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6  swiper-slide">
                                  <article id="post-2357" className="matchHeight post-2357 services type-services status-publish has-post-thumbnail hentry services-category-riding-club" style={{
                                      height: 320
                                    }}>
                                    <a href="http://senorcavallo.just-themes.com/services/keeping-and-care/" className="photo">
                                      <img  src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/service5_Keeping_and_Care-740x500.jpg" className="attachment-senorcavallo-service size-senorcavallo-service" alt="alt" srcSet="http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/service5_Keeping_and_Care-740x500.jpg 740w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/service5_Keeping_and_Care-770x520.jpg 770w" sizes="(max-width: 740px) 100vw, 740px"/>
                                    </a>
                                    <div className="description">
                                      <a href="http://senorcavallo.just-themes.com/services/keeping-and-care/">
                                        <h4 className="header">Keeping and Care</h4>
                                      </a>
                                      <div className="info">
                                        <a href="http://senorcavallo.just-themes.com/services/keeping-and-care/" className="btn btn-xs btn-arrow"><span className="fa fa-arrow-right"/></a>
                                      </div>
                                    </div>
                                  </article>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6  swiper-slide" >
                                  <article id="post-2365" className="matchHeight post-2365 services type-services status-publish has-post-thumbnail hentry services-category-riding-club" style={{
                                      height: 320
                                    }}>
                                    <a href="http://senorcavallo.just-themes.com/services/horse-tours-2/" className="photo">
                                      <img src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/service4_Horse_Tours-740x500.jpg" className="attachment-senorcavallo-service size-senorcavallo-service" alt="alt" srcSet="http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/service4_Horse_Tours-740x500.jpg 740w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/service4_Horse_Tours-770x520.jpg 770w" sizes="(max-width: 740px) 100vw, 740px"/>
                                    </a>
                                    <div className="description">
                                      <a href="http://senorcavallo.just-themes.com/services/horse-tours-2/">
                                        <h4 className="header">Horse Tours</h4>
                                      </a>
                                      <div className="info">
                                        <a href="http://senorcavallo.just-themes.com/services/horse-tours-2/" className="btn btn-xs btn-arrow"><span className="fa fa-arrow-right"/></a>
                                      </div>
                                    </div>
                                  </article>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6  swiper-slide" >
                                  <article id="post-2364" className="matchHeight post-2364 services type-services status-publish has-post-thumbnail hentry services-category-riding-club" style={{
                                      height: 320
                                    }}>
                                    <a href="http://senorcavallo.just-themes.com/services/childrens-classes/" className="photo">
                                      <img  src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/service3_Childrens_Classes-740x500.jpg" className="attachment-senorcavallo-service size-senorcavallo-service" alt="alt" srcSet="http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/service3_Childrens_Classes-740x500.jpg 740w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/service3_Childrens_Classes-770x520.jpg 770w" sizes="(max-width: 740px) 100vw, 740px"/>
                                    </a>
                                    <div className="description">
                                      <a href="http://senorcavallo.just-themes.com/services/childrens-classes/">
                                        <h4 className="header">Children’s Classes</h4>
                                      </a>
                                      <div className="info">
                                        <a href="http://senorcavallo.just-themes.com/services/childrens-classes/" className="btn btn-xs btn-arrow"><span className="fa fa-arrow-right"/></a>
                                      </div>
                                    </div>
                                  </article>
                                </div>
                              </div>
                            </div>
                            <div className="arrows">
                              <a href="#" className="arrow-left fa fa-arrow-left swiper-button-disabled"/>
                              <a href="#" className="arrow-right fa fa-arrow-right"/>
                            </div>
                          </div>
                          <div className="btn-wrap align-center">
                            <a href="href" className="btn  btn-xs btn-second transform-default color-text-white color-hover-default align-center   vc_custom_1511216021107" id="like_sc_button_1004129987">view more</a>
                          </div>
                          <div className="es-resp">
                            <div className="visible-lg" style={{
                                height: 64
                              }}/>
                            <div className="visible-md" style={{
                                height: 64
                              }}/>
                            <div className="hidden-lg hidden-md hidden-ms hidden-xs " style={{
                                height: 64
                              }}/>
                            <div className="visible-ms" style={{
                                height: 64
                              }}/>
                            <div className="visible-xs" style={{
                                height: 0
                              }}/></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section><div className="vc_row-full-width vc_clearfix"/> */}
                <section data-vc-full-width="true" data-vc-full-width-init="true" data-vc-parallax="1.5" className="vc_section services-block vc_custom_1511217882368 vc_section-has-fill vc_general vc_parallax vc_parallax-content-moving bg-color-white bg-pos-center-center bg-overlay-dark" >
                  <div data-vc-full-width="true" data-vc-full-width-init="true" className="vc_row wpb_row vc_row-fluid vc_custom_1508187734191 vc_row-has-fill bg-pos-center-center text-align-center" >
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="es-resp">
                            <div className="visible-lg" style={{
                                height: 30
                              }}/>
                            <div className="visible-md" style={{
                                height: 30
                              }}/>
                            <div className="hidden-lg hidden-md hidden-ms hidden-xs " style={{
                                height: 30
                              }}/>
                            <div className="visible-ms" style={{
                                height: 10
                              }}/>
                            <div className="visible-xs" style={{
                                height: 10
                              }}/></div>
                          <div className="heading  head-subheader align-center color-white subcolor-main transform-default   vc_custom_1518024603312" id="like_sc_header_1827581567" style={{
                              fontFamily: 'Rufina !important',
                              fontWeight: 700,
                              fontStyle: 'normal'
                            }}>
                            <h5 className="subheader">Tariffs</h5>
                            <h3 style={{
                                fontFamily: 'Rufina !important',
                                fontWeight: 700,
                                fontStyle: 'normal'
                              }} className="header">Choose Your Plan</h3>
                          </div>
                          <div className="jtx-content-width width-0" style={{
                              maxWidth: 770
                            }}>
                            <div className="wpb_text_column wpb_content_element ">
                              <div className="wpb_wrapper">
                                <p style={{
                                    textAlign: 'center'
                                  }}>
                                  <span className="text-large text-md">
                                    <span style={{
                                        color: '#ffffff'
                                      }}>Praesent ac ipsum nisi. Integer non condimentum quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam arcu, sodales a varius eget.</span>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="vc_row wpb_row vc_inner vc_row-fluid jtx-sr jtx-sr-effect-fade_in jtx-sr-id-1185163062 jtx-sr-el-items jtx-sr-delay-200 jtx-sr-duration-500 jtx-sr-sequences-100">
                            <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-3 vc_col-md-6">
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div className="tariff-item item   layout-default matchHeight" id="like_sc_tariff_753540699" style={{
                                      height: 449,
                                      visibility: 'visible',
                                      transform: 'translateY(0px) scale(1)',
                                      opacity: 1,
                                      transition: 'all 0.3s ease 0s'
                                    }} data-sr-id={11}>
                                    <h4 className="header">
                                      <span className="color-main">Beginners</span>
                                      classes</h4>
                                    <div className="price">$20</div>
                                    <p>Morbi nec accumsan arcu. Nunc euismod tortor sed ex lobortis, eget porta magna fermentum.</p>
                                    <div>
                                      <a href="#" className="btn btn-default  color-hover-second transform-lowercase">get now</a>
                                    </div>
                                    <a href="href" className="more">more info »</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-3 vc_col-md-6">
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div className="tariff-item item   layout-default matchHeight" id="like_sc_tariff_1026932512" style={{
                                      height: 449,
                                      visibility: 'visible',
                                      transform: 'translateY(0px) scale(1)',
                                      opacity: 1,
                                      transition: 'all 0.3s ease 0s'
                                    }} data-sr-id={12}>
                                    <h4 className="header">
                                      <span className="color-main">Advanced</span>
                                      classes</h4>
                                    <div className="price">$38</div>
                                    <p>Vestibulum pretium, eros at consequat lacinia, elit dolor cursus est, at sollicitudin nibh nulla feugiat risus.</p>
                                    <div>
                                      <a href="#" className="btn btn-default  color-hover-second transform-lowercase">get now</a>
                                    </div>
                                    <a href="href" className="more">more info »</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-3 vc_col-md-6">
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div className="tariff-item item     vc_custom_1513377526385 layout-default matchHeight vip" id="like_sc_tariff_1950237592" style={{
                                      height: 449,
                                      visibility: 'visible',
                                      transform: 'translateY(0px) scale(1)',
                                      opacity: 1,
                                      transition: 'all 0.3s ease 0s'
                                    }} data-sr-id={13}>
                                    <span className="label-vip font-headers">BEST</span>
                                    <h4 className="header">
                                      <span className="white">Personal</span>
                                      <span className=" color-main">trainings</span>
                                    </h4>
                                    <div className="price">$49</div>
                                    <p>Morbi nec accumsan arcu. Nunc euismod tortor sed ex lobortis, eget porta magna fermentum.</p>
                                    <div>
                                      <a href="#" className="btn btn-default btn-second color-hover-white transform-lowercase">get now</a>
                                    </div>
                                    <a href="href" className="more">more info »</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-3 vc_col-md-6">
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div className="tariff-item item   layout-default matchHeight" id="like_sc_tariff_664999399" style={{
                                      height: 449,
                                      visibility: 'visible',
                                      transform: 'translateY(0px) scale(1)',
                                      opacity: 1,
                                      transition: 'all 0.3s ease 0s'
                                    }} data-sr-id={14}>
                                    <h4 className="header">
                                      <span className="color-main">Group</span>
                                      classes</h4>
                                    <div className="price">$14</div>
                                    <p>Vestibulum pretium, eros at consequat lacinia, elit dolor cursus est, at sollicitudin nibh nulla feugiat risus.</p>
                                    <div>
                                      <a href="#" className="btn btn-default  color-hover-second transform-lowercase">get now</a>
                                    </div>
                                    <a href="href" className="more">more info »</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="es-resp">
                            <div className="visible-lg" style={{
                                height: 150
                              }}/>
                            <div className="visible-md" style={{
                                height: 130
                              }}/>
                            <div className="hidden-lg hidden-md hidden-ms hidden-xs " style={{
                                height: 70
                              }}/>
                            <div className="visible-ms" style={{
                                height: 70
                              }}/>
                            <div className="visible-xs" style={{
                                height: 40
                              }}/></div>
                        </div>
                      </div>
                    </div>
                  </div><div className="vc_row-full-width vc_clearfix"/><div className="vc_parallax-inner skrollable skrollable-before" data-bottom-top="top: -50%;" data-top-bottom="top: 0%;" style={{
      height: '150%',
      top: '-50%'
    }}/></section><div className="vc_row-full-width vc_clearfix"/>
                <section data-vc-full-width="true" data-vc-full-width-init="true" className="vc_section bg-color-gray" >
                  <div className="vc_row wpb_row vc_row-fluid">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="es-resp">
                            <div className="visible-lg" style={{
                                height: 100
                              }}/>
                            <div className="visible-md" style={{
                                height: 100
                              }}/>
                            <div className="hidden-lg hidden-md hidden-ms hidden-xs " style={{
                                height: 64
                              }}/>
                            <div className="visible-ms" style={{
                                height: 64
                              }}/>
                            <div className="visible-xs" style={{
                                height: 0
                              }}/></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-vc-full-width="true" data-vc-full-width-init="true" className="vc_row wpb_row vc_row-fluid" >
                    <div className="club-cards wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-6 vc_col-has-fill bg-color-white bg-pos-center-center border_shadow displaced-top">
                      <div style={{backgroundImage:'none',backgroundColor:'white'}} className="vc_column-inner vc_custom_1579537352413">
                        <div className="wpb_wrapper">
                          <div className="heading  heading-large head-subheader align-left color-black subcolor-main transform-default" id="like_sc_header_1372766355" style={{
                              fontFamily: 'Rufina !important',
                              fontWeight: 700,
                              fontStyle: 'normal'
                            }}>
                            <h5 className="subheader">Welcome to our club</h5>
                            <h2 style={{
                                fontFamily: 'Rufina !important',
                                fontWeight: 700,
                                fontStyle: 'normal'
                              }} className="header">Club Cards</h2>
                          </div>
                          <div className="jtx-content-width width-0" style={{
                              maxWidth: 770
                            }}>
                            <div className="wpb_text_column wpb_content_element ">
                              <div className="wpb_wrapper">
                                <p>
                                  <span className="text-md text-large">Sed pharetra ex ligula, a rutrum dolor varius non. Nam lobortis fringilla molestie. Nunc bibendum ligula vel nisl ornare tempor. Etiam vehicula, mauris tincidunt malesuada pharetra, nibh ante laoreet tellus.
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="es-resp">
                            <div className="visible-lg" style={{
                                height: 14
                              }}/>
                            <div className="visible-md" style={{
                                height: 14
                              }}/>
                            <div className="hidden-lg hidden-md hidden-ms hidden-xs " style={{
                                height: 14
                              }}/>
                            <div className="visible-ms" style={{
                                height: 14
                              }}/>
                            <div className="visible-xs" style={{
                                height: 14
                              }}/></div>
                          <div className="btn-wrap align-left">
                            <a href="href" className="btn  btn-second transform-default color-text-white color-hover-default align-left   vc_custom_1513358113660" id="like_sc_button_932198521">get now</a>
                          </div>
                          <div className="es-resp">
                            <div className="visible-lg" style={{
                                height: 64
                              }}/>
                            <div className="visible-md" style={{
                                height: 64
                              }}/>
                            <div className="hidden-lg hidden-md hidden-ms hidden-xs " style={{
                                height: 64
                              }}/>
                            <div className="visible-ms" style={{
                                height: 64
                              }}/>
                            <div className="visible-xs" style={{
                                height: 64
                              }}/></div>
                        </div>
                      </div>
                    </div>
                    <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-6">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="wpb_single_image wpb_content_element vc_align_center">
                            <figure className="wpb_wrapper vc_figure">
                              <div className="vc_single_image-wrapper   vc_box_border_grey"><img width={570} height={570} src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/11/girl2.jpg" className="vc_single_image-img attachment-full" alt="alt" srcSet="http://senorcavallo.just-themes.com/wp-content/uploads/2017/11/girl2.jpg 570w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/11/girl2-150x150.jpg 150w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/11/girl2-300x300.jpg 300w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/11/girl2-100x100.jpg 100w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/11/girl2-90x90.jpg 90w" sizes="(max-width: 570px) 100vw, 570px"/></div>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div><div className="vc_row-full-width vc_clearfix"/>
                  <div className="vc_row wpb_row vc_row-fluid">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="es-resp">
                            <div className="visible-lg" style={{
                                height: 100
                              }}/>
                            <div className="visible-md" style={{
                                height: 100
                              }}/>
                            <div className="hidden-lg hidden-md hidden-ms hidden-xs " style={{
                                height: 64
                              }}/>
                            <div className="visible-ms" style={{
                                height: 64
                              }}/>
                            <div className="visible-xs" style={{
                                height: 0
                              }}/></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section><div className="vc_row-full-width vc_clearfix"/>
                <section data-vc-full-width="true" data-vc-full-width-init="true" className="vc_section vc_custom_1516291127722 vc_section-has-fill bg-pos-left-bottom bg-mobile-hide jtx-sr jtx-sr-effect-fade_in jtx-sr-id-697380719 jtx-sr-el-items jtx-sr-delay-200 jtx-sr-duration-300 jtx-sr-sequences-200">
                  <div className="vc_row wpb_row vc_row-fluid bg-pos-left-center">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="heading  head-subheader align-center color-black subcolor-main transform-default bg-image   vc_custom_1513348347832" id="like_sc_header_1505581322" style={{
                              fontFamily: 'Rufina !important',
                              fontWeight: 700,
                              fontStyle: 'normal'
                            }}>
                            <h5 className="subheader">Our events</h5>
                            <h3 style={{
                                fontFamily: 'Rufina !important',
                                fontWeight: 700,
                                fontStyle: 'normal'
                              }} className="header">Upcoming competitions</h3>
                          </div>
                          <div className="es-resp">
                            <div className="visible-lg" style={{
                                height: 48
                              }}/>
                            <div className="visible-md" style={{
                                height: 48
                              }}/>
                            <div className="hidden-lg hidden-md hidden-ms hidden-xs " style={{
                                height: 0
                              }}/>
                            <div className="visible-ms" style={{
                                height: 0
                              }}/>
                            <div className="visible-xs" style={{
                                height: 0
                              }}/></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="vc_row wpb_row vc_row-fluid bg-pos-right-top">
                    <div className="wpb_column vc_column_container vc_col-sm-6 vc_hidden-sm vc_hidden-xs bg-pos-center-center">
                      <div className="vc_column-inner"><div className="wpb_wrapper"/></div>
                    </div>
                    <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-6">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="es-resp">
                            <div className="visible-lg" style={{
                                height: 48
                              }}/>
                            <div className="visible-md" style={{
                                height: 48
                              }}/>
                            <div className="hidden-lg hidden-md hidden-ms hidden-xs " style={{
                                height: 48
                              }}/>
                            <div className="visible-ms" style={{
                                height: 16
                              }}/>
                            <div className="visible-xs" style={{
                                height: 16
                              }}/></div>
                          <div className="btn-wrap align-center">
                            <a href="/event/" className="btn  btn-xs btn-second transform-default color-text-default color-hover-default align-center mobile-center  vc_custom_1515870367023" id="like_sc_button_1401072893">view more</a>
                          </div>
                          <div className="es-resp">
                            <div className="visible-lg" style={{
                                height: 85
                              }}/>
                            <div className="visible-md" style={{
                                height: 85
                              }}/>
                            <div className="hidden-lg hidden-md hidden-ms hidden-xs " style={{
                                height: 80
                              }}/>
                            <div className="visible-ms" style={{
                                height: 80
                              }}/>
                            <div className="visible-xs" style={{
                                height: 46
                              }}/></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section><div className="vc_row-full-width vc_clearfix"/>
                <section data-vc-full-width="true" data-vc-full-width-init="true" data-vc-parallax="1.5" className="vc_section vc_custom_1513394910090 vc_section-has-fill vc_general vc_parallax vc_parallax-content-moving bg-overlay-dark" >
                  <div className="vc_row wpb_row vc_row-fluid">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="es-resp">
                            <div className="visible-lg" style={{
                                height: 26
                              }}/>
                            <div className="visible-md" style={{
                                height: 26
                              }}/>
                            <div className="hidden-lg hidden-md hidden-ms hidden-xs " style={{
                                height: 26
                              }}/>
                            <div className="visible-ms" style={{
                                height: 10
                              }}/>
                            <div className="visible-xs" style={{
                                height: 10
                              }}/></div>
                          <div className="heading  head-subheader align-center color-white subcolor-main transform-default" id="like_sc_header_291479984">
                            <h5 className="subheader">Online store</h5>
                            <h3 className="header">Recent Products</h3>
                          </div>
                          <div className="es-resp">
                            <div className="visible-lg" style={{
                                height: 32
                              }}/>
                            <div className="visible-md" style={{
                                height: 32
                              }}/>
                            <div className="hidden-lg hidden-md hidden-ms hidden-xs " style={{
                                height: 32
                              }}/>
                            <div className="visible-ms" style={{
                                height: 32
                              }}/>
                            <div className="visible-xs" style={{
                                height: 32
                              }}/></div>
                          <div className="btn-wrap align-center">
                            <a href="/shop/" className="btn  btn-xs btn-default transform-default color-text-white color-hover-white align-center   vc_custom_1513393187528" id="like_sc_button_993481133">view more</a>
                          </div>
                          <div className="es-resp">
                            <div className="visible-lg" style={{
                                height: 100
                              }}/>
                            <div className="visible-md" style={{
                                height: 100
                              }}/>
                            <div className="hidden-lg hidden-md hidden-ms hidden-xs " style={{
                                height: 60
                              }}/>
                            <div className="visible-ms" style={{
                                height: 60
                              }}/>
                            <div className="visible-xs" style={{
                                height: 60
                              }}/></div>
                        </div>
                      </div>
                    </div>
                  </div><div className="vc_parallax-inner skrollable skrollable-before" data-bottom-top="top: -50%;" data-top-bottom="top: 0%;" style={{
      height: '150%',
      top: '-50%'
    }}/></section><div className="vc_row-full-width vc_clearfix"/>
                <section data-vc-full-width="true" data-vc-full-width-init="true" data-vc-parallax="1.5" data-vc-parallax-image="data-vc-parallax-image" className="vc_section vc_section-has-fill vc_general vc_parallax vc_parallax-content-moving bg-color-second testimonials-section">
                  <div className="vc_row wpb_row vc_row-fluid">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="es-resp">
                            <div className="visible-lg" style={{
                                height: 46
                              }}/>
                            <div className="visible-md" style={{
                                height: 46
                              }}/>
                            <div className="hidden-lg hidden-md hidden-ms hidden-xs " style={{
                                height: 32
                              }}/>
                            <div className="visible-ms" style={{
                                height: 32
                              }}/>
                            <div className="visible-xs" style={{
                                height: 32
                              }}/></div>
                          <div className="heading  head-subheader align-center color-white subcolor-main transform-default   vc_custom_1515869913400" id="like_sc_header_1473229445">
                            <h5 className="subheader">Testimonials</h5>
                            <h3 className="header">What Our Club Members Say</h3>
                          </div>
                          <div className="es-resp">
                            <div className="visible-lg" style={{
                                height: 16
                              }}/>
                            <div className="visible-md" style={{
                                height: 16
                              }}/>
                            <div className="hidden-lg hidden-md hidden-ms hidden-xs " style={{
                                height: 16
                              }}/>
                            <div className="visible-ms" style={{
                                height: 16
                              }}/>
                            <div className="visible-xs" style={{
                                height: 16
                              }}/></div>
                          <div className="swiper-container testimonials-list testimonials-slider layout-cols2 bg-white arrows-gray font-weight-bold  row swiper-container-horizontal" data-cols={1} data-autoplay={4000} id="like_sc_testimonials_1758322325">
                            <div className="swiper-wrapper" style={{
                                transform: 'translate3d(0px, 0px, 0px)',
                                transitionDuration: '1000ms'
                              }}>
                              <div className="swiper-slide swiper-slide-active" >
                                <div className="inner matchHeight" style={{
                                    height: 428
                                  }}>
                                  <div className="top"><img width={90} height={90} src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/w8-90x90.jpg" className="attachment-senorcavallo-client size-senorcavallo-client wp-post-image" alt="alt" srcSet="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/w8-90x90.jpg 90w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/w8-150x150.jpg 150w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/w8-300x300.jpg 300w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/w8-768x768.jpg 768w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/w8-1024x1024.jpg 1024w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/w8-600x600.jpg 600w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/w8-100x100.jpg 100w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/w8.jpg 1200w" sizes="(max-width: 90px) 100vw, 90px"/>
                                    <div className="name header">Anastasia Stone</div>
                                    <div className="subheader">Manager
                                    </div>
                                  </div><div className="clearfix"/>
                                  <div className="text">
                                    <span className="bg">,,</span>
                                    <p>Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="swiper-slide swiper-slide-next">
                                <div className="inner matchHeight" style={{
                                    height: 428
                                  }}>
                                  <div className="top"><img width={90} height={90} src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/m2-90x90.jpg" className="attachment-senorcavallo-client size-senorcavallo-client wp-post-image" alt="alt" srcSet="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/m2-90x90.jpg 90w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/m2-150x150.jpg 150w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/m2-300x300.jpg 300w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/m2-768x768.jpg 768w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/m2-1024x1024.jpg 1024w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/m2-600x600.jpg 600w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/m2-100x100.jpg 100w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/m2.jpg 1200w" sizes="(max-width: 90px) 100vw, 90px"/>
                                    <div className="name header">Patrick James</div>
                                    <div className="subheader">Student</div>
                                  </div><div className="clearfix"/>
                                  <div className="text">
                                    <span className="bg">,,</span>
                                    <p>Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. Phasellus hendrerit, massa efficitur dapibus pulvinar, sapien eros sodales ante, euismod aliquet nulla.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="swiper-slide" >
                                <div className="inner matchHeight" style={{
                                    height: 428
                                  }}>
                                  <div className="top"><img width={90} height={90} src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/m1-90x90.jpg" className="attachment-senorcavallo-client size-senorcavallo-client wp-post-image" alt="alt" srcSet="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/m1-90x90.jpg 90w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/m1-150x150.jpg 150w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/m1-300x300.jpg 300w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/m1-768x768.jpg 768w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/m1-1024x1024.jpg 1024w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/m1-600x600.jpg 600w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/m1-100x100.jpg 100w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/m1.jpg 1200w" sizes="(max-width: 90px) 100vw, 90px"/>
                                    <div className="name header">Steven Rashford</div>
                                    <div className="subheader">Barista</div>
                                  </div><div className="clearfix"/>
                                  <div className="text">
                                    <span className="bg">,,</span>
                                    <p>Suspendisse nec arcu sed nibh lacinia pretium. Phasellus eros ligula, mattis id rutrum non, eleifend vitae lacus.&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="swiper-slide" >
                                <div className="inner matchHeight" style={{
                                    height: 428
                                  }}>
                                  <div className="top"><img width={90} height={90} src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/w7-90x90.jpg" className="attachment-senorcavallo-client size-senorcavallo-client wp-post-image" alt="alt" srcSet="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/w7-90x90.jpg 90w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/w7-150x150.jpg 150w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/w7-300x300.jpg 300w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/w7-768x768.jpg 768w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/w7-1024x1024.jpg 1024w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/w7-600x600.jpg 600w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/w7-100x100.jpg 100w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/w7.jpg 1200w" sizes="(max-width: 90px) 100vw, 90px"/>
                                    <div className="name header">Anastasia Stone</div>
                                    <div className="subheader">Seller</div>
                                  </div><div className="clearfix"/>
                                  <div className="text">
                                    <span className="bg">,,</span>
                                    <p>Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="swiper-slide" >
                                <div className="inner matchHeight" style={{
                                    height: 428
                                  }}>
                                  <div className="top"><img width={90} height={90} src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/m2-90x90.jpg" className="attachment-senorcavallo-client size-senorcavallo-client wp-post-image" alt="alt" srcSet="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/m2-90x90.jpg 90w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/m2-150x150.jpg 150w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/m2-300x300.jpg 300w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/m2-768x768.jpg 768w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/m2-1024x1024.jpg 1024w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/m2-600x600.jpg 600w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/m2-100x100.jpg 100w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/m2.jpg 1200w" sizes="(max-width: 90px) 100vw, 90px"/>
                                    <div className="name header">Patrick James</div>
                                    <div className="subheader">Scientist</div>
                                  </div><div className="clearfix"/>
                                  <div className="text">
                                    <span className="bg">,,</span>
                                    <p>Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. Phasellus hendrerit, massa efficitur dapibus pulvinar, sapien eros sodales ante, euismod aliquet nulla metus a mauris.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="swiper-slide" >
                                <div className="inner matchHeight" style={{
                                    height: 428
                                  }}>
                                  <div className="top"><img width={90} height={90} src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/w6-90x90.jpg" className="attachment-senorcavallo-client size-senorcavallo-client wp-post-image" alt="alt" srcSet="http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/w6-90x90.jpg 90w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/w6-150x150.jpg 150w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/w6-300x300.jpg 300w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/w6-768x768.jpg 768w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/w6-1024x1024.jpg 1024w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/w6-600x600.jpg 600w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/w6-100x100.jpg 100w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/10/w6.jpg 1200w" sizes="(max-width: 90px) 100vw, 90px"/>
                                    <div className="name header">Anastasia Stone</div>
                                    <div className="subheader">Programmer</div>
                                  </div><div className="clearfix"/>
                                  <div className="text">
                                    <span className="bg">,,</span>
                                    <p>Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="arrows"><a href="#" className="arrow-left fa  fa-arrow-left swiper-button-disabled"/>
                              <a href="#" className="arrow-right fa fa-arrow-right"/></div>
                          </div>
                          <div className="es-resp">
                            <div className="visible-lg" style={{
                                height: 0
                              }}/>
                            <div className="visible-md" style={{
                                height: 0
                              }}/>
                            <div className="hidden-lg hidden-md hidden-ms hidden-xs " style={{
                                height: 32
                              }}/>
                            <div className="visible-ms" style={{
                                height: 32
                              }}/>
                            <div className="visible-xs" style={{
                                height: 64
                              }}/></div>
                        </div>
                      </div>
                    </div>
                  </div><div className="vc_parallax-inner skrollable skrollable-before" data-bottom-top="top: -50%;" data-top-bottom="top: 0%;" style={{
      height: '150%',
      backgroundImage: 'url("")',
      top: '-50%'
    }}/></section><div className="vc_row-full-width vc_clearfix"/>
                <section className="vc_section">
                  <div className="vc_row wpb_row vc_row-fluid vc_row-o-equal-height vc_row-flex jtx-sr jtx-sr-effect-zoom_in jtx-sr-id-433968143 jtx-sr-el-text_el jtx-sr-delay-200 jtx-sr-duration-150 jtx-sr-sequences-100">
                    <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-4 vc_col-md-12 vc_col-xs-12">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="es-resp">
                            <div className="visible-lg" style={{
                                height: 64
                              }}/>
                            <div className="visible-md" style={{
                                height: 64
                              }}/>
                            <div className="hidden-lg hidden-md hidden-ms hidden-xs " style={{
                                height: 64
                              }}/>
                            <div className="visible-ms" style={{
                                height: 48
                              }}/>
                            <div className="visible-xs" style={{
                                height: 48
                              }}/></div>
                          <div className="heading  heading-large head-subheader align-left color-black subcolor-second transform-default   vc_custom_1513341864830" id="like_sc_header_1495731846">
                            <h2 className="header" data-sr-id={16} style={{
                                visibility: 'visible',
                                transform: 'translateY(0px) scale(1)',
                                opacity: 1,
                                transition: 'all 0.3s ease 0s'
                              }}>Our Riders Have Many</h2>
                          </div>
                          <div className="heading  heading-large head-subheader align-left color-second subcolor-second transform-default   vc_custom_1513341861141" id="like_sc_header_372187561">
                            <h2 className="header" data-sr-id={17} style={{
                                visibility: 'visible',
                                transform: 'translateY(0px) scale(1)',
                                opacity: 1,
                                transition: 'all 0.3s ease 0s'
                              }}>AWARDS</h2>
                          </div>
                          <div className="es-resp">
                            <div className="visible-lg" style={{
                                height: 48
                              }}/>
                            <div className="visible-md" style={{
                                height: 48
                              }}/>
                            <div className="hidden-lg hidden-md hidden-ms hidden-xs " style={{
                                height: 48
                              }}/>
                            <div className="visible-ms" style={{
                                height: 24
                              }}/>
                            <div className="visible-xs" style={{
                                height: 24
                              }}/></div>
                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <p data-sr-id={18} style={{
                                  visibility: 'visible',
                                  transform: 'translateY(0px) scale(1)',
                                  opacity: 1,
                                  transition: 'all 0.3s ease 0s'
                                }}>
                                <span className="text-md">Sed pharetra ex ligula, a rutrum dolor varius non. Nam lobortis fringilla molestie. Nunc bibendum ligula vel nisl ornare tempor.
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-2 vc_col-md-3 vc_col-xs-6 text-align-center">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="es-resp">
                            <div className="visible-lg" style={{
                                height: 64
                              }}/>
                            <div className="visible-md" style={{
                                height: 64
                              }}/>
                            <div className="hidden-lg hidden-md hidden-ms hidden-xs " style={{
                                height: 16
                              }}/>
                            <div className="visible-ms" style={{
                                height: 16
                              }}/>
                            <div className="visible-xs" style={{
                                height: 16
                              }}/></div>
                          <div className="wpb_single_image wpb_content_element vc_align_center">
                            <figure className="wpb_wrapper vc_figure">
                              <div className="vc_single_image-wrapper   vc_box_border_grey"><img width={145} height={145} src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/11/best-awards.png" className="vc_single_image-img attachment-full" alt="alt" srcSet="http://senorcavallo.just-themes.com/wp-content/uploads/2017/11/best-awards.png 145w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/11/best-awards-100x100.png 100w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/11/best-awards-90x90.png 90w" sizes="(max-width: 145px) 100vw, 145px" data-sr-id={19} style={{
      visibility: 'visible',
      transform: 'translateY(0px) scale(1)',
      opacity: 1,
      transition: 'all 0.3s ease 0s'
    }}/></div>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-2 vc_col-md-3 vc_col-xs-6 text-align-center">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="es-resp">
                            <div className="visible-lg" style={{
                                height: 64
                              }}/>
                            <div className="visible-md" style={{
                                height: 64
                              }}/>
                            <div className="hidden-lg hidden-md hidden-ms hidden-xs " style={{
                                height: 16
                              }}/>
                            <div className="visible-ms" style={{
                                height: 16
                              }}/>
                            <div className="visible-xs" style={{
                                height: 16
                              }}/></div>
                          <div className="wpb_single_image wpb_content_element vc_align_center">
                            <figure className="wpb_wrapper vc_figure">
                              <div className="vc_single_image-wrapper   vc_box_border_grey"><img width={151} height={149} src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/11/best-trophy.png" className="vc_single_image-img attachment-full" alt="alt" srcSet="http://senorcavallo.just-themes.com/wp-content/uploads/2017/11/best-trophy.png 151w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/11/best-trophy-150x149.png 150w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/11/best-trophy-100x100.png 100w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/11/best-trophy-90x90.png 90w" sizes="(max-width: 151px) 100vw, 151px" data-sr-id={20} style={{
      visibility: 'visible',
      transform: 'translateY(0px) scale(1)',
      opacity: 1,
      transition: 'all 0.3s ease 0s'
    }}/></div>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-2 vc_col-md-3 vc_col-xs-6 text-align-center">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="es-resp">
                            <div className="visible-lg" style={{
                                height: 64
                              }}/>
                            <div className="visible-md" style={{
                                height: 64
                              }}/>
                            <div className="hidden-lg hidden-md hidden-ms hidden-xs " style={{
                                height: 16
                              }}/>
                            <div className="visible-ms" style={{
                                height: 16
                              }}/>
                            <div className="visible-xs" style={{
                                height: 0
                              }}/></div>
                          <div className="wpb_single_image wpb_content_element vc_align_center">
                            <figure className="wpb_wrapper vc_figure">
                              <div className="vc_single_image-wrapper   vc_box_border_grey"><img width={153} height={156} src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/11/VICTORY.png" className="vc_single_image-img attachment-full" alt="alt" data-sr-id={21} style={{
      visibility: 'visible',
      WebkitTransform: 'translateY(20px) scale(0.01)',
      opacity: 1,
      transform: 'translateY(20px) scale(0.01)'
    }}/></div>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-2 vc_col-md-3 vc_col-xs-6 text-align-center">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="es-resp">
                            <div className="visible-lg" style={{
                                height: 64
                              }}/>
                            <div className="visible-md" style={{
                                height: 64
                              }}/>
                            <div className="hidden-lg hidden-md hidden-ms hidden-xs " style={{
                                height: 16
                              }}/>
                            <div className="visible-ms" style={{
                                height: 16
                              }}/>
                            <div className="visible-xs" style={{
                                height: 0
                              }}/></div>
                          <div className="wpb_single_image wpb_content_element vc_align_center">
                            <figure className="wpb_wrapper vc_figure">
                              <div className="vc_single_image-wrapper   vc_box_border_grey"><img width={155} height={163} src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/11/BEST.png" className="vc_single_image-img attachment-full" alt="alt" data-sr-id={22} style={{
      visibility: 'visible',
      WebkitTransform: 'translateY(20px) scale(0.01)',
      opacity: 1,
      transform: 'translateY(20px) scale(0.01)'
    }}/></div>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="vc_row wpb_row vc_row-fluid">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="es-resp">
                            <div className="visible-lg" style={{
                                height: 72
                              }}/>
                            <div className="visible-md" style={{
                                height: 72
                              }}/>
                            <div className="hidden-lg hidden-md hidden-ms hidden-xs " style={{
                                height: 64
                              }}/>
                            <div className="visible-ms" style={{
                                height: 64
                              }}/>
                            <div className="visible-xs" style={{
                                height: 32
                              }}/></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section data-vc-full-width="true" data-vc-full-width-init="true" className="vc_section vc_custom_1511271667688 vc_section-has-fill bg-color-gray" >
                  <div className="vc_row wpb_row vc_row-fluid vc_custom_1507758725973">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="es-resp">
                            <div className="visible-lg" style={{
                                height: 0
                              }}/>
                            <div className="visible-md" style={{
                                height: 0
                              }}/>
                            <div className="hidden-lg hidden-md hidden-ms hidden-xs " style={{
                                height: 0
                              }}/>
                            <div className="visible-ms" style={{
                                height: 0
                              }}/>
                            <div className="visible-xs" style={{
                                height: 0
                              }}/></div>
                          <div className="heading  head-subheader align-center color-black subcolor-main transform-default bg-image   vc_custom_1513344928206" id="like_sc_header_1277341968">
                            <h5 className="subheader">Our blog</h5>
                            <h3 className="header">Recent News and Posts</h3>
                          </div>
                          <div className="blog blog-sc row layout-inline">
                            <div className="col-lg-6 col-md-6 col-sm-6 ">
                              <article id="post-1855" className="matchHeight post-1855 post type-post status-publish format-standard has-post-thumbnail hentry category-riding-school tag-children tag-school" style={{
                                  height: 259
                                }}>
                                <div className="row">
                                  <div className="col-lg-4">
                                    <a href="http://senorcavallo.just-themes.com/riding-school-begins-our-riding-classes-and-trainings/" className="photo img-visible">
                                      <img  src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/blog10-770x520.jpg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="alt" srcSet="http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/blog10-770x520.jpg 770w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/blog10-740x500.jpg 740w" sizes="(max-width: 770px) 100vw, 770px"/>
                                    </a>
                                  </div>
                                  <div className="description col-lg-8">
                                    <div className="blog-info">
                                      <a href="http://senorcavallo.just-themes.com/riding-school-begins-our-riding-classes-and-trainings/" className="date date-bold">September 25, 2017</a>
                                      <span className="cat-div">
                                        |
                                      </span>
                                      <span className="cat">Riding school</span>
                                    </div>
                                    <a href="http://senorcavallo.just-themes.com/riding-school-begins-our-riding-classes-and-trainings/" className="header">
                                      <h4 className="font-main">Riding school begins our riding classes and trainings</h4>
                                    </a>
                                    <div className="text text-page margin-bottom-0">
                                      <div className="post_content entry-content">Nunc bibendum tincidunt mauris, at euismod velit porttitor ut. Mauris at mauris tincidunt, vestibulum massa sit amet, euismod lorem. Suspendisse vulputate enim ...</div>
                                    </div>
                                    <div className="blog-info">
                                      <a href="http://senorcavallo.just-themes.com/riding-school-begins-our-riding-classes-and-trainings/" className="btn btn-xxs btn-second">Read more</a>
                                      <ul>
                                        <li className="icon-fav">
                                          <span className="fa fa-eye"/>
                                          0
                                        </li>
                                        <li className="icon-comments"><span className="fa fa-commenting"/>
                                          0</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </article>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 ">
                              <article id="post-1851" className="matchHeight post-1851 post type-post status-publish format-standard has-post-thumbnail hentry category-riding-school tag-horses" style={{
                                  height: 259
                                }}>
                                <div className="row">
                                  <div className="col-lg-4">
                                    <a href="http://senorcavallo.just-themes.com/how-can-i-keep-my-horse-happy-and-fit/" className="photo img-visible">
                                      <img  src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/blog9-770x520.jpg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="alt" srcSet="http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/blog9-770x520.jpg 770w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/blog9-740x500.jpg 740w" sizes="(max-width: 770px) 100vw, 770px"/>
                                    </a>
                                  </div>
                                  <div className="description col-lg-8">
                                    <div className="blog-info">
                                      <a href="http://senorcavallo.just-themes.com/how-can-i-keep-my-horse-happy-and-fit/" className="date date-bold">September 21, 2017</a>
                                      <span className="cat-div">
                                        |
                                      </span>
                                      <span className="cat">Riding school</span>
                                    </div>
                                    <a href="http://senorcavallo.just-themes.com/how-can-i-keep-my-horse-happy-and-fit/" className="header">
                                      <h4 className="font-main">How Can I Keep My Horse Happy and Fit?</h4>
                                    </a>
                                    <div className="text text-page margin-bottom-0">
                                      <div className="post_content entry-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante nisi, commodo et tortor sit amet, suscipit dignissim justo. Morbi volutpat leo id ...</div>
                                    </div>
                                    <div className="blog-info">
                                      <a href="http://senorcavallo.just-themes.com/how-can-i-keep-my-horse-happy-and-fit/" className="btn btn-xxs btn-second">Read more</a>
                                      <ul>
                                        <li className="icon-fav">
                                          <span className="fa fa-eye"/>
                                          0
                                        </li>
                                        <li className="icon-comments"><span className="fa fa-commenting"/>
                                          0</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </article>
                            </div>
                          </div>
                          <div className="es-resp">
                            <div className="visible-lg" style={{
                                height: 60
                              }}/>
                            <div className="visible-md" style={{
                                height: 60
                              }}/>
                            <div className="hidden-lg hidden-md hidden-ms hidden-xs " style={{
                                height: 60
                              }}/>
                            <div className="visible-ms" style={{
                                height: 60
                              }}/>
                            <div className="visible-xs" style={{
                                height: 0
                              }}/></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section><div className="vc_row-full-width vc_clearfix"/>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>

  </div>)
}






export async function getServerSideProps() {
  // Fetch data from external API
  // var url =`${process.env.NEXT_PUBLIC_STRAPI_URL}/home-slider`
  var url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`

  var query =`
  query {
menu:categoryArthras{
  title
  url_key
}

slider:homeSlider{
  slider_images{
    url
  }
}

  about:aboutUs{
    title
    body
    image{
      url
    }

  }
}
  `;

  var data= await fetcher(query)





  // const res = await fetch(url)
  // const data = await res.json()

  // Pass data to the page via props
  return { props: {data} }
}
