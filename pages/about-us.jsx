import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";

const Hero = dynamic(() => import("../modules/Hero"), {ssr: false})
const Text = dynamic(() => import("../axg-react/Text"), {ssr: false})

export default function Aboutus() {
  return (
    <>
      <Head>
        <title>ساینا گستر | درباره ساینا</title>
      </Head>
      <Hero
        title={'درباره ساینا'}
        subtitle={'توضیحات درباره سرویس ها و محصولات ساینا'}
      />
      <section className={'container horizontal rtl'} >
        <section className={'subcontainer'} style={{display: 'block', maxWidth: '300px'}}>
          <Image className={'round_l1'} layout="responsive" width="100" height="100" src={'/images/siman1.jpeg'} alt="" />
        </section>
        
        <section className={'subcontainer'}>
          <Text text={'متن توضیحات امیر الله امیری😂😂...'} />
        </section>
      </section>
    </>
  )
}
