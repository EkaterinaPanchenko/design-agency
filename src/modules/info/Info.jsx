import React, { useState, useRef } from "react";

function Info({ info }) {
  const slide = useRef(null);
  const [indent, setIndent] = useState(0);

  const getSlideWidth = (SLIDE) => SLIDE.clientWidth + SLIDE.clientWidth * 0.06;

  const moveLeft = () => {
    const NEW_INDENT = indent + getSlideWidth(slide.current);

    if (NEW_INDENT <= 0) {
      setIndent(NEW_INDENT);
    }
  };

  const moveRight = () => {
    const NEW_INDENT = indent - getSlideWidth(slide.current);

    if (getSlideWidth(slide.current) * info.length > -NEW_INDENT) {
      setIndent(NEW_INDENT);
    }
  };

  return (
    <main className="services">
      <div className="services__view">
        <div
          className="services-project"
          style={{ transform: `translateX(${indent}px)` }}
        >
          {info.map((item) => {
            return (
              <section className="info" ref={slide} key={item.id}>
                <div className="info__left">
                  <h2 className="info__title">{item.title}</h2>
                  {item.description.map((text, index) => {
                    return (
                      <p key={index} className="info__description">
                        {text}
                      </p>
                    );
                  })}
                  <p className="info__description services-project__description--inform">
                    <span className="info__bold">Client:</span>
                    {item.client}
                  </p>
                  <p className="info__description services-project__description--inform">
                    <span className="info__bold">Date:</span>
                    {item.date}
                  </p>
                  <p className="info__description services-project__description--inform">
                    <span className="info__bold">Share:</span>
                    {item.share}
                  </p>
                </div>
                <div
                  className="info__right"
                  style={{ backgroundImage: `url('${item.background}')` }}
                />
              </section>
            );
          })}
        </div>
      </div>
      <section className="arrow">
        <a onClick={moveLeft} className="arrow__link" href="/">
          <div>
            <div className="arrow__left"></div>
          </div>
          previous project
        </a>
        <div className="arrow__block">
          <div className="arrow__block-item"></div>
          <div className="arrow__block-item"></div>
          <div className="arrow__block-item"></div>
          <div className="arrow__block-item"></div>
        </div>
        <a onClick={moveRight} className="arrow__link" href="/">
          next project
          <div>
            <div className="arrow__right"></div>
          </div>
        </a>
      </section>
    </main>
  );
}

export default Info;
