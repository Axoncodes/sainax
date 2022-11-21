import dynamic from 'next/dynamic'
const Carousel = dynamic(() => import('../../axg-react/Carousel'), {ssr: false,})
const PostTemplate = dynamic(() => import('../PostTemplate'), {ssr: false,})
const SectionHead = dynamic(() => import('../SectionHead'), {ssr: false,})

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
          <SectionHead
            title={'مقالات ساینا'}
            btnTitle={'همه مقالات'}
            btnLink={'/blog'}
            textcustomclasses={'textstrokeblue'}
            textcolor={'var(--primaryColor)'}
            subtextcolor={'#fff'}
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