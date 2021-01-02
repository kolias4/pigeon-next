import Header from './header'
import Header2 from './header2'
import { useRouter } from 'next/router'

import Footer from './footer'

function Layout({children}){

  const router = useRouter()

  const path = router.pathname

  return (
    <div>
    {path === '/'?<Header/>:<Header2/>}
    <main>
    {children}
    </main>
    <Footer/>
    </div>

  )

}

export default Layout
