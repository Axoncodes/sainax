import dynamic from "next/dynamic";
import Head from "next/head";

const Hero = dynamic(() => import("../axg-react/modules/v1/Hero"), {ssr: false})
const Text = dynamic(() => import("../axg-react/Text"), {ssr: false})
const Button = dynamic(() => import('../axg-react/Button'), {ssr: false,})

export default function Contactus() {
  const custombtn = (text, link, icon, classes) => <Button
    text={text}
    iconclasses={icon ? `font_l4 round_l1 rexfont_init ${icon}` : ''}
    innerclasses={`padding_l2 padding_l0 ${classes}`}
    customclasses={'round_l1 rtl'}
    textclasses={'font_l2'}
    hovercolor={'var(--primaryTextColor)'}
    bg={'#0000'}
    color={'var(--secondaryTextColor)'}
    height='40px'
    plane={'1'}
    link={link}
  />

  const customTitle = title => <Text
    text={title}
    textcolor={'var(--primaryTextColor)'}
    textclasses={'subcontainer wide textcenter center rtl'}
    textalign={'center'}
    textfontsize={'var(--l5-text-fontSize)'}
    innercustomclasses={'wide_important'}
  />
  return (
    <>
      <Head>
        <title>ساینا گستر | ارتباط با ساینا</title>
      </Head>
      <Hero
        title={'ارتباط با ساینا'}
        subtitle={'توضیحات درباره سرویس ها و محصولات ساینا'}
      />
      <section className={'container topy horizontal padding_l9'} >
        <section className={'subcontainer vertical norowgap'}>
          {customTitle('دفتر ها')}
          {custombtn('مورد اول', '/blog')}
          {custombtn('مورد اول', '/blog')}
          {custombtn('مورد اول', '/blog')}
          {custombtn('مورد اول', '/blog')}
          {custombtn('مورد اول', '/blog')}
        </section>
        <section className={'subcontainer vertical norowgap'}>
          {customTitle('شماره های تماس')}
          {custombtn('مورد اول', '/blog', 'address-book rx_light')}
          {custombtn('مورد اول', '/blog', 'address-book rx_light')}
          {custombtn('مورد اول', '/blog', 'address-book rx_light')}
          {custombtn('مورد اول', '/blog', 'address-book rx_light')}
          {custombtn('مورد اول', '/blog', 'address-book rx_light')}
        </section>
        <section className={'subcontainer vertical norowgap'}>
          {customTitle('ایمیل ها')}
          {custombtn('مورد اول', '/blog', 'address-book rx_light')}
          {custombtn('مورد اول', '/blog', 'address-book rx_light')}
          {custombtn('مورد اول', '/blog', 'address-book rx_light')}
          {custombtn('مورد اول', '/blog', 'address-book rx_light')}
          {custombtn('مورد اول', '/blog', 'address-book rx_light')}
        </section>
      </section>
    </>
  )
}
