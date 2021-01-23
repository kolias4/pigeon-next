import fetcher from '../functions/fetcher'
import menuquery from '../functions/queries/menuquery'

function Contact(){

  return (
    <div className="container">
  {/* Content */}
  <div className="margin-top">
    <div className="row">
      <div className=" col-md-12 text-page">
        <article id="post-25" className="post-25 page type-page status-publish hentry">
          <div className="entry-content clearfix" id="entry-div">
            <section data-vc-full-width="true" data-vc-full-width-init="true" className="vc_section" >
              <div className="vc_row wpb_row vc_row-fluid">
                <div className="wpb_column vc_column_container vc_col-sm-6">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="heading  color-black transform-header-up   vc_custom_1508350389768" id="like_sc_header_30975873">
                        <h3 className="header">Φόρμα Επικοινωνίας</h3>
                      </div>
                      <div className="wpb_text_column wpb_content_element ">
                        <div className="wpb_wrapper">
                          <p>
                            Για οποιοδήποτε θέμα μη διστάσετε να επικοινωνήσετε μαζί μας. Θα προσπαθήσουμε να σας απαντήσουμε το συντομότερο δυνατόν
                          </p>
                        </div>
                      </div>
                      <div className="align-default ">
                        <ul className="social-icons-list   vc_custom_1513441326654 " id="like_sc_header_1551130109">
                          <li className><span className="fa fa-phone" /><span className="head"><a href="tel:+306982181433">+306982181433</a></span></li>
                          <li className><span className="fa fa-envelope" /><span className="head"><a href="mailto:mypigeon.gr@gmail.com">mypigeon.gr@gmail.com</a></span></li>
                          <li className><span className="fa fa-map-marker" /><span className="head">Κομοτηνη, Ροδοπη</span></li>
                        </ul>
                      </div>
                      <div className="heading  color-black transform-header-up   vc_custom_1502236442786" id="like_sc_header_448402402">
                        <h6 className="header">Social:</h6>
                      </div>
                      <div className="align-default ">
                        <ul className="social-big icon-weight-bold" id="like_sc_header_1067007673">
                          <li><a href="#" className="fa fa-facebook" /></li>
                          {/* <li><a href="#" className="fa fa-twitter" /></li>
                          <li><a href="#" className="fa fa-youtube" /></li>
                          <li><a href="#" className="fa fa-instagram" /></li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-has-fill bg-repeat-x bg-pos-center-top">
                  <div className="vc_column-inner vc_custom_1508350667352">
                    <div className="wpb_wrapper">
                      <div className="jtx-contact-form-7 transform-default form-bg-gray form-style-secondary form-btn-default form-btn-default form-padding-default " id="like_sc_contact_form_7_893640890">
                        <div role="form" className="wpcf7" id="wpcf7-f1551-p25-o1" lang="en-US" dir="ltr">
                          <div className="screen-reader-response" />
                          <form action="/contacts/#wpcf7-f1551-p25-o1" method="post" className="wpcf7-form" noValidate="novalidate">
                            <div style={{display: 'none'}}>
                              <input type="hidden" name="_wpcf7" defaultValue={1551} />
                              <input type="hidden" name="_wpcf7_version" defaultValue="5.1.3" />
                              <input type="hidden" name="_wpcf7_locale" defaultValue="en_US" />
                              <input type="hidden" name="_wpcf7_unit_tag" defaultValue="wpcf7-f1551-p25-o1" />
                              <input type="hidden" name="_wpcf7_container_post" defaultValue={25} />
                            </div>
                            <p><label> Your Name*:<br />
                                <span className="wpcf7-form-control-wrap your-name"><input type="text" name="your-name" defaultValue size={40} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" /></span> </label></p>
                            <p><label> Your Email*:<br />
                                <span className="wpcf7-form-control-wrap your-email"><input type="email" name="your-email" defaultValue size={40} className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" /></span> </label></p>
                            <p><label> Your Message<br />
                                <span className="wpcf7-form-control-wrap your-message"><textarea name="your-message" cols={40} rows={10} className="wpcf7-form-control wpcf7-textarea" aria-invalid="false" defaultValue={""} /></span> </label></p>
                            <p><input type="submit" defaultValue="Submit" className="wpcf7-form-control wpcf7-submit" /><span className="ajax-loader" /></p>
                            <div className="wpcf7-response-output wpcf7-display-none" />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="vc_row wpb_row vc_row-fluid">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="vc_empty_space" style={{height: 35}}>
                        <span className="vc_empty_space_inner" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>


        </article>
      </div>
    </div>
  </div>
</div>


  )

}

export default Contact

export async function getStaticProps() {
  // Fetch data from external API

var menu = await menuquery()






  // Pass data to the page via props
  return { props: { title:"Επικοινωνία",menu } }
}
