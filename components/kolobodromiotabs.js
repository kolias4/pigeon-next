import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import {useState} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function KolobodromioTabs({description,videos,location}){



  const [activetab, setActiveTab] = useState("description")

  const settings = {
   autoplay:false,
   dots: false,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
   nextArrow: <SampleNextArrow />,
   prevArrow: <SamplePrevArrow />
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


  return (
    <div className="woocommerce-tabs wc-tabs-wrapper">
      <ul id="kel"  className="tabs wc-tabs" role="tablist">
      {description &&
        <li className={`description_tab hoverable  ${activetab === 'description'? 'active' :''}`}>
          <a href="#kel" onClick={() => setActiveTab('description')}>Περιγραφή</a>
        </li>

      }



      {videos &&

        <li className={`description_tab hoverable ${activetab === 'videos'? 'active' :''}`}>
          <a href="#kel" onClick={() => setActiveTab('videos')}>Βίντεο</a>
        </li>


      }

      {location &&

        <li className={`description_tab hoverable ${activetab === 'location'? 'active' :''}`}>
          <a href="#kel" onClick={() => setActiveTab('location')}>Τοποθεσία</a>
        </li>


      }


      </ul>
  {description &&    <div className="woocommerce-Tabs-panel  panel entry-content wc-tab"  style={{display: activetab === 'description'? 'block':'none'}}>
        <h2>Περιγραφή</h2>
         <div>
           <ReactMarkdown>
             {description}
           </ReactMarkdown>
         </div>
      </div>}


      {videos &&    <div className="woocommerce-Tabs-panel  panel entry-content wc-tab"  style={{display: activetab === 'videos'? 'block':'none'}}>
            <h2>Βίντεο</h2>


               <div style={{maxWidth:'800px'}}>
                 <Slider {...settings}>
                   {videos.map((video,i) => {
                     return (

              <video key={`video${i}`} controls width="100%">



         <source src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${video.url}`} type={video.mime}/>

               Sorry, your browser doesn't support embedded videos.
                </video>



                     )
                   })}
                 </Slider>



               </div>




          </div>}

          {location &&    <div className="woocommerce-Tabs-panel  panel entry-content wc-tab"  style={{display: activetab === 'location'? 'block':'none'}}>
                <h2>Τοποθεσία</h2>
                 <div className="locationblock">


                       <iframe width="100%" height="100%" id="gmap_canvas" src={location} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>



                 </div>
              </div>}

          <style jsx>{`
            .locationblock {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}
.locationblock iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

          `}</style>

    </div>

  )
}

export default KolobodromioTabs
