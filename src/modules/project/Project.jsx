import React from "react";

export const Project = () => {
  return (
    <section className="project">
      <h2 className="project__title">Need a Project?</h2>
      <p className="project__description">
        Let us know what you're looking for in an agency. We'll take a look and
        see if this could be the start of something beautiful.
      </p>
      <input
        type="submit"
        className="submit project__submit"
        value="let’s talk"
      />
    </section>
  );
};
