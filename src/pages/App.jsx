import React from "react";

import Header from "../modules/header/Header";
import MainSection from "../modules/main-section/MainSection";
import AboutUs from "../modules/about-us/AboutUs";
import Skills from "../modules/skills/Skills";
import Progress from "../modules/progress/Progress";
import Product from "../modules/product/Product";
import WorkProcess from "../modules/work-process/WorkProcess";
import Services from "../modules/services/Services";
import Rewiews from "../modules/reviews/Reviews";
import Brands from "../modules/brands/Brands";
import Request from "../modules/request/Request";
import Footer from "../modules/footer/Footer";
import { store } from "../store";

function App() {
  const brandsImg = store.app.brandsImg;
  const productImg = store.app.productImg;
  const content = store.app.content;
  const servicesItem = store.app.servicesItem;
  const skillsList = store.app.skillsList;

  return (
    <>
      <Header isAbsolute />
      <MainSection />
      <AboutUs />
      <Skills skillsList={skillsList} />
      <Progress />
      <Product productImg={productImg} />
      <WorkProcess />
      <Services servicesItem={servicesItem} />
      <Rewiews content={content} />
      <Brands brandsImg={brandsImg} />
      <Request />
      <Footer />
    </>
  );
}

export default App;
