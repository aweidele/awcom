import { Button } from "./Button";
import emailjs from "emailjs-com";

export function MailForm() {
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target);
    emailjs.sendForm("service_ptc4fcg", "template_ge28via", e.target, "4f4ixyWBzkrnwY4_0").then(
      (result) => {
        console.log("Email sent:", result.text);
      },
      (error) => {
        console.error("Error sending email:", error.text);
      }
    );
  };

  return (
    <form onSubmit={sendEmail} className="mail-form text-reg">
      <label for="from_name">Your Name</label>
      <input type="text" id="from_name" name="from_name" />

      <label for="reply_to">Your Email</label>
      <input type="email" id="reply_to" name="reply_to" />

      <label for="message">Your Message</label>
      <textarea id="message" name="message"></textarea>

      <Button tag="button">Submit</Button>
    </form>
  );
}
