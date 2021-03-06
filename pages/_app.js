import '../styles/alogosite/bootstrap-grid.css'
import '../styles/alogosite/font-awesome.min.css'
import '../styles/alogosite/inline.css'
import '../styles/alogosite/js_composer.min.css'
import '../styles/alogosite/plugins.css'
import '../styles/alogosite/style.css'
import "../styles/alogosite/woocommerce.css"
import '../styles/globals.scss'
// import '../styles/calendar.scss'
import '@fullcalendar/common/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'
// import "animate.css"


import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import{ useState,useEffect } from 'react';

import {UiContext,AppContext} from '../context/context'
import Layout from '../components/layout'
import MyToast from '../components/modals/mytoast';
import fetcher from '../functions/fetcher';
import Preloader from '../components/Preloader'










function MyApp({ Component, pageProps }) {

  const [toaster,setToaster] = useState({
    show:false,
    message:'',
    success:false,
    fail:false
  })

  const [user,setUser]= useState(null)

  const [preloader,setPreloader] = useState(true)

  const router = useRouter()
useEffect(() => {
  const handleRouteChange = (url) => {
    gtag.pageview(url)
  }
  router.events.on('routeChangeComplete', handleRouteChange)
  return () => {
    router.events.off('routeChangeComplete', handleRouteChange)
  }
}, [router.events])

  useEffect(() => {
   setTimeout(()=>{
    setPreloader(false)
   
   },1000)

    let token = localStorage.getItem('usertoken')
    if(token){
      let query =`
      query{
me{
  username
  email
  id
  phone
  
}
}
      `
      token = JSON.parse(token)

      console.log(token,"token")

      fetcher(query,{},token).then(res => {
        setUser(res.me)
      }).catch(err => {
        console.log(err)
        localStorage.removeItem('usertoken')
      })



    }

  },[])

  return (
    <AppContext.Provider value={{user,setUser}}>
    <UiContext.Provider value={{setToaster}}>
    <MyToast show={toaster.show} closefunc={() => setToaster({show:false})} message={toaster.message} fail={toaster.fail} success={toaster.success}/>
    {preloader?<Preloader/>:null}
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
    </UiContext.Provider>
    </AppContext.Provider>

  )
}

export default MyApp
