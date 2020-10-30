import React from "react";

function Brands({ brandsImg }) {
  return (
    <section className="brands">
      {brandsImg.map((img) => {
        return (
          <div key={img.id} className="brands__img">
            <img src={img.src} alt={img.alt} />
          </div>
        );
      })}
    </section>
  );
}

export default Brands;
