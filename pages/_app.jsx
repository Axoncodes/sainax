import '../styles/globals.css'
import Header from '../modules/Header'
import Head from 'next/head'
import Script from 'next/script'
import Menu from '../components/Menu'
import { useEffect, useState } from 'react'
import { loadScript } from '../lib/script'


export default function MyApp({ Component, pageProps }) {
  
  // Search functionality

  const [all_posts_names, setAll_posts_names] = useState([])
  const [all_posts_links, setAll_posts_links] = useState([])
  useEffect(() => {
    serachHandler()
  }, [])
  
  useEffect(() => {
    window['all_posts_names'] = all_posts_names;
    window['all_posts_links'] = all_posts_links;
  }, [all_posts_names, all_posts_links])
  
  const serachHandler = async () => {
    const icons = await fetch(`${process.env.RexfontAPI}/icons/`).then(res => res.json())
    setAll_posts_names(icons.map(icon => icon.name))
    setAll_posts_links(icons.map(icon => `/icons/${icon.name}/${icon.style}`))
  }

  useEffect(() => {
    loadScript(`${process.env.Axg}/activationHandler/index.js`)
    .then(() => 
    !activationHandlerLoaded && activationHandler.init())
  }, [])


  return (
    <>
      <Head>
        <title>sainaX</title>
        <link rel="icon" href="/images/logo.png" />
        <link rel="stylesheet" href={`${process.env.Axg}/searchbar/template/style.css`} />
        <link rel="stylesheet" href={`${process.env.Axg}/dropdown/assets/css/style.css`} />
        <link rel="stylesheet" href={`${process.env.RexfontAPI}/font/all.css`} />
        <link rel="stylesheet" href={`${process.env.Axg}/assets/css/fontVars.css`} />
        <link rel="stylesheet" href={`${process.env.Axg}/assets/css/colorVars.css`} />
        <link rel="stylesheet" href={`${process.env.Axg}/assets/css/header.css`} />
        <link rel="stylesheet" href={`${process.env.Axg}/activationHandler/style.css`} />
      </Head>
      <main>
        <axg-element
          mode="header"
          logosrc="/images/logo.png"
          logolink="/"
          searchplaceholder="...جستجو کنید"
        >
          <Menu menuItems={[
            {name: 'خانه', uri: '/'},
            {name: 'محصولات', uri: '/products'},
          ]} />
        </axg-element>

        <axg-element mode="nav">
          <Menu menuItems={[
            {name: 'سیمان یک', uri: '/'},
            {name: 'سیمان دو', uri: '/products'},
            {name: 'سیمان سه', uri: '/products'},
            {name: 'سیمان چهار', uri: '/products'},
          ]} />
        </axg-element>
        <Component {...pageProps} />
      </main>
      <Script src={`${process.env.Axg}/registery-v2.js`} />
      <Script src={`${process.env.Axg}/dropdown/FuncLibrary-v2.js`} />
      <Script src={`${process.env.Axg}/searchbar/template/main.js`} strategy="lazyOnload" />
      <Script src={`${process.env.Axg}/searchbar/script/script.js`} strategy="lazyOnload" />
    </>
  )
}
