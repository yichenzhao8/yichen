/** @format */
import styles from "../styles/Contact.module.scss";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
init("user_GfYc0MJj7GAP8IkuJUO0y");

import SucessAlert from "./sucessAlert";
import FailAlert from "./failAlert";

export default function contact() {
  const form = useRef();
  const [sucess, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  const submitMessage = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_vuzosey",
        "template_7n78f9m",
        form.current,
        "user_GfYc0MJj7GAP8IkuJUO0y"
      )
      .then(
        (result) => {
          form.current.reset();
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
        },
        (error) => {
          setFail(true);
          setTimeout(() => {
            setFail(false);
          }, 3000);
        }
      );
  };
  return (
    <>
      <SucessAlert display={sucess} />
      <FailAlert display={fail} />
      <div className={styles.divide}>
        <div>
          <h1>Let's collaborate!</h1>
          <div>
            <h3>
              I'm currently looking for new opportunies, my inbox is always
              open. Whether you have a question or just want to say Hi.
            </h3>
            <h1
              style={{
                fontSize: "2em",
                marginTop: "21.44px",
                color: "#a97590",
              }}>
              yichenzhao8@gmail.com
            </h1>
          </div>
        </div>
        <div className={styles.message}>
          <form ref={form} onSubmit={submitMessage} autoComplete="off">
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter you name"
              required></input>
            <label htmlFor="mail">Email</label>
            <br />
            <input
              type="text"
              id="mail"
              name="mail"
              placeholder="Enter you email"
              required></input>
            <label htmlFor="message">Message</label>
            <br />
            <textarea
              id="message"
              name="message"
              placeholder="Enter you message"
              required></textarea>
            <button type="submit">Sent</button>
          </form>
        </div>
      </div>
    </>
  );
}
