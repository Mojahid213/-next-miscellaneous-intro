import Footer from "../components/footer";

export default function About() {
  return (
    <div className="content">
      <h1>About Page</h1>
    </div>
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
