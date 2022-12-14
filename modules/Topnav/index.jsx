import dynamic from 'next/dynamic'

const Button = dynamic(() => import('../../axg-react/Button'), {ssr: false,})

export default function Topnav() {
  const custombtn = (text, link, icon, classes) => <Button
    text={text}
    iconclasses={`font_l3 round_l1 ${icon}`}
    innerclasses={`padding_l2 padding_l0 ${classes}`}
    customclasses={'highlightOnlyIconOnHover round_l1'}
    textclasses={'font_l1'}
    bg={'#0000'}
    color={'var(--primaryColor)'}
    height='49px'
    plane={'1'}
    link={link}
  />
  return (
    <section className={'container horizontal horizontalTabletBreak padding_l0 widePadding_l3'} style={{borderBottom: '1px solid #0001'}}>
      <section className={'subcontainer horizontal horizontalTabletBreak fitWidth'}>
        <section className={'subcontainer'}>{custombtn('info@sainax.com', 'mailto:info@sainax.com', 'fa-solid fa-square-envelope', 'hidetextontablet')}</section>
        <section className={'subcontainer'}>{custombtn('021-86044653', 'tel:02186044653', 'fa-solid fa-square-phone')}</section>
      </section>
      <section className={'subcontainer horizontal horizontalTabletBreak fitWidth'}>
        <section className={'subcontainer'}>{custombtn('', 'https://www.instagram.com/saina.gostar/', 'fa-brands fa-instagram-square', 'nocolgap')}</section>
        <section className={'subcontainer'}>{custombtn('', 'https://twitter.com/SainaGostar', 'fa-brands fa-twitter-square', 'nocolgap')}</section>
        <section className={'subcontainer'}>{custombtn('', 'https://www.linkedin.com/company/saina-gostar/', 'fa-brands fa-linkedin', 'nocolgap')}</section>
      </section>
    </section>
  )
}