import React from "react";
import { store } from "../../store";

function Progress() {
  const progressItem = store.progess.progressItem;

  return (
    <section className="progress">
      {progressItem.map((item) => {
        return (
          <div className="progress__item" key={item.id}>
            <div className="progress__item-img">
              <img src={item.src} alt="not found" />
            </div>
            <div className="progress__right">
              <p className="progress__number">{item.number}</p>
              <h2 className="progress__title">{item.title}</h2>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Progress;
