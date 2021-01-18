import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import {useState} from 'react'


function PigeonTabs({description,video,youtubevideo,pedigree}){

  const [activetab, setActiveTab] = useState("description")
  return (
    <div className="woocommerce-tabs wc-tabs-wrapper">
      <ul className="tabs wc-tabs" role="tablist">
      {description &&
        <li className={`description_tab hoverable  ${activetab === 'description'? 'active' :''}`}>
          <a onClick={() => setActiveTab('description')}>Περιγραφή</a>
        </li>

      }

      {pedigree &&
        <li className={`description_tab hoverable ${activetab === 'pedigree'? 'active' :''}`}>
          <a onClick={() => setActiveTab('pedigree')}>Pedigree</a>
        </li>

      }

      {(video || youtubevideo) &&

        <li className={`description_tab hoverable ${activetab === 'video'? 'active' :''}`}>
          <a onClick={() => setActiveTab('video')}>Βίντεο</a>
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
      {pedigree && <div className="woocommerce-Tabs-panel  panel entry-content wc-tab"  style={{display: activetab === 'pedigree'? 'block':'none'}}>
        <h2>Pedigree</h2>
         <div className="text-center">
             <Image width={pedigree.width} height={pedigree.height} src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${pedigree.url}`} alt="pedigree"/>
         </div>
      </div>}

      {(video || youtubevideo) &&    <div className="woocommerce-Tabs-panel  panel entry-content wc-tab"  style={{display: activetab === 'video'? 'block':'none'}}>
            <h2>Βίντεο</h2>


               <div style={{maxWidth:'800px'}}>
                  {video &&
                    <video controls width="100%">



    <source src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${video.url}`} type={video.mime}/>

          Sorry, your browser doesn't support embedded videos.
             </video>

                  }
               </div>

               <div className="videoblock" style={{maxWidth:'800px'}}>
                 {youtubevideo &&
                   <iframe rel="0" width="100%" height="100%" src={`https://www.youtube.com/embed/${youtubevideo}`}/>

                 }

               </div>


          </div>}

          <style jsx>{`
            .videoblock {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}
.videoblock iframe {
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

export default PigeonTabs
