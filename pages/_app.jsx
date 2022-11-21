import '../axg-react/global.scss'
import '../styles/globals.css'
import Head from 'next/head'
import MetaTags from '../axg-react/MetaTags'
import Script from 'next/script'
import dynamic from 'next/dynamic'
import ActivationHandler from '../axg-react/ActivationHandler'

const Header = dynamic(() => import('../modules/Header'), {ssr: false,})
const Topnav = dynamic(() => import('../modules/Topnav'), {ssr: false,})
const Footer = dynamic(() => import('../modules/Footer'), {ssr: false,})

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <MetaTags
          description = "sainax description"
          href = "https://fa.sainax.com"
          ico = "/images/circle logo.png"
          locale = "fa"
        />
      </Head>
      <Script src={'/head.js'} strategy="beforeInteractive" />
      <Topnav />
      <Header />

      <main style={{overflow: 'hidden', flex: 1}}>
        <Component {...pageProps} />
      </main>
      <Footer />
      <ActivationHandler />
      <Script type='module' src={`${process.env.BetaAxg}/init/v4`} strategy="beforeInteractive" />
      <Script type='module' src={`${process.env.BetaAxg}/global/runScripts`} strategy="lazyOnload" />
    </>
  )
}