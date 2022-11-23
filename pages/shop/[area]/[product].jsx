import SubHeader from "../../../axg-react/SubHeader"
import ProductTemplate from "../../../axg-react/shop/Product"
import { fetchposts } from "../../../lib/posts"

export default function Product({targetProduct}) {
  return (
    <section className={'rtl'}>
      <SubHeader
        top={"بررسی ویژگی ها"}
        mainTitle={"فروشگاه ساینا"}
        description={"توضیحات زیر صفحه"}
      />
      <ProductTemplate
        image={targetProduct.thumbnail.src}
        name={targetProduct.title}
        description={targetProduct.excerpt}
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
