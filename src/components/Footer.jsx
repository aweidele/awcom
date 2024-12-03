import Section from "./Section";
import Grid from "./Grid";
import Heading from "./Heading";
import { MailForm } from "./MailForm";

export function Footer() {
  return (
    <Section tag="footer" className="bg-s2 text-white py-32">
      <Heading l={3}>Connect With Me</Heading>
      <Grid>
        <div className="col-span-5">
          <MailForm />
        </div>
      </Grid>
    </Section>
  );
}
