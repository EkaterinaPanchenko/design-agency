import React from "react";
import { Header, ContactInfo, Map } from "modules";
import { store } from "store";

export const Contact = () => {
  const infoLeft = store.contact.infoLeft;

  return (
    <>
      <Header />
      <ContactInfo infoLeft={infoLeft} />
      <Map />
    </>
  );
};
