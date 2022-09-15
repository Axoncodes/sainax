import SubHeader from "../../axg-react/SubHeader"
import ProductTemplate from "../../axg-react/shop/Product"

export default function Product({image, alt, name, price, currency, description, features}) {
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
        price={price}
        currency={currency}
        description={description}
        features={features}
      />
    </>
  )
}

export async function getStaticPaths() {
  // const allicons = await fetch(`${process.env.RexfontAPI}/list`).then(res => res.json())
  const products = [
    'prod1'
  ]
  const paths = products.map(product => ({
    params: {
      product,
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = ({params}) => {
  const { product } = params
  
  return {
    props: {
      image: '/images/siman1.jpeg',
      alt: 'alt',
      name: 'سیمان',
      price: '200,000',
      currency: 'تومان',
      description: 'سایت لورم‌ ساز علاوه بر تولید متن ساختگی لورم ایپسوم، انواع ابزارهای آنلاین در زمینه‌های طراحی وبسایت و گرافیک، حسابداری و اندازه‌گیری و دیگر ابزارهای کاربردی برای استفاده در کارهای مختلف ارائه می‌دهد.',
      features: [
        ['وزن', '10 kg'],
        ['رنگ', 'قرمز'],
        ['ابعاد', '10 * 10 * 10 m3']
      ]
    }
  }
}
