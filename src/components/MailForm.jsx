import { Button } from "./Button";

export function MailForm() {
  return (
    <form className="mail-form text-reg">
      <label for="name">Your Name</label>
      <input type="text" id="name" />
      <label for="email">Your Email</label>
      <input type="email" id="email" />
      <label for="message">Your Message</label>
      <textarea id="message"></textarea>
      <Button tag="button">Submit</Button>
    </form>
  );
}
