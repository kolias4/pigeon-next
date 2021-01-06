import Header from './header'
import Header2 from './header2'
import { useRouter } from 'next/router'

import Footer from './footer'

function Layout({children,data}){

  const router = useRouter()

  const path = router.pathname

  return (
    <div>
    {path === '/'?<Header menu={data.menu} />:<Header2 menu={data.menu}/>}
    <main>
    {children}
    </main>
    <Footer/>
    </div>

  )

}

export default Layout
