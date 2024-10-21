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
        <div class="col-span-4">
          <Skills skills={content.skills} />
        </div>
      </Grid>
    </Section>
  );
}
