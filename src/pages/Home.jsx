import React from "react";
import { Header, Product, Graphics, Footer } from "modules";
import { store } from "store";

export const Home = () => {
  const productImg = store.home.productImg;

  return (
    <>
      <Header />
      <Graphics />
      <Product productImg={productImg} />
      <Footer />
    </>
  );
};
