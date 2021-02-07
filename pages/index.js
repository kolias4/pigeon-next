import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { NextSeo } from 'next-seo';
import {useEffect,useState,useContext} from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import Slider from "react-slick";
import {Card,Button} from 'react-bootstrap'
import {UiContext,AppContext} from '../context/context'
import LoginForm from '../components/forms/login'
import MyModal from '../components/modals/mymodal'
import RegisterForm from '../components/forms/register'
import dateformat from '../functions/dateformat'
import fetcher from '../functions/fetcher'
import menuquery from '../functions/queries/menuquery'






 export default function Home({data}) {

  const [activeslide,setActiveSlide]= useState(null)

  const [modalstate,setModalState] = useState('register')

  const [reveal,setReveal] = useState(false)

  const {setToaster} = useContext(UiContext)
  const {user,setUser} = useContext(AppContext)

  const router = useRouter()






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

  const disconnect = () => {
    setUser(null)
    localStorage.removeItem('usertoken')
  }

  const login = () => {
    if(user){
      return;
    }
    else {
      setModalState('login')
      setReveal(true)
    }

  }

  var item_length = data.xorigois.length

  const settings = {
   autoplay:true,
   dots: false,
   infinite: item_length > 3,
   speed: 500,
   slidesToShow: 3,
   slidesToScroll: 1,
   nextArrow: <SampleNextArrow />,
   prevArrow: <SamplePrevArrow />,
   responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite:true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite:true
        }
      }
    ]
 };

 function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="arrow right"
      style={{display: "block", position:"absolute", width:'20px',height:'20px',right:'10px', top:'50%', zIndex:'1000' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="arrow left"
      style={{display: "block", position:"absolute", width:'20px',height:'20px',left:'10px', top:'50%', zIndex:'1000' }}
      onClick={onClick}
    />
  );
}

  useEffect(() => {

    if(!activeslide){
      setTimeout(() => {
        setActiveSlide(0)
      },100)

        }

    const intervalId = setInterval(() => {
      handleSlider()
    },5300)

    return () => clearInterval(intervalId)

},[activeslide]);


  return (
    <div >
      <NextSeo title="Ταχυδρομικά Περιστέρια | MyPigeon"
        description="Στο MyPigeon θα βρείτε τα πάντα για το ταχυδρομικό περιστέρι. Άρθρα, σύλλογοι περιστεριών, αποτελέσματα αγώνων και πολλά άλλα"
        canonical={process.env.NEXT_PUBLIC_SITE_URL}
        openGraph={{
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
      title: 'Ταχυδρομικά Περιστέρια | MyPigeon',
      description: 'Στο MyPigeon θα βρείτε τα πάντα για το ταχυδρομικό περιστέρι. Άρθρα, σύλλογοι περιστεριών, αποτελέσματα αγώνων και πολλά άλλα',
      images: [
        {
          url:`${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
          alt: 'logo',
        }

      ],
      site_name: 'MyPigeon',
    }}
      />


 <MyModal contentClassName="mymodalcontent" title={modalstate === "register"? "ΕΓΓΡΑΦΗ ΝΕΟΥ ΧΡΗΣΤΗ":"ΕΙΣΟΔΟΣ ΧΡΗΣΤΗ"} reveal={reveal} setReveal={setReveal}>

   {modalstate === "register"? <RegisterForm onSuccess={() => {
     setToaster({show:true,message:"Η ΕΓΓΡΑΦΗ ΟΛΟΚΛΗΡΩΘΗΚΕ",success:true});
     setReveal(false)
   }
 }
    onFail={() => {
      setToaster({show:true,message:"ΚΑΤΙ ΠΗΓΕ ΛΑΘΟΣ",fail:true});
      setReveal(false)

    }
      }
      setUser={setUser}
    /> :
    <LoginForm
      onSuccess={() => {
        setToaster({show:true,message:"ΕΙΣΟΔΟΣ ΕΠΙΤΥΧΗΣ",success:true});
        setReveal(false)
      }

    }

    onFail={() => {
      setToaster({show:true,message:"ΚΑΤΙ ΠΗΓΕ ΛΑΘΟΣ",fail:true});
      setReveal(false)

    }
      }

      setUser={setUser}



    />
  }
 </MyModal>









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

                        <div key={`slide${i}`} className={`zs-slide zs-slide-${i} ${activeslide === i? 'active myactive':''}`} >
                        <Image priority={true} objectFit="cover" quality={60} layout="fill"  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${slide.url}`}/>
                        </div>


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

                        }} className="header" data-sr-id={2}>Premium Racing Pigeons
                        {/* <span className="subheader" data-sr-id={3} style={{
                            visibility: 'visible',
                            transform: 'translateY(0px) scale(1)',
                            opacity: 1,
                            transition: 'all 0.3s ease 0s'
                          }}>- Greece</span> */}
                      </h2>
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
                  {/* <li>
                    <a href="#" target="_blank"><span className="fa fa-twitter"/></a>
                  </li>
                  <li>
                    <a href="#" target="_blank"><span className="fa fa-google-plus"/></a>
                  </li>
                  <li>
                    <a href="#" target="_blank"><span className="fa fa-instagram"/></a>
                  </li> */}
                </ul>
                <div className="nav-right">
                  <a className="shop_table cart" title={user && user.username}>
                    {user && <span className="mr-2">{user.username}</span>}
                    <i onClick={() => login()} style={{fontSize:'2rem'}} className={`fa fa-user ${!user? 'hoverable':''}`} aria-hidden="true"/>

                  </a>
                  {user &&
                    <div className="text-right my-2 shop_table cart">
                      <span onClick={() => disconnect()} className="hoverable" >Αποσύνδεση</span>
                    </div>
                  }
                  {/* <div id="top-search" className="top-search">
                    <a href="#" id="top-search-ico" className="fa fa-search" aria-hidden="true"/>
                    <input placeholder="Search" defaultValue="defaultValue" type="text"/>
                    <span className="search-close">×</span>
                  </div> */}
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
                <section className="vc_section  bg-color-theme_color">
                  <div className="d-flex align-items-center justify-content-center flex-wrap">

                    <div className="wpb_column mx-3 ">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <ul className="block-icon  icon-h-right align-left i-transparent layout-inline">
                            <li className=" icon-image">
                              <span className="icon-image bg-main">
                                <i style={{fontSize:'2rem',color:'black'}} className="fa fa-phone"></i>
                              </span>
                              <div className="block-right">
                                <h4 className="font-main">

                                   +30 6982181433
                                </h4>
                                <div className="descr"/></div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="wpb_column mx-3">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="btn-wrap align-left">
                            <Link href="/contact">
                            <a  className="btn  btn-xs btn-second transform-default color-text-default color-hover-default align-left   vc_custom_1513441693504" id="like_sc_button_278609766">
                              Επικοινωνία
                            </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

    <div className="vc_row-full-width vc_clearfix"/>

    {  data.pigeons[0] && <section data-vc-full-width="true" data-vc-full-width-init="true" data-vc-parallax="1.5" className="vc_section services-block vc_section-has-fill vc_general vc_parallax bg-color-white" >
                  <div data-vc-full-width="true" data-vc-full-width-init="true" className="vc_row wpb_row vc_row-fluid vc_row-has-fill bg-pos-center-center text-align-center" >
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">

                          <div className="heading  head-subheader align-center subcolor-main transform-default   vc_custom_1518024603312" id="like_sc_header_1827581567" style={{

                              fontWeight: 700,
                              fontStyle: 'normal'
                            }}>

                            <h3 style={{

                                fontWeight: 700,
                                fontStyle: 'normal'
                              }} className="header ">Περιστέρια που προτείνουμε</h3>
                          </div>
                          <div className="jtx-content-width width-0" style={{
                              maxWidth: 770
                            }}>
                            <div className="wpb_text_column wpb_content_element ">

                            </div>
                          </div>
                          <div className=" archive post-type-archive post-type-archive-product woocommerce woocommerce-page woocommerce-js vc_row wpb_row vc_inner vc_row-fluid jtx-sr jtx-sr-effect-fade_in jtx-sr-id-1185163062 jtx-sr-el-items jtx-sr-delay-200 jtx-sr-duration-500 jtx-sr-sequences-100">

                            <ul className="products columns-4 row">

                            {data.pigeons.map((pigeon,i) => {
                              var imagepath = pigeon.eikones[0] && pigeon.eikones[0].url
                              return (
                                <div className="col-md-3">
                                <li style={{width:'auto',float:'none'}} className="has-post-thumbnail product type-product post-2707 status-publish first instock product_cat-accessories product_cat-hat product_cat-tools product_tag-barrel shipping-taxable purchasable product-type-simple">
                                  <div className="matchHeight1 item">
                                    <div className="matchHeight jtx-product" data-mh="jtx-product" style={{
                                        height: 403
                                      }}>
                                      <Link href={`/pigeons/${pigeon.urlkey}`}>
                                      <a >
                                        <div className="image">
                                          {imagepath && <Image priority={true} width={290} height={290} objectFit="cover" src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${imagepath}`}/>}
                                          </div>
                                        <h2 className="woocommerce-loop-product__title">{pigeon.kodikos}</h2>
                                      </a>
                                      </Link>
                                      <div className="post_content entry-content">
                                        <p>
                                          {pigeon.name}
                                        </p>

                                      </div>
                                    </div>
                                    <span className="price">
                                      <span className="woocommerce-Price-amount amount">
                                        <span className="woocommerce-Price-currencySymbol">€</span>{pigeon.timi}</span>
                                    </span>
                                    <Link href={`/pigeons/${pigeon.urlkey}`}>
                                    <a className=" btn btn-second color-hover-main" >Δείτε το</a>
                                  </Link>
                                  </div>
                                </li>
                                </div>

                              )
                            })}

                            </ul>



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
    }}/></section>}
    <div className="vc_row-full-width vc_clearfix"/>
                <section data-vc-full-width="true" data-vc-full-width-init="true" className="vc_section bg-color-gray py-5 py-md-0" >
                  <div className="vc_row wpb_row vc_row-fluid">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner">

                      </div>
                    </div>
                  </div>
                  <div data-vc-full-width="true" data-vc-full-width-init="true" className="vc_row wpb_row vc_row-fluid" >
                    <div style={{zIndex:'1'}} className="club-cards wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-6 vc_col-has-fill bg-color-white bg-pos-center-center border_shadow">
                      <div style={{backgroundImage:'none',backgroundColor:'white'}} className="vc_column-inner vc_custom_1579537352413">
                        <div className="wpb_wrapper">
                          <div className="heading  heading-large head-subheader align-left color-black subcolor-main transform-default" id="like_sc_header_1372766355" style={{

                              fontWeight: 700,
                              fontStyle: 'normal'
                            }}>
                            <h5 className="subheader">Εγγραφείτε στο</h5>
                            <h2 style={{

                                fontWeight: 700,
                                fontStyle: 'normal'
                              }} className="header">Mypigeon</h2>
                          </div>
                          <div className="jtx-content-width width-0" style={{
                              maxWidth: 770
                            }}>
                            <div className="wpb_text_column wpb_content_element ">
                              <div className="wpb_wrapper">
                                <p>
                                  <span className="text-md text-large">
                                    <ReactMarkdown>
                                      {data.egrafi.body}
                                    </ReactMarkdown>
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

                            <button onClick={() => {setModalState('register');setReveal(true);}} className="btn  btn-second transform-default color-text-white color-hover-default align-left   vc_custom_1513358113660" id="like_sc_button_932198521">
                              ΕΓΓΡΑΦΗ
                            </button>

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
                    <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-6 d-md-block d-none py-4">
                      <div className="vc_column-inner">
                        <div style={{minHeight:'500px',display:'flex',alignItems:'center',justifyContent:'center', backgroundColor:'#28201d'}} className="wpb_wrappe">
                          <div className="wpb_single_image wpb_content_element vc_align_center">
                            <figure className="wpb_wrapper vc_figure">
                              <div className="vc_single_image-wrapper   vc_box_border_grey">
                                {/* <img width={570} height={570} src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/11/girl2.jpg" className="vc_single_image-img attachment-full" alt="alt" srcSet="http://senorcavallo.just-themes.com/wp-content/uploads/2017/11/girl2.jpg 570w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/11/girl2-150x150.jpg 150w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/11/girl2-300x300.jpg 300w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/11/girl2-100x100.jpg 100w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/11/girl2-90x90.jpg 90w" sizes="(max-width: 570px) 100vw, 570px"/> */}
                                <Image width={200} height={200} src="/logo.png"/>
                              </div>
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
                <section data-vc-full-width="true" data-vc-full-width-init="true" className="vc_section  vc_section-has-fill bg-pos-left-bottom bg-mobile-hide jtx-sr jtx-sr-effect-fade_in jtx-sr-id-697380719 jtx-sr-el-items jtx-sr-delay-200 jtx-sr-duration-300 jtx-sr-sequences-200">
                  <div className="vc_row wpb_row vc_row-fluid bg-pos-left-center">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="heading  head-subheader align-center color-black subcolor-main transform-default bg-image   vc_custom_1513348347832" id="like_sc_header_1505581322" style={{

                              fontWeight: 700,
                              fontStyle: 'normal'
                            }}>
                            <h5 className="subheader">Our events</h5>
                            <h3 style={{

                                fontWeight: 700,
                                fontStyle: 'normal'
                              }} className="header">Επερχόμενα Events</h3>
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
                  <div className="container">
                     <div className="row">
                     {data.events.map((event) => {
                       return (

                         <div key={event.title} className="col-md-3 my-3">
                           <Card className="h-100" >

    {event.image && <Image width={500} height={300} src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${event.image.url}`} alt={event.title}/>}

   <Card.Body>
     <Card.Title>{event.title}</Card.Title>
     <Card.Text>
        {event.description}
     </Card.Text>

     <div className="blog-info">
     <a className="date date-bold">{event.date}</a>
     </div>

   </Card.Body>
  </Card>
                         </div>

                       )
                     })}



                     </div>
                     </div>

                     <div className="my-3 text-center">
                       <Link href="/events">
                         <a className="btn btn-primary">Events</a>
                       </Link>
                     </div>
                </section><div className="vc_row-full-width vc_clearfix"/>
<div className="vc_row-full-width vc_clearfix"/>
                {/* <section data-vc-full-width="true" data-vc-full-width-init="true" data-vc-parallax="1.5" data-vc-parallax-image="data-vc-parallax-image" className="vc_section vc_section-has-fill vc_general vc_parallax vc_parallax-content-moving bg-color-second testimonials-section">
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
    }}/>
  </section> */}

  <div className="vc_row-full-width vc_clearfix"/>

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
                            <h5 className="subheader">Το blog μας</h5>
                            <h3 className="header">Πρόσφατα άρθρα</h3>
                          </div>
                          <div className="blog blog-sc row layout-inline">
                            {data.lastposts.map((post,i) => {
                              return (
                                <div className="col-lg-6 col-md-6 col-sm-6 ">
                                  <article id="post-1855" className="matchHeight post-1855 post type-post status-publish format-standard has-post-thumbnail hentry category-riding-school tag-children tag-school">
                                    <div className="row">
                                      <div className="col-lg-4">
                                        <Link href={`/blog/post/${post.urlkey}`}>
                                        <a  className="photo img-visible">
                                          {post.Eikones[0]?

                                            <Image objectFit="cover" width={500} height={500} src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${post.Eikones[0].url}`} alt={post.Title}/>

                                            :
                                             null}
                                        </a>
                                        </Link>
                                      </div>
                                      <div className="description col-lg-8">
                                        <div className="blog-info">
                                          <a className="date date-bold">{dateformat(post.created_at)}</a>
                                          <span className="cat-div">
                                            |
                                          </span>
                                          <span className="cat">{post.author}</span>
                                        </div>
                                        <Link href={`/blog/post/${post.urlkey}`}>
                                        <a  className="header">
                                          <h4 className="font-main">{post.Title}</h4>
                                        </a>
                                        </Link>
                                        <div className="text text-page margin-bottom-0">
                                          <div className="post_content entry-content crop_string">
                                            <ReactMarkdown>
                                              {post.kyriosthema}
                                            </ReactMarkdown>
                                            </div>
                                        </div>
                                        <div className="blog-info">
                                           <Link href={`/blog/post/${post.urlkey}`}>
                                          <a  className="btn btn-xxs btn-second">Περισσότερα</a>
                                          </Link>
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

                              )
                            })}


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
                <section data-vc-full-width="true" data-vc-full-width-init="true" data-vc-parallax="1.2" data-vc-parallax-image="data-vc-parallax-image" className="vc_section vc_section-has-fill vc_general vc_parallax vc_parallax-content-moving bg-color-white bg-pos-center-center">
                  <div className="vc_row wpb_row vc_row-fluid vc_custom_1511210269077">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">

                          <div className="heading align-center color-black subcolor-main transform-default bg-image   vc_custom_1513346533124" id="like_sc_header_1872379077" style={{

                              fontWeight: 700,
                              fontStyle: 'normal'
                            }}>
                            {/* <h5 className="subheader">Who we are</h5> */}
                            <h3 style={{

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

                              fontWeight: 700,
                              fontStyle: 'normal'
                            }}>
                            <h2 className="subheader">40 Years of</h2>
                            <h2 style={{

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
                            <Link href="/about">
                            <a  className="btn  btn-xs btn-second transform-default color-text-default color-hover-black align-left   vc_custom_1513358515887" id="like_sc_button_717250034">
                              Περισσότερα
                            </a>
                            </Link>
                          </div>
                          <div className="btn-wrap align-left btn-wrap-inline">
                            <Link href="/contact">
                            <a  className="btn  btn-xs btn-default transform-default color-text-white color-hover-black align-left   vc_custom_1513358523023" id="like_sc_button_1895455874">
                              Επικοινωνία
                            </a>
                          </Link>
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
                  </div>
                  <div className="vc_row-full-width vc_clearfix"/>
                  <div className="vc_parallax-inner skrollable skrollable-before" data-bottom-top="top: -20%;" data-top-bottom="top: 0%;" style={{
      height: '120%',
      backgroundImage: 'url("")',
      top: '-20%'
    }}/>
  </section>

  <section data-vc-full-width="true" data-vc-full-width-init="true" data-vc-parallax="1.2" data-vc-parallax-image="data-vc-parallax-image" className="vc_section vc_section-has-fill vc_general vc_parallax vc_parallax-content-moving bg-color-gray  bg-pos-center-center">
    <div className="vc_row wpb_row vc_row-fluid vc_custom_1511210269077">
      <div className="wpb_column vc_column_container vc_col-sm-12">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">

            <div className="heading align-center color-black subcolor-main transform-default bg-image   vc_custom_1513346533124" id="like_sc_header_1872379077" style={{

                fontWeight: 700,
                fontStyle: 'normal'
              }}>
              {/* <h5 className="subheader">Who we are</h5> */}
              <h3 style={{

                  fontWeight: 700,
                  fontStyle: 'normal'
                }} className="header">Χορηγοί</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-vc-full-width="true" data-vc-full-width-init="true" className="vc_row wpb_row vc_row-fluid" >

      <Slider {...settings}>
        {data.xorigois.map((item,i) => {
          return (
            <div className="text-center">
            <Image priority={true} key={`kolobodromio${i}`} src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.logo.url}`}  alt={`kolobodromio${i}`} objectFit="contain" width={300} height={200} />
           </div>
          )
        })}




      </Slider>


    </div>

</section>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>

  </div>
)
}






export async function getServerSideProps() {
  // Fetch data from external API
  // var url =`${process.env.NEXT_PUBLIC_STRAPI_URL}/home-slider`
  var url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`

  var query =`
  query($date:String!) {


slider:homeSlider{
  slider_images{
    url
  }
}

pigeons(where:{proteinomeno:true}){
  proteinomeno
  kodikos
  timi
  name
  urlkey
  eikones{
    url
  }
  breed{
    breed
  }

}

egrafi{
  body
}

  about:aboutUs{
    title
    body
    image{
      url
    }
  }

  lastposts:arthras(limit:4,sort:"created_at:desc"){
    author
    Title
    created_at
    urlkey
    kyriosthema
    Eikones{
      url
    }

  }


  xorigois{
  title
  logo{
    url
    width
    height
  }
  website
}

events(limit:4,where:{date_gte:$date},sort:"date:asc"){
 title
 description
 image{
   width
   height
   url
 }
 date
}


}
  `;

  var now = dateformat(new Date())

  var data= await fetcher(query,{
    variables:{
      date:now
    }
  })



  var menu = await menuquery()

  // const res = await fetch(url)
  // const data = await res.json()

  // Pass data to the page via props
  return { props: {data,menu} }
}
