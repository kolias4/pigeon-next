import Header from './header'
import Header2 from './header2'
import { useRouter } from 'next/router'

import Footer from './footer'

function Layout({children,data,title,bodyClass,menu}){

  const router = useRouter()

  const {pathname:path,asPath} = router




  return (
    <div className={bodyClass}>
    {path === '/'?<Header menu={menu} />:<Header2 key={asPath} title={title} menu={menu}/>}
    <main>
    {children}
    </main>
    <Footer/>
    </div>

  )

}

export default Layout
