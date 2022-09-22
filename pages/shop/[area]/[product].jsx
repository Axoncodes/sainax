import SubHeader from "../../../axg-react/SubHeader"
import ProductTemplate from "../../../axg-react/shop/Product"

export default function Product({image, alt, name, currency, description, features}) {
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
  const allProducts = await fetch(`http://localhost:8271/productsList`).then(res => res.json()).then(res => res.documents)

  const paths = allProducts.map(product => ({
    params: {
      product: product.slug,
      area: product.area_slug,
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({params}) => {
  const { product } = params

  const targetProduct = await fetch(`http://localhost:8271/productsList`)
  .then(res => res.json())
  .then(res => res.documents)
  .then(products => products.filter(item => item.slug == product)[0])
  
  return {
    props: targetProduct
  }
}
