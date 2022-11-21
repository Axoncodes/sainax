import Image from '../../axg-react/Image'
import Text from '../../axg-react/Text'
import Button from '../../axg-react/Button'

export default function PostTemplate({
  image,
  customclasses='',
  innerclasses='',
  postbg='#0000',
  title,
  link,
  date,
  customstyles={},
  innercustomstyles={},
}) {
  return (
    <section style={customstyles} className={`${customclasses} subcontainer vertical`}>
      <section style={{backgroundColor: postbg, ...innercustomstyles}} className={`${innerclasses} subcontainer vertical`}>
        {image && image.src ? <Image
          src={image.src}
          sizes={image.sizes}
          loading={image.loading}
          id={image.id}
          alt={image.alt}
          customclasses={'round_l1'}
        /> : ''}
        <section className="subcontainer vertical padding_l4 widePadding_l7 righty rtl">
          <Text
            subtext={title}
            subtextclasses={`nomargin weight_l9`}
            subtextcolor={'#001659'}
            subtextfontsize={'var(--l6-text-fontSize)'}
            text={date}
            textcolor={'#565969'}
            textfontsize={'var(--l2-text-fontSize)'}
            textclasses={`nomargin`}
            customclasses={'topy'}
            subtextalign={'righty'}
            textalign={'righty'}
          />
          {/* shoudl be a plus icon! */}
          <Button
            text={'مشاهده جزئیات'}
            iconclasses={'font_l5 round_l1 padding_l2 rexfont_init address-book rx_light'}
            innerclasses={'padding_l0'}
            customclasses={'nohovershadow highlightIconOnHover rtl'}
            size='large'
            bg={'#0000'}
            color={'#001659'}
            plane={'1'}
            link={link}
          />

        </section>
      </section>
    </section>
  )
}