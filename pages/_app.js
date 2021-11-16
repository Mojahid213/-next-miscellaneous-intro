import Footer from "@/layout/footer";
import Header from "@/layout/header";
import "styles/globals.css";
import "@/layoutStyle/layout.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Head>
        <title>The MMIJ</title>
        <meta
          name="description"
          content="Codevulation is Awesome youtube channer"
        />
      </Head>
      <Header />
      <Component {...pageProps} />;
      <Footer />
    </>
  );
}

export default MyApp;
