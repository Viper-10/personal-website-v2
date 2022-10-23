import "react-vertical-timeline-component/style.min.css";
import "../styles/globals.css";
import BackgroundAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import Navbar from "../components/Navbar/Navbar";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Priyadharshan Ravichandran</title>
      </Head>

      <main>
        <div className="context">
          <Navbar />
          <div className="container">
            <Component {...pageProps} />
          </div>
        </div>
        <BackgroundAnimation />
      </main>
    </>
  );
}

export default MyApp;
