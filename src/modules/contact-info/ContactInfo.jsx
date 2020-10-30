import React, { useState } from "react";

export const ContactInfo = ({ infoLeft }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");

  const onSubmit = () => {
    const result = {
      name: name,
      email: email,
      title: title,
      comment: comment,
    };
    console.log(result);
  };

  return (
    <section className="info">
      {infoLeft.map((item) => {
        return (
          <div className="info__left" key={item.id}>
            <h2 className="info__title">{item.title}</h2>
            <p className="info__description">{item.description}</p>
            <p className="info__description services-project__description--inform">
              <span className="info__bold">Address:</span>
              {item.address}
            </p>
            <p className="info__description services-project__description--inform">
              <span className="info__bold">Phone:</span>
              {item.phone}
            </p>
            <p className="info__description services-project__description--inform">
              <span className="info__bold">Email:</span>
              {item.email}
            </p>
            <p className="info__description services-project__description--inform">
              <span className="info__bold">fax</span>
              {item.phone}
            </p>
          </div>
        );
      })}
      <div className="info__right info__right--img">
        <form className="contact">
          <div className="contact__name">
            <input
              onChange={(event) => setName(event.target.value)}
              value={name}
              className="contact__field"
              type="name"
              name="name"
              id="name"
              placeholder="Your Name"
            />
            <input
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              className="contact__field"
              type="email"
              name="Email"
              id="Email"
              placeholder="Your Email"
            />
          </div>
          <input
            onChange={(event) => setTitle(event.target.value)}
            value={title}
            className="contact__field contact__field--title"
            type="name"
            name="title"
            id="title"
            placeholder="Your Title"
          />
          <textarea
            onChange={(event) => setComment(event.target.value)}
            value={comment}
            className=" contact__field contact__field--message"
            id="#"
            placeholder="Your Comment"
          />
          <input
            onClick={onSubmit}
            className="submit contact__submit"
            type="button"
            name="submit"
            id="submit"
            value="send message"
          />
        </form>
      </div>
    </section>
  );
};
