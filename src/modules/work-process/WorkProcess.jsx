import React from "react";

export const WorkProcess = () => {
  const youtube = "https://www.youtube.com/embed/9No-FiEInLA";

  return (
    <section className="work-process">
      <h2 className="work-process__title">Our Work Process</h2>
      <p className="work-process__description">
        Was years it seasons was there form he in in them together over that,
        third sixth gathered female creeping bearing behold years.
      </p>
      <iframe
        className="work-process__video"
        src={youtube}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="work-process"
      />
    </section>
  );
};
