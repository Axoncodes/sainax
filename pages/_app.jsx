import '../styles/globals.css'
import Head from 'next/head'
import { axgCdnHAndler } from '../lib/script'
import MetaTags from '../axg-react/MetaTags'

export default function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <MetaTags
          description = "sainax description"
          href = "https://fa.sainax.com"
          title = "ساینا گستر"
          ico = "/images/circle logo.png"
          locale = "fa"
        />
        
      </Head>
      <Component {...pageProps} />
    </>
  )
}
