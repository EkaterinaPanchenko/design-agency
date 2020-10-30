import React from "react";

function MainSection() {
  return (
    <section className="main-section">
      <div className="main-section__container">
        <div className="main-section__right">
          <h2 className="main-section__title">We Design and Develop</h2>
          <p className="main-section__description">
            We are a new design studio based in USA. We have over 20 years of
            combined experience, and know a thing or two about designing
            websites and mobile apps.
          </p>
          <input
            className="submit"
            type="submit"
            id="submit"
            value="contact us"
          />
        </div>
      </div>
    </section>
  );
}

export default MainSection;
