import '../axg-react/global.scss'
import '../styles/globals.css'
import Head from 'next/head'
import MetaTags from '../axg-react/MetaTags'
import Script from 'next/script'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('../axg-react/Header'), {ssr: false,})

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

      <Header
        searchbar={false}
        SearchbarPlaceholder={"محصول خود را جستجو کنید"}
        menuItems={[
          {name: 'خانه', uri: '/', color: 'var(--primaryColor)', activeColor: 'var(--tertiaryTextColor)', activeBg: 'var(--secondaryColor)'},
          {name: 'فروشگاه', uri: '/shop', color: 'var(--primaryColor)', activeColor: 'var(--tertiaryTextColor)', activeBg: 'var(--secondaryColor)'},
          {name: 'درباره ساینا', uri: '/about', color: 'var(--primaryColor)', activeColor: 'var(--tertiaryTextColor)', activeBg: 'var(--secondaryColor)'},
          {name: 'تماس با ما', uri: '/contact', color: 'var(--primaryColor)', activeColor: 'var(--tertiaryTextColor)', activeBg: 'var(--secondaryColor)'},
          {name: 'وبلاگ', uri: '/blog', color: 'var(--primaryColor)', activeColor: 'var(--tertiaryTextColor)', activeBg: 'var(--secondaryColor)'},
        ]}
        
      />

      <main style={{overflow: 'hidden', flex: 1}}>
        <Component {...pageProps} />
      </main>

      <Script type='module' src={`${process.env.StagingAxg}/init/v4`} strategy="beforeInteractive" />
      <Script src={`${process.env.Axg}/dropdown/v3/script`} strategy="lazyOnload" />
      <Script src={`${process.env.Axg}/searchbarTemplateJs`} strategy="lazyOnload" />
      <Script src={`${process.env.Axg}/searchbarJs`} strategy="lazyOnload" />
    </>
  )
}
