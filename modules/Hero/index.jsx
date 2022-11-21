import dynamic from 'next/dynamic'
const Text = dynamic(() => import('../../axg-react/Text'), {ssr: false,})
const Button = dynamic(() => import('../../axg-react/Button'), {ssr: false,})

export default function Hero({title, subtitle}) {
  return (
    <section
      className="container vertical lefty"
      style={{
        backgroundColor: '#fff',
        backgroundImage: 'url(/images/christopher-gower-m_HRfLhgABo-unsplash-3.jpg)',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundBlendMode: 'darken',
        backgroundColor: '#0000004d'
      }}
    >
      <section className="subcontainer vertical lefty">
        <Text
          text={title}
          textcolor={'#fff'}
          textclasses={'subcontainer lefty nomargin wide'}
          textalign={'lefty'}
          textfontsize={'var(--l9-text-fontSize)'}
          innercustomclasses={'wide_important'}
        />
        <Text
          text={subtitle}
          textcolor={'#e0e0e0'}
          textclasses={'subcontainer nomargin wide textright rtl'}
          textalign={'righty'}
          textfontsize={'var(--l4-text-fontSize)'}
          innercustomclasses={'wide_important'}
          customclasses={'paragraphAtHero'}
        />
      </section>
      <section className='subcontainer horizontal lefty horizontalTabletBreak'>
        <Button
          text={'همه محصولات'}
          innerclasses={'padding_l0 widePadding_l3 round_l1'}
          size={'large'}
          customclasses={'rtl'}
          bg={'var(--primaryColor)'}
          color={'#fff'}
          height={'48px'}
          plane={'1'}
          link={'/shop'}
        />
        <Button
          text={'همه مقالات'}
          innerclasses={'padding_l0 widePadding_l3 round_l1'}
          size={'large'}
          customclasses={'rtl'}
          bg={'var(--secondaryColor)'}
          color={'#fff'}
          height={'48px'}
          plane={'1'}
          link={'/blog'}
        />
      </section>
    </section>
  )
}