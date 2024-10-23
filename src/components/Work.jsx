import Section from "./Section";
import Heading from "./Heading";
import Grid from "./Grid";
import { Skills } from "./Skills";
import { Experience } from "./Experience";

export function Work({ content }) {
  console.log(content);
  return (
    <Section className="bg-white py-32">
      <Heading>Work Experience</Heading>
      <Grid>
        <div className="col-span-4">
          <Skills skills={content.skills} />
        </div>
        {/* <div className="col-span-7 col-start-6">
        </div> */}
      </Grid>
      <Heading l={3}>My Experience</Heading>
      <Experience experience={content.experience} />
    </Section>
  );
}
