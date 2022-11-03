import dynamic from 'next/dynamic'
const Text = dynamic(() => import('../../axg-react/Text'), {ssr: false,})
const Button = dynamic(() => import('../../axg-react/Button'), {ssr: false,})

export default function Footer() {
  const custombtn = (text, link, icon, classes) => <Button
    text={text}
    iconclasses={`font_l4 round_l1 rexfont_init ${icon}`}
    innerclasses={`padding_l2 padding_l0 ${classes}`}
    customclasses={'round_l1 rtl'}
    textclasses={'font_l2'}
    hovercolor={'#fff'}
    bg={'#0000'}
    color={'#9ca5af'}
    height='40px'
    plane={'1'}
    link={link}
  />

  const customTitle = title => <Text
    text={title}
    textcolor={'#fff'}
    textclasses={'subcontainer wide textright rtl'}
    textalign={'righty'}
    textfontsize={'var(--l5-text-fontSize)'}
    innercustomclasses={'wide_important'}
  />
  return (
    <section className={'container topy'} style={{backgroundColor: '#0a1229'}}>
      <section className={'subcontainer vertical lefty'}>
        {customTitle('شعار ساینا گسنر')}
        <Text
          text={'توضیحات اولیه شرکت ساینا گستر. توضیحات اولیه شرکت ساینا گستر .توضیحات اولیه شرکت ساینا گستر. توضیحات اولیه شرکت ساینا گستر.'}
          textcolor={'#9ca5af'}
          textclasses={'subcontainer nomargin wide textright rtl'}
          textalign={'righty'}
          textfontsize={'var(--l3-text-fontSize)'}
          innercustomclasses={'wide_important'}
        />
        {custombtn('شنبه - پنج شنبه', '/blog', 'address-book rx_light')}
      </section>
      <section className={'subcontainer vertical lefty'}>
        {customTitle('خدمات ساینا گستر')}
        {custombtn('مورد اول', '/blog')}
        {custombtn('مورد اول', '/blog')}
        {custombtn('مورد اول', '/blog')}
        {custombtn('مورد اول', '/blog')}
        {custombtn('مورد اول', '/blog')}
      </section>
      <section className={'subcontainer vertical lefty'}>
        {customTitle('اطلاعات دفتر ساینا')}
        {custombtn('مورد اول', '/blog', 'address-book rx_light')}
        {custombtn('مورد اول', '/blog', 'address-book rx_light')}
        {custombtn('مورد اول', '/blog', 'address-book rx_light')}
        {custombtn('مورد اول', '/blog', 'address-book rx_light')}
        {custombtn('مورد اول', '/blog', 'address-book rx_light')}
      </section>
    </section>
  )
}