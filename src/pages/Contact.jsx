import React from "react";
import Header from "modules/header/Header";
import ContactInfo from "modules/contact-info/ContactInfo";
import Map from "modules/map/Map";
import Footer from "modules/footer/Footer";
import { store } from "store";

function Contact() {
  const infoLeft = store.contact.infoLeft;

  return (
    <>
      <Header />
      <ContactInfo infoLeft={infoLeft} />
      <Map />
      <Footer />
    </>
  );
}

export default Contact;
