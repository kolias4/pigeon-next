import { NextSeo } from 'next-seo';
import {useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import { UiContext } from '../context/context';
import ContactForm from '../components/forms/contact'
import fetcher from '../functions/fetcher'
import menuquery from '../functions/queries/menuquery'
// import FullCalendar from '../components/fullcalendar'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'
import elLocale from '@fullcalendar/core/locales/el'




function Eventpage({title}){

  const [isloaded,setIsLoaded] = useState(false)


  const router =useRouter()

  const handleEventContent = (eventinfo) => {
    console.log(eventinfo.event._def)
    return (
      <>
      <div className="d-flex justify-content-center align-items-center w-100 titlecont">
      <h3 className="my-0 text-center text-wrap">{eventinfo.event._def.title}</h3>
      <div className="detailcontainer">
      <img src={eventinfo.event._def.extendedProps.pic} alt=""/>
      </div>
      </div>

      <style jsx global>{`

        .fc-scroller.fc-scroller-liquid-absolute{
          overflow:visible;
        }

        .titlecont{
          position:relative;
        }

        .detailcontainer {
          display:block;
          position:absolute;
          bottom:100%;
          width:350px;


        }
        `}</style>
      </>
    )
  }

  useEffect(() => {
    setIsLoaded(true)
  },[])



  return (
    <div className="container">

    <NextSeo title={`${title} | MyPigeon`}
      canonical={process.env.NEXT_PUBLIC_SITE_URL+router.asPath}
      openGraph={{
    type: 'website',
    url: `${process.env.NEXT_PUBLIC_SITE_URL + router.asPath}`,
    title:`${title} | MyPigeon`,
    images: [
      {
        url:`${process.env.NEXT_PUBLIC_SITE_URL}/logo2.jpg`,
        width:1203,
        height:1200,
        alt: 'logo'
      }

    ],
    site_name: 'MyPigeon',
  }}
    />


  {/* Content */}
  <div className="margin-top">
    <div className="row">
      <div className=" col-md-12 ">
    {isloaded && <FullCalendar
      plugins={[dayGridPlugin]}
      locale={elLocale}
       defaultView='dayGridMonth'
      eventBackgroundColor="#e7f3e5"
  eventBorderColor="white"

  eventTextColor="black"
      events={[
  { title: 'nice event', start: new Date(),pic:"https://picsum.photos/150"}
]}

// eventContent={handleEventContent}

       />}


      </div>
    </div>
  </div>
</div>


  )

}

export default Eventpage

export async function getStaticProps() {
  // Fetch data from external API

var menu = await menuquery()






  // Pass data to the page via props
  return { props: { title:"Events",menu } }
}
