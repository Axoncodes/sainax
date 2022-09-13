import Head from "next/head";

export default function Home({}) {
  return (
    <>
      <Head>
        <title>ساینا گستر | خانه</title>
      </Head>
      index
    </>
  )
}

// export const getStaticProps = async () => {
//   const categoriesList = await fetch(`${process.env.RexfontAPI}/getcategories`).then(res => res.json())
//   return {
//     props: {
//       categoriesList,
//     }
//   }
// }