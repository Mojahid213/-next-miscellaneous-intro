import Footer from "../components/layout/footer";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Mojahid</title>
        <meta
          name="description"
          content="Mojahiul Islam is a Bangladeshi Person"
        />
      </Head>
      <div className="content">
        <h1>About Page</h1>
      </div>
    </>
  );
}

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer></Footer>
    </>
  );
};
