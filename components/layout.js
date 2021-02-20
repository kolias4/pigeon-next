import { useRouter } from 'next/router'
import {useState,useEffect} from 'react'

import Footer from './footer'
import Header from './header'
import Header2 from './header2'
import Timer from './timer';
import fetcher from '../functions/fetcher';
import jfetcher from '../functions/jfetcher';

function Layout({children,data,title,bodyClass,menu}){

  const router = useRouter()

  const {pathname:path,asPath} = router

  const [nowdate,setNowDate]=useState(null)
  const [timeevent,setTimeEvent]=useState(null)




  useEffect(()=>{

    console.log("useeffetc layout")

    let url =`${process.env.NEXT_PUBLIC_STRAPI_URL}/nowdate`
    jfetcher({url:url,method:'GET',token:null}).then(res => {
      setNowDate(res)
    }).catch(err => console.log(err,"error"))

    let query = `
    query{
countDown{
 title
 end
 active
}
}
    `

    fetcher(query,{}).then(res => {

      if(res.countDown.active){
        setTimeEvent(res.countDown)

      }



    }).catch(err => console.log)



  },[])






  return (
    <div className={bodyClass}>
    {path === '/'?<Header menu={menu} />:<Header2 key={asPath} title={title} menu={menu}/>}
    <Timer kill={() => setTimeEvent(null)} now={nowdate} event={timeevent}/>
    <main>
    {children}
    </main>


    <Footer/>
    </div>

  )

}

export default Layout
