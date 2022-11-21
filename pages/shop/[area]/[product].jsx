import SubHeader from "../../../axg-react/SubHeader"
import ProductTemplate from "../../../axg-react/shop/Product"
import { fetchposts } from "../../../lib/posts"

export default function Product({image, alt, name, currency, description, features, acf}) {
  return (
    <>
      <SubHeader
        top={"بررسی ویژگی ها"}
        mainTitle={"فروشگاه ساینا"}
        description={"توضیحات زیر صفحه"}
      />
      <ProductTemplate
        image={image}
        alt={alt}
        name={name}
        currency={currency}
        description={description}
        features={features}
      />
    </>
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
    props: targetProduct
  }
}
