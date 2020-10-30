import React, { useState } from "react";

function Rewiews({ content }) {
  const [activeSlide, setAciveSlide] = useState(content[1]);
  const handleNext = (id) => setAciveSlide(content[id]);

  return (
    <section className="reviews">
      <div className="reviews__container">
        <div className="reviews__slide">
          <p className="reviews__description">{activeSlide.description}</p>
          <p className="reviews__author">{activeSlide.author}</p>
        </div>
        <div className="reviews__block">
          {content.map((item) => {
            return (
              <button
                onMouseEnter={() => handleNext(item.id)}
                className={`reviews__button ${
                  item.id === activeSlide.id ? "reviews__button--active" : ""
                }`}
                key={item.id}
                type="button"
              ></button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Rewiews;
