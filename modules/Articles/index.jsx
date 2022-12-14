import Carousel from "../../axg-react/Carousel";
import PostTemplate from "../PostTemplate";
import SectionHead from "../SectionHead";

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
      link={`/blog/${post.slug}`}
      date={`${date.getFullYear()} ${months[date.getMonth()]} ${date.getDate()}`}
    />
  })

  return (
    <>
      <section className="container vertical padding_l0 primary_bg">
        <section className="subcontainer horizontal righty padding_l3">
          <SectionHead
            title={'آخرین مطالب ساینا گستر'}
            btnTitle={'همه مقالات'}
            btnLink={'/blog'}
            textcolor={'#fff'}
          />
        </section>
        <section className={'container wide'}>{postsList}</section>
      </section>
    </>
  )
}