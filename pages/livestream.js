// import Link from 'next/link';
import { useRouter } from 'next/router'
// import { Card } from 'react-bootstrap';
import Seo from '../components/Seo';
// import dateShow from '../../functions/date/dateShow';
import ReactPlayer from 'react-player'

import fetcher from '../functions/fetcher'
import menuquery from '../functions/queries/menuquery'
// import { socket } from '../lib/socket';
// import { useEffect } from 'react';




function LiveStream({data,title}){

  const router = useRouter()

  // useEffect(() => {
  //   socket.connect();
  //   socket.on('bid2', (data) => {
  //     console.log("Welcome event inside JoinRoom", data);
  //     console.log("socket")
      
  // });

  // return () => {
  //   socket.removeAllListeners("bid2");
  //   socket.disconnect();
  // }

  

  // },[])

  if(!data.livestream){
    return (
      <div className="container">
        <Seo title="Live Stream | Ταχυδρομικά Περιστέρια | MyPigeon"
      description="Live Stream ταχυδρομικών περιστεριών"
      pageurl={process.env.NEXT_PUBLIC_SITE_URL + router.asPath}
    />
        <h3>Δεν υπάρχει ζωντανή αναμετάδωση </h3>
      </div>
    )
  }



  return (
    <div className="container">
      <Seo title="Live Stream | Ταχυδρομικά Περιστέρια | MyPigeon"
      description="Live Stream ταχυδρομικών περιστεριών"
      pageurl={process.env.NEXT_PUBLIC_SITE_URL + router.asPath}
    />

    <h3 className="text-center">{data.livestream.title}</h3>

    <div className='player-wrapper'>
                               
                                    <ReactPlayer
                                        className='react-player'
                                        muted={true}
                                        playing={true}
                                        controls={false}
                                        loop={false}
                                        url={data.livestream.videolink}
                                        width='100%'
                                        height='100%'
                                    />
                               
                            </div>

</div>


  )

}

export default LiveStream

export async function getStaticProps() {
  // Fetch data from external API



  var nquery = `
  query {
    livestream{
     title
     videolink
     
   }
   }
 
   `

  var menu = await menuquery()
  const data = await fetcher(nquery,{},process.env.STRAPI_ADMIN_TOKEN)


  // Pass data to the page via props
  return { props: { data,title:"Live Stream",menu },revalidate:30 }
}
