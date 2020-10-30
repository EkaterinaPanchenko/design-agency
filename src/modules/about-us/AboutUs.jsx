import React from "react";
import signature from "../../img/signature.png";

function AboutUS() {
  return (
    <section className="about-us">
      <h2 className="about-us__title">About Us</h2>
      <p className="about-us__description">
        Divide have don't man wherein air fourth. Own itself make have night
        won't make. A you under Seed appear which good give. Own give air
        without fowl moveth dry first heaven fruit, dominion she'd won't very
        all.
      </p>
      <div className="about-us__img">
        <img src={signature} alt="not found" />
      </div>
    </section>
  );
}

export default AboutUS;
