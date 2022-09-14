import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href={`${process.env.RexfontAPI}/font/all.css`} />
        <link rel="stylesheet" href={`${process.env.Axg}/searchbarStyle`} />
        <link rel="stylesheet" href={`${process.env.Axg}/fontVarsStyle`} />
        <link rel="stylesheet" href={`${process.env.Axg}/colorVarsStyle`} />
        <link rel="stylesheet" href={`${process.env.Axg}/dropdown/v3/style`} />
        <link rel="stylesheet" href={`${process.env.Axg}/layoutactivationStyle`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}