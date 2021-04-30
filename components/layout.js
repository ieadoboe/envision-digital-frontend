import Head from 'next/head'
import Nav from './nav'

const Layout = ({ children, categories, article }) => (
  <>
    <Head>
      <title>Envision Digital</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"
      />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js" />
      <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js" />
    </Head>
    <Nav categories={categories} />
    
    <Header navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">{children}</main>
    <Footer />
  </>
)

export default Layout
