import React from "react";
import signature from "../../img/signature.png";

function Aboutme() {
  return (
    <section className="about-me">
      <div className="about-me__left"></div>
      <div className="about-me__right">
        <h2 className="about-us__title">About Us</h2>
        <p className="about-us__description">
          Given let waters air sea had you'll, may seed abundantly fish. Were,
          you'll earth forth winged above brought. Own darkness they're him
          can't fourth sea place have.
        </p>
        <p className="about-us__description">
          So the above May stars cattle fruitful face shall. Tree it, winged.
          Every signs male firmament us. Morning him.
        </p>
        <div className="about-us__img">
          <img src={signature} alt="not found" />
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
