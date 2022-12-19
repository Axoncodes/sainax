import dynamic from "next/dynamic";
import Head from "next/head";
import { fetchposts } from "../lib/posts";

const Hero = dynamic(() => import("../modules/Hero"), {ssr: false})
const PostTemplate = dynamic(() => import('../modules/PostTemplate'), {ssr: false,})

export default function Blog({posts}) {
  const postsList = posts.map((post, key) => {
    const date = new Date(post.date)
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];    
    return <PostTemplate
      key={key}
      postbg={'#fff'}
      image={post.thumbnail}
      customclasses={'fitWidth articlessize'}
      innerclasses={'round_l1 articlesinnersize'}
      title={post.title}
      link={`/blog/${post.slug}`}
      date={`${date.getFullYear()} ${months[date.getMonth()]} ${date.getDate()}`}
    />
  })
  return (
    <>
      <Head>
        <title>ساینا گستر | وبلاگ ساینا</title>
      </Head>
      <Hero
        title={'وبلاگ ساینا'}
        subtitle={'توضیحات درباره سرویس ها و محصولات ساینا'}
      />
      <section className={'container subcontainer centerMarge'}>{postsList}</section>
    </>
  )
}

export const getStaticProps = async () => {
  const posts = await fetchposts('blog')
  return {
    props: {posts}
  }
}
