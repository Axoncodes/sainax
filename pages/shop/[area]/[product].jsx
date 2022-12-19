import SubHeader from "../../../axg-react/SubHeader"
import ProductTemplate from "../../../modules/Product"
import { fetchposts } from "../../../lib/posts"

export default function Product({targetProduct}) {
  return (
    <section>
      <SubHeader
        top={"بررسی ویژگی ها"}
        mainTitle={"فروشگاه ساینا"}
        description={"توضیحات زیر صفحه"}
      />
      <ProductTemplate
        image={targetProduct.thumbnail ? targetProduct.thumbnail.src : null}
        name={{name:targetProduct.title, slug: targetProduct.slug}}
        description={targetProduct.excerpt}
        area={targetProduct.acf.order_area}
        price={targetProduct.acf.price.slug}
        currency={'تومان'}
      />
    </section>
  )
}

export async function getStaticPaths() {
  const paths = await fetchposts('product')
  .then(posts => posts.map(product => ({
    params: {
      product: product.slug,
      area: product.acf.order_area.slug,
    }
  })))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({params}) => {
  const { product } = params

  const targetProduct = await fetchposts('product')
  .then(products => products.filter(item => item.slug == product)[0])
  
  return {
    props: {targetProduct}
  }
}
