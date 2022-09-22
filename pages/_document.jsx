import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href={`${process.env.RexfontAPI}/font/all.css`} />
        <link rel="stylesheet" href={`${process.env.LocalAxg}/searchbarStyle`} />
        {/* <link rel="stylesheet" href={`${process.env.LocalAxg}/fontVarsStyle`} />
        <link rel="stylesheet" href={`${process.env.LocalAxg}/colorVarsStyle`} /> */}
        {/* <link rel="stylesheet" href={`${process.env.LocalAxg}/dropdown/v3/style`} /> */}
        <link rel="stylesheet" href={`${process.env.LocalAxg}/layoutactivationStyle`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}