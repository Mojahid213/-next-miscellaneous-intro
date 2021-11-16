import Header from "../components/layout/header";

export default function Blog() {
  return (
    <div className="content">
      <h1>Blog page</h1>
    </div>
  );
}

Blog.getLayout = function BloyPageLayout(page) {
  return (
    <>
      <Header />
      {page}
    </>
  );
};
