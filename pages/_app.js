



import '../styles/alogosite/bootstrap-grid.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/alogosite/plugins.css'
import '../styles/alogosite/style.css'

import '../styles/alogosite/inline.css'
import '../styles/alogosite/js_composer.min.css'
import '../styles/alogosite/font-awesome.min.css'
import '../styles/globals.css'
import Layout from '../components/layout'









function MyApp({ Component, pageProps,blogcats }) {
  return (
    <Layout>
    <Component {...pageProps} />
    </Layout>

  )
}

export default MyApp
