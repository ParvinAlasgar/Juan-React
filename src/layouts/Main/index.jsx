import Hero from "../../components/Hero";
import Product from "../../components/Product";
import Banner from "../../components/Banner";
import Blog from "../../components/Blog";
import Brands from "../../components/Brands";

const main = () => {
  return (
    <>
      <section id="main">
        <Hero />
        <Product />
        <Banner />
        <Blog />
        <Brands />
      </section>
    </>
  );
};

export default main;
