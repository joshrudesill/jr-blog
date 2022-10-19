import '../styles/globals.css'
import 'bulma'
import Nav from '../components/nav'
import Script from 'next/script'
import Footer from '../components/footer'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>JRudesill Blog</title>
    </Head>
    <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-YSRHMFEJ17`} />

    <Script strategy="afterInteractive" id='gtag'>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YSRHMFEJ17');
        `}
    </Script>
      <Nav />
      <Component {...pageProps} />
      <Footer />
      <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
      <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
    </>
  )
}

export default MyApp
