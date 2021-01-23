import fetcher from '../functions/fetcher'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import menuquery from '../functions/queries/menuquery'

function About({data,title}){

  return (
    <div className="container">
  {/* Content */}
  <div className="margin-top">
    <div className="row">
      <div className=" col-md-12 text-page">
        <article id="post-25" className="post-25 page type-page status-publish hentry">
          <div className="entry-content clearfix" id="entry-div">

            <section data-vc-full-width="true" data-vc-full-width-init="true" data-vc-parallax="1.2" data-vc-parallax-image="data-vc-parallax-image" className="vc_section vc_section-has-fill vc_general vc_parallax vc_parallax-content-moving bg-color-white bg-pos-center-center">
              <div className="vc_row wpb_row vc_row-fluid vc_custom_1511210269077">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">

                      <div className="heading align-center color-black subcolor-main transform-default bg-image   vc_custom_1513346533124" id="like_sc_header_1872379077" style={{
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
                            <div  className="text-md ">
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



          </div>


        </article>
      </div>
    </div>
  </div>
</div>


  )

}

export default About

export async function getStaticProps() {
  // Fetch data from external API



  var nquery = `
  query {

about:aboutUs{
  title
  body
  image{
    url
  }
}


}
  `

  var menu = await menuquery()
  const data = await fetcher(nquery)


  // Pass data to the page via props
  return { props: { data,title:"Σχετικά με εμάς",menu } }
}
