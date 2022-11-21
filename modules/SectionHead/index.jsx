import dynamic from 'next/dynamic'

export default function SectionHead({title, btnTitle, btnLink, textcustomclasses, textcolor, subtextcolor}) {
  const Text = dynamic(() => import('../../axg-react/Text'), {ssr: false,})
  const Button = dynamic(() => import('../../axg-react/Button'), {ssr: false,})
  return (
    <>
      {/* TODO: This icon has to be a left carrot, but since we ain't got any for now, i'm putting a random icon */}
      <Button
      text={btnTitle}
      iconclasses={'secondary_bg round_l1 padding_l2 rexfont_init address-book rx_light'}
      innerclasses={'padding_l0'}
      size='large'
      bg={'#0000'}
      color={subtextcolor}
      plane={'1'}
      link={btnLink}
    />
    <Text
      text={title}
      innercustomclasses={'wide_important'}
      textcolor={textcolor}
      textclasses={`nomargin widePadding_l9 ${textcustomclasses}`}
      textalign={'lefty'}
      textfontsize={'var(--l9-text-fontSize)'}
      subtext={title}
      subtextcolor={subtextcolor}
      subtextclasses={'subcontainer lefty nomargin wide abitoffthetop'}
      subtextalign={'righty'}
      subtextfontsize={'var(--l7-text-fontSize)'}
    />
  </>
  )
}