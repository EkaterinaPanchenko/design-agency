import React from "react";

function Services({ servicesItem }) {
  return (
    <section className="services">
      {servicesItem.map((item) => {
        return (
          <div className="services__item" key={item.id}>
            <div className="services__img">
              <img src={item.src} alt="not found" />
            </div>
            <h2 className="services__title">{item.title}</h2>
            <p className="services__description">{item.description}</p>
          </div>
        );
      })}
    </section>
  );
}
export default Services;
