import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Priyadharshan Ravichandran portfolio website, Example portfolio website, Example personal website. Viper-10 website. Viper_10 website"
        />
        <meta
          name="keywords"
          content="Priyadharshan Ravichandran website, Priyadharshan Ravichandran, personal website, example personal website, Viper-10 website, Viper_10 website"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.13.0/css/all.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
