import dynamic from 'next/dynamic'
const Text = dynamic(() => import('../../axg-react/Text'), {ssr: false,})
const Button = dynamic(() => import('../../axg-react/Button'), {ssr: false,})
const Carousel = dynamic(() => import('../../axg-react/Carousel'), {ssr: false,})
const PostTemplate = dynamic(() => import('../PostTemplate'), {ssr: false,})

export default function Articles({posts}) {

  const postsList = posts.map((post, key) => {
    const date = new Date(post.date)
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];    
    return <PostTemplate
      key={key}
      postbg={'#fff'}
      image={post.thumbnail}
      customclasses={'carousel_item articlessize'}
      innerclasses={'carousel_inneritem round_l1 articlesinnersize'}
      title={post.title}
      link={post.link}
      date={`${date.getFullYear()} ${months[date.getMonth()]} ${date.getDate()}`}
    />
  })

  return (
    <>
      <section className="container vertical padding_l0 primary_bg">
        <section className="subcontainer horizontal righty padding_l3">
          {/* TODO: This icon has to be a left carrot, but since we ain't got any for now, i'm putting a random icon */}
          <Button
            text={'همه مقالات'}
            iconclasses={'secondary_bg round_l1 padding_l2 rexfont_init address-book rx_light'}
            innerclasses={'padding_l0'}
            size='large'
            bg={'#0000'}
            color={'#fff'}
            height='49px'
            plane={'1'}
            link={'/blog'}
          />
          <Text
            text={'مقالات ساینا'}
            innercustomclasses={'wide_important'}
            textcolor={'var(--primaryColor)'}
            textclasses={'nomargin textstrokeblue widePadding_l9'}
            textalign={'lefty'}
            textfontsize={'var(--l9-text-fontSize)'}
            subtext={'مقالات ساینا'}
            subtextcolor={'#fff'}
            subtextclasses={'subcontainer lefty nomargin wide abitoffthetop'}
            subtextalign={'righty'}
            subtextfontsize={'var(--l7-text-fontSize)'}
          />
        </section>

        <section className={'container wide'}>
          <Carousel
            fademode={'fade'}
            name={'articles'}
            carouselmode={'relative'}
            customstyle={"height: 170px;"}
            slidescovergap={0}
            contentclasses={'topy'}
            leftnav={'0'}
          >{postsList}</Carousel>
        </section>

      </section>
    </>
  )
}