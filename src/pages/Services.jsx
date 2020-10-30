import React from "react";
import { Header, Info } from "modules";
import { store } from "store";

export const Services = () => {
  const info = store.services.info;

  return (
    <>
      <Header />
      <Info info={info} />
    </>
  );
};
