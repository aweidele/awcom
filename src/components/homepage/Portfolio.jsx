import { Section } from "../layout/Section";
import Grid from "../layout/Grid";
import Heading from "../elements/Heading";

import skills from "../../content/sections/content/skills.json";
import { nl2array } from "../../../utils/fontsizes";

const containerClasses = `max-w-c px-16 desktopXl:px-5 m-auto`;
const paddingClasses = `py-28`;
const bgClasses = ["bg-s", "bg-s2"];

export const SkillChips = ({ skills: skillIds }) => {
  const projSkills = skillIds.map((skillId) => skills.filter((skill) => skill.id === skillId)[0]);

  return (
    <ul className="inline-flex flex-wrap md:justify-start gap-1 text-xs font-sans">
      {projSkills.map((skill) => (
        <li className="bg-white text-black py-px px-2 rounded-full" key={`${Math.random()}-proj-skill-${skill.id}`}>
          {skill.skill}
        </li>
      ))}
    </ul>
  );
};

export const Portfolio = ({ portfolio }) => {
  console.log(portfolio);
  return (
    <Section fullwidth={true}>
      {portfolio.map((work, i) => (
        <div key={work.id} className={`text-white ${paddingClasses} ${bgClasses[i % 2]} relative`}>
          <div className={`${containerClasses} `}>
            <Grid>
              <div className="col-span-6">
                <Heading l={4}>{work.title}</Heading>
                {nl2array(work.description).map((paragraph, i) => (
                  <p key={`${work.id}-p${i}`} className="mb-04em text-reg">
                    {paragraph}
                  </p>
                ))}
                <SkillChips skills={work.skills} />
              </div>
            </Grid>
          </div>
        </div>
      ))}
    </Section>
  );
};
