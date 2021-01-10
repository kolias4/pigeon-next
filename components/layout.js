import Header from './header'
import Header2 from './header2'
import { useRouter } from 'next/router'

import Footer from './footer'

function Layout({children,data,title}){

  const router = useRouter()

  const path = router.pathname

  return (
    <div>
    {path === '/'?<Header menu={data && data.menu || []} />:<Header2 title={title} menu={data && data.menu || []}/>}
    <main>
    {children}
    </main>
    <Footer/>
    </div>

  )

}

export default Layout
