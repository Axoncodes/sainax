import Carousel from '../../axg-react/Carousel'
import PostTemplate from '../PostTemplate'
import SectionHead from '../SectionHead'

export default function Articles({posts}) {

  const postsList = posts.map((post, key) => <PostTemplate
    key={key}
    postbg={'#fff'}
    image={post.thumbnail || null}
    customclasses={'carousel_item articlessize'}
    innerclasses={'carousel_inneritem articlesinnersize productsListBorder'}
    title={post.title}
    link={`/shop/${post.acf.order_area.slug}/${post.slug}`}
  />)

  return (
    <>
      <section className="container vertical padding_l0">
        <section className="subcontainer horizontal righty padding_l3 horizontalTabletBreak">
          <SectionHead
            title={'محصولات ساینا'}
            btnTitle={'همه محصولات'}
            btnLink={'/shop'}
            textcolor={'var(--primaryColor)'}
            subtextcolor={'var(--primaryColor)'}
          />
        </section>
        <section className={'container wide horizontal'}>{postsList}</section>
      </section>
    </>
  )
}