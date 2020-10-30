import React from "react";

function Request() {
  return (
    <section className="request">
      <h2 className="request__title">Need a Project?</h2>
      <p className="request__description">
        Let us know what you're looking for in an agency. We'll take a look and
        see if this could be the start of something beautiful.
      </p>
      <form className="request__block">
        <div className="request__name">
          <input
            className="request__field"
            type="name"
            name="name"
            id="name"
            placeholder="Your Name"
          />
          <input
            className="request__field"
            type="email"
            name="Email"
            id="Email"
            placeholder="Your Email"
          />
        </div>
        <input
          className=" request__field request__field--title"
          type="name"
          name="title"
          id="title"
          placeholder="Your Title"
        />
        <textarea
          className=" request__field request__field--message"
          id="#"
          placeholder="Your Comment"
        ></textarea>
        <input
          className="submit request__submit"
          type="submit"
          name="submit"
          id="submit"
          value="send message"
        />
      </form>
    </section>
  );
}

export default Request;
