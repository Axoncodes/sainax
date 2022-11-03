import dynamic from "next/dynamic";
import Head from "next/head";

const Articles = dynamic(() => import("../modules/articles"), {ssr: false})
const Accordions = dynamic(() => import("../modules/Accordions"), {ssr: false})
const Products = dynamic(() => import("../modules/Products"), {ssr: false})
const Hero = dynamic(() => import("../modules/Hero"), {ssr: false})

export default function Home({posts}) {
  return (
    <>
      <Head>
        <title>ساینا گستر | خانه</title>
      </Head>
      <Hero />
      <Products posts={filterPostsByCategory(posts, 'product')} />
      <Articles posts={filterPostsByCategory(posts, 'blog')} />
      <Accordions posts={filterPostsByCategory(posts, 'accordion')} />
    </>
  )
}

function filterPostsByCategory(posts, targetCategory) {
  return posts.filter(post => post.categories.map(cat => cat.name.toLowerCase() == targetCategory.toLowerCase()).filter(item => item == true).length > 0)
}

export const getStaticProps = async () => {
  
  const extractThumbnailData = async (media_url) => {
    if (!media_url) return null
    return fetch(media_url)
    .then(res => res.json())
    .then(data => ({
      src: data.source_url,
      alt: data.alt_text,
    }))
  }
  
  const categoriesList = []
  await fetch('http://localhost/sainaxFaBlog/wp-json/wp/v2/categories')
  .then(res => res.json())
  .then(categories => categories.forEach(category => {
    categoriesList[category.id] = {
      name: category.name,
      slug: category.slug,
    }
  }))
  
  const posts = await fetch(`http://localhost/sainaxFaBlog/wp-json/wp/v2/posts`)
  .then(res => res.json())
  .then(async posts => await Promise.all(posts.map(async post => ({
    link: post.link,
    title: post.title.rendered,
    content: post.content.rendered,
    categories: post.categories.map(catId => categoriesList[catId]),
    excerpt: post.excerpt.rendered,
    date: post.date,
    thumbnail: await extractThumbnailData(post._links["wp:featuredmedia"] ? post._links["wp:featuredmedia"][0].href : null)
  }))))
  
  return {
    props: {posts}
  }
}
