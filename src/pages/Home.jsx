import React from "react";
import Header from "../modules/header/Header";
import Product from "../modules/product/Product";
import Graphics from "../modules/graphics/Graphics";
import Footer from "../modules/footer/Footer";
import { store } from "../store";

function Home() {
  const productImg = store.home.productImg;

  return (
    <>
      <Header />
      <Graphics />
      <Product productImg={productImg} />
      <Footer />
    </>
  );
}

export default Home;
