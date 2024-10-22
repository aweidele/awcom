import Section from "./Section";
import Heading from "./Heading";
import Grid from "./Grid";
import { Skills } from "./Skills";
export function Work({ content }) {
  console.log(content);
  return (
    <Section className="py-32">
      <Heading>Work Experience</Heading>
      <Grid>
        <div className="col-span-4">
          <Skills skills={content.skills} />
        </div>
        <div className="col-span-7 col-start-6 border">
          <Heading l={3}>My Experience</Heading>
        </div>
      </Grid>
    </Section>
  );
}
