import React from "react";
import Footer from "modules/footer/Footer";
import Header from "modules/header/Header";
import Info from "modules/info/Info";
import { store } from "store";

function Services() {
  const info = store.services.info;

  return (
    <>
      <Header />
      <Info info={info} />
      <Footer />
    </>
  );
}

export default Services;
