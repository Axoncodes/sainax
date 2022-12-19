import dynamic from 'next/dynamic'

export default function SectionHead({title, btnTitle, btnLink, textcustomclasses, textcolor, subtextcolor}) {
  const Text = dynamic(() => import('../../axg-react/Text'), {ssr: false,})
  const Button = dynamic(() => import('../../axg-react/Button'), {ssr: false,})
  return (
    <>
      {/* TODO: This icon has to be a left carrot, but since we ain't got any for now, i'm putting a random icon */}
      {btnTitle ? <Button
      text={btnTitle}
      iconclasses={'tertiary_color secondary_bg round_l1 padding_l2 fa-solid fa-pallet-boxes'}
      innerclasses={'padding_l0'}
      size='large'
      bg={'#0000'}
      color={subtextcolor}
      plane={'1'}
      link={btnLink}
    /> : ''}
    <Text
      text={title}
      innercustomclasses={'wide_important'}
      textcolor={textcolor}
      textclasses={`nomargin ${textcustomclasses}`}
      textalign={'righty'}
      textfontsize={'var(--l7-text-fontSize)'}
    />
  </>
  )
}