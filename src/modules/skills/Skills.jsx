import React from "react";

export const Skills = ({ skillsList }) => {
  return (
    <section className="skills">
      <div className="skills__left">
        <h2 className="skills__left-title">Professional Skills</h2>
        {skillsList.map((item) => {
          return (
            <div className="skills__item" key={item.id}>
              <h2 className="skills__item-name">
                {item.name} {item.progress}%
              </h2>
              <div className="graph">
                <div className={`graph__item skills__${item.type}`}></div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="skills__right"></div>
    </section>
  );
};
