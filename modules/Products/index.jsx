import dynamic from 'next/dynamic'
const Text = dynamic(() => import('../../axg-react/Text'), {ssr: false,})
const Button = dynamic(() => import('../../axg-react/Button'), {ssr: false,})
const Carousel = dynamic(() => import('../../axg-react/Carousel'), {ssr: false,})
const PostTemplate = dynamic(() => import('../PostTemplate'), {ssr: false,})
const SectionHead = dynamic(() => import('../SectionHead'), {ssr: false,})

export default function Articles({posts}) {

  const postsList = posts.map((post, key) => <PostTemplate
    key={key}
    postbg={'#fff'}
    image={post.thumbnail}
    customclasses={'carousel_item articlessize'}
    innerclasses={'carousel_inneritem articlesinnersize productsListBorder'}
    title={post.title}
    link={post.link}
    date={'محصولات ساینا را بررسی کنید'}
  />)

  return (
    <>
      <section className="container vertical padding_l0">
        <section className="subcontainer horizontal righty padding_l3">
          <SectionHead
            title={'محصولات ساینا'}
            btnTitle={'همه محصولات'}
            btnLink={'/shop'}
            textcustomclasses={'textstrokewhite'}
            textcolor={'#fff'}
            subtextcolor={'var(--primaryColor)'}
          />
          {/* <Button
            text={''}
            iconclasses={'tertiary_color secondary_bg round_l1 padding_l2 rexfont_init address-book rx_light'}
            innerclasses={'padding_l0'}
            size='large'
            bg={'#0000'}
            color={'var(--primaryColor)'}
            height='49px'
            plane={'1'}
            link={'/shop'}
          />
          <Text
            text={'محصولات ساینا'}
            innercustomclasses={'wide_important'}
            textcolor={'#fff'}
            textclasses={'nomargin textstrokewhite widePadding_l9'}
            textalign={'lefty'}
            textfontsize={'var(--l9-text-fontSize)'}
            subtext={'محصولات ساینا'}
            subtextcolor={'var(--primaryColor)'}
            subtextclasses={'subcontainer lefty nomargin wide abitoffthetop'}
            subtextalign={'righty'}
            subtextfontsize={'var(--l7-text-fontSize)'}
          /> */}
        </section>

        <section className={'container wide'}>
          <Carousel
            fademode={'fade'}
            name={'articles'}
            carouselmode={'relative'}
            customstyle={"height: 100px;"}
            slidescovergap={0}
            contentclasses={'topy'}
            leftnav={'0'}
          >{postsList}</Carousel>
        </section>

      </section>
    </>
  )
}