import { useState } from "react";
import { Button } from "./Button";
import Lottie from "react-lottie";
import animationData from "../../content/lotties/mail.json";
import emailjs from "emailjs-com";

export function MailForm() {
  const [submitState, setSubmitState] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitState("waiting");
    emailjs.sendForm("service_ptc4fcg", "template_ge28via", e.target, "4f4ixyWBzkrnwY4_0").then(
      (result) => {
        console.log("Email sent:", result.text);
        setSubmitState("submitted");
      },
      (error) => {
        console.error("Error sending email:", error.text);
      }
    );
  };

  const formDisplay = () => {
    if (submitState === "submitted") return <p>Email received. Thanks!</p>;
    if (submitState === "waiting") return <Lottie options={defaultOptions} height={501} width={412} />;

    return (
      <form onSubmit={sendEmail} className="mail-form text-reg">
        <label for="from_name">Your Name</label>
        <input type="text" id="from_name" name="from_name" />

        <label for="reply_to">Your Email</label>
        <input type="email" id="reply_to" name="reply_to" />

        <label for="message">Your Message</label>
        <textarea className="h-32" id="message" name="message"></textarea>

        <Button tag="button">Submit</Button>
      </form>
    );
  };

  return <div className="min-h-100">{formDisplay()}</div>;
}
