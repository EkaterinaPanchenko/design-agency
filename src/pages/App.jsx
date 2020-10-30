import React from "react";

import {
  Header,
  MainSection,
  AboutUs,
  Skills,
  Progress,
  Product,
  WorkProcess,
  Services,
  Reviews,
  Brands,
  Request,
} from "modules";
import { store } from "store";

export const App = () => {
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
      <Reviews content={content} />
      <Brands brandsImg={brandsImg} />
      <Request />
    </>
  );
};
