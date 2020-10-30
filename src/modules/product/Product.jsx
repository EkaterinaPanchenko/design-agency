import React from "react";

export const Product = ({ productImg }) => {
  return (
    <section className="product">
      {productImg.map((item) => {
        return (
          <div
            className="product__img"
            key={item.id}
            style={{ backgroundImage: `url('${item.style}')` }}
          >
            <a className="product__img-link" href="/">
              <img src={item.src} alt="not found" />
            </a>
          </div>
        );
      })}
      <a className="product__more" href="/">
        load more work
      </a>
    </section>
  );
};
