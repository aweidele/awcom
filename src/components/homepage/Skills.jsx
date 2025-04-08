import { Section } from "../layout/Section";
import Grid from "../layout/Grid";
import Heading from "../elements/Heading";
import { SkillCard } from "../elements/SkillCard";

export const Skills = ({ skills }) => {
  skills.sort((a, b) => b.level - a.level);
  const highlightSkills = skills.filter((skill) => skill.highlight === true);
  const otherSkills = skills.filter((skill) => !skill.highlight);
  return (
    <>
      <Section className="bg-white py-32">
        <Heading>My Skills</Heading>
        <Grid extraClasses="mt-6">
          <div className="col-span-5 xl:col-span-4">
            <ul className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {highlightSkills.map((skill) => (
                <li className="text-center" key={skill.id}>
                  <SkillCard {...skill} />
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-6 xl:col-span-5 col-start-7 xl:col-start-6">
            <ul className="text-xs font-sans leading-4 xs:columns-2 xl:columns-3 my-10 md:m-0 gap-5">
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
};
