import dynamic from 'next/dynamic'

const Button = dynamic(() => import('../../axg-react/Button'), {ssr: false,})

export default function Topnav() {
  const custombtn = (text, link, icon, classes) => <Button
    text={text}
    iconclasses={`font_l3 round_l1 rexfont_init ${icon}`}
    innerclasses={`padding_l2 padding_l0 ${classes}`}
    customclasses={'round_l1'}
    textclasses={'font_l1'}
    bg={'#0000'}
    color={'var(--primaryColor)'}
    height='49px'
    plane={'1'}
    link={link}
  />
  return (
    <section className={'container horizontal padding_l0 widePadding_l3'} style={{borderBottom: '1px solid #0001'}}>
      <section className={'subcontainer horizontal fitWidth'}>
        <section className={'subcontainer'}>{custombtn('+(123) 1234-567-8901', '/blog', 'address-book rx_light', '')}</section>
        <section className={'subcontainer'}>{custombtn('wilmer@qodeinteractive.com', '/blog', 'address-book rx_light', '')}</section>
        <section className={'subcontainer'}>{custombtn('شنبه - پنج شنبه', '/blog', 'address-book rx_light', '')}</section>
      </section>
      <section className={'subcontainer horizontal fitWidth'}>
        <section className={'subcontainer'}>{custombtn('', '/blog', 'address-book rx_light', 'nocolgap')}</section>
        <section className={'subcontainer'}>{custombtn('', '/blog', 'address-book rx_light', 'nocolgap')}</section>
        <section className={'subcontainer'}>{custombtn('', '/blog', 'address-book rx_light', 'nocolgap')}</section>
      </section>
    </section>
  )
}