import dynamic from "next/dynamic";
import Head from "next/head";
import { fetchposts, filterPostsByCategory } from "../lib/posts";

const Articles = dynamic(() => import("../axg-react/modules/v1/articles"), {ssr: false})
const Accordions = dynamic(() => import("../axg-react/modules/v1/Accordions"), {ssr: false})
const Products = dynamic(() => import("../axg-react/modules/v1/Products"), {ssr: false})
const Hero = dynamic(() => import("../axg-react/modules/v1/Hero"), {ssr: false})

export default function Home({posts}) {
  return (
    <>
      <Head>
        <title>ساینا گستر | خانه</title>
      </Head>

      <Hero
        title={'محصولات ساینا'}
        subtitle={'توضیحات اولیه شرکت ساینا گستر. توضیحات اولیه شرکت ساینا گستر .توضیحات اولیه شرکت ساینا گستر. توضیحات اولیه شرکت ساینا گستر.'}
      />
      <Products posts={filterPostsByCategory(posts, 'product')} />
      <Articles posts={filterPostsByCategory(posts, 'blog')} />
      <Accordions posts={filterPostsByCategory(posts, 'accordion')} />
    </>
  )
}
export const getStaticProps = async () => {
  const posts = await fetchposts()
  return {
    props: {posts}
  }
}