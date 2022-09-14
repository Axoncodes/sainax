import SubHeader from "../../axg-react/SubHeader"

export default function Product({}) {
    return (
      <SubHeader
        top={"بررسی ویژگی ها"}
        mainTitle={"فروشگاه"}
        description={"توضیحات زیر صفحه"}
      />
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
    props: {}
  }
}
