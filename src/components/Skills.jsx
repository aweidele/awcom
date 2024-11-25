import Section from "./Section";
import SkillCard from "./SkillCard";
import Heading from "./Heading";
import Grid from "./Grid";

export function Skills({ content: skills }) {
  skills.sort((a, b) => b.level - a.level);
  const highlightSkills = skills.filter((skill) => skill.highlight === true);
  const otherSkills = skills.filter((skill) => !skill.highlight);
  return (
    <>
      <Section className="bg-white py-32">
        <Heading>My Skills</Heading>
        <Grid>
          <div className="col-span-4">
            <ul className="grid grid-cols-4 gap-5">
              {highlightSkills.map((skill) => (
                <li className="text-center" key={skill.id}>
                  <SkillCard skill={skill} />
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-5 col-start-6">
            <ul className="text-xs font-sans leading-4 columns-3 my-10 md:m-0 gap-5">
              {otherSkills.map((skill) => (
                <li className="mb-2 duration-300 hover:bg-s2-lt" key={skill.id}>
                  {skill.skill}
                </li>
              ))}
            </ul>
          </div>
        </Grid>
      </Section>
    </>
  );
}
