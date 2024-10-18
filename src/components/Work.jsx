import Section from "./Section";
import Heading from "./Heading";
import Grid from "./Grid";
export function Work({ content }) {
  console.log(content);
  return (
    <Section className="py-32">
      <Heading>Work Experience</Heading>
      <Grid>
        <div class="col-span-6">
          <ul>
            {content.skills.map((skill) => (
              <li key={skill.id}>{skill.skill}</li>
            ))}
          </ul>
        </div>
      </Grid>
    </Section>
  );
}
