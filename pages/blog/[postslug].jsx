const Text = dynamic(() => import("../../axg-react/Text"), {ssr: false,})
import dynamic from "next/dynamic"
import SubHeader from "../../axg-react/SubHeader"
import { fetchposts } from "../../lib/posts"

export default function Product({targetpost}) {
  return (
    <section>
      <SubHeader
        top={"وبلاگ ساینا گستر"}
        mainTitle={targetpost.title}
        description={targetpost.excerpt}
      />
      <section className={'container rtl'}>
        <Text customclasses={'blogcontent'} text={targetpost.content} />
      </section>
    </section>
  )
}

export async function getStaticPaths() {
  const paths = await fetchposts('blog')
  .then(posts => posts.map(post => ({params: {postslug: post.slug}})))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({params}) => {
  const { postslug } = params
  const targetpost = await fetchposts('blog')
  .then(posts => posts.filter(post => post.slug == postslug)[0])
  return {props: {targetpost}}
}
