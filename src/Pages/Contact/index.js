//--------------------- react ------------------
import { useRef, useState } from "react";
//--------------------- emailjs ----------------

import emailjs from "@emailjs/browser";

//--------------------- component --------------
import Contactinfo from "./ContactInfo";

//--------------------- icon --------------
import { BiMap } from "react-icons/bi";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { Ri24HoursFill } from "react-icons/ri";
//--------------------- css --------------------
import "./contact.css";
function Contact() {
  const [sendSuccess, SetSendSuccess] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u575qo5",
        "template_7f0i5ki",
        form.current,
        "qEawHcUDWvW8iaW8K"
      )
      .then(
        (result) => {
          SetSendSuccess(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="header-contact">
          <h2 className="c-heading">Contact me</h2>
        </div>
        <div className="contact-infomain">
          <Contactinfo
            icon={<BiMap className="icon-contact" />}
            title="Location:"
            des="261/15 Đường Đình Phong Phú, Quận 9, TP.Hồ Chí Minh"
          />
          <Contactinfo
            icon={<AiOutlineMail className="icon-contact" />}
            title="Email:"
            des="kienndk09@gmail.com"
          />
          <Contactinfo
            icon={<AiFillPhone className="icon-contact" />}
            title="Call:"
            des="0382185674"
          />
          <Contactinfo
            icon={<Ri24HoursFill className="icon-contact" />}
            title="Open Hours:"
            des="Monday-Saturday"
          />
        </div>
        <div className="contact">
          <div className="contact-map">
            <iframe
              className="iframe-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.735758501556!2d106.7816513739457!3d10.831522458177286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175271cddbcae39%3A0x992abe68a9948a66!2zMjYxIMSQw6xuaCBQaG9uZyBQaMO6LCBUxINuZyBOaMahbiBQaMO6IEIsIFF14bqtbiA5LCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1681834594158!5m2!1svi!2s"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="from-controll-main">
            <form className="from-controll" ref={form} onSubmit={sendEmail}>
              <div className="c-controll">
                <label htmlFor="fname">Name:</label>
                <input type="text" name="user_name" />
              </div>
              <div className="c-controll">
                <label htmlFor="fname">Email:</label>
                <input type="email" name="user_email" />
              </div>
              <div className="c-controll">
                <label htmlFor="fname">Message:</label>
                <textarea name="message" />
              </div>
              <br />
              <button className="btn btn-primary" type="submit">
                Send Email
              </button>
            </form>
            {sendSuccess && <p className="c-success">Thank you contact me</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
