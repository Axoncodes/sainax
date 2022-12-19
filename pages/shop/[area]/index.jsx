import dynamic from "next/dynamic";
import Head from "next/head";
import { fetchposts } from "../../../lib/posts";

const Hero = dynamic(() => import("../../../modules/Hero"), {ssr: false})
const PostTemplate = dynamic(() => import('../../../modules/PostTemplate'), {ssr: false,})

export default function Area({posts}) {
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
      link={`/shop/${post.acf.order_area.slug}/${post.slug}`}
      date={`${date.getFullYear()} ${months[date.getMonth()]} ${date.getDate()}`}
    />
  })
  return (
    <>
      <Head>
        <title>ساینا گستر | فروشگاه ساینا | {posts[0].acf.order_area.name}</title>
      </Head>
      <Hero
        title={'فروشگاه ساینا'}
        subtitle={'توضیحات درباره سرویس ها و محصولات ساینا'}
      />
      <section className={'container subcontainer centerMarge'}>
        {postsList}
      </section>
    </>
  )
}


export async function getStaticPaths() {
    const paths = await fetchposts('product')
    .then(products => products.map(product => product.acf.order_area.slug))
    .then(areas => areas.map(area => ({params: {area}})))
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async ({params}) => {
    const { area } = params
  
    const posts = await fetchposts('product')
    .then(products => products.filter(item => item.acf.order_area.slug == area))
    
    return {
      props: {posts}
    }
  }
  