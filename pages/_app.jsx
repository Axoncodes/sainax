import '../axg-react/global.scss'
import '../styles/globals.css'
import Head from 'next/head'
import MetaTags from '../axg-react/MetaTags'
import Script from 'next/script'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('../modules/Header'), {ssr: false,})

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

      <Header />

      <main style={{overflow: 'hidden', flex: 1}}>
        <Component {...pageProps} />
      </main>

      <Script type='module' src={`${process.env.LocalAxg}/init/v4`} strategy="beforeInteractive" />
    </>
  )
}