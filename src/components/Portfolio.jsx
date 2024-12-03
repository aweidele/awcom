import Section from "./Section";
import Grid from "./Grid";
import Heading from "./Heading";
import { Button } from "./Button";
import { Desktop } from "./Desktop";
import { Fragment } from "react";
import { nl2p, nl2array } from "../utils/fontsizes";
import skills from "../content/sections/content/skills.json";

export function Portfolio({ content }) {
  const containerClasses = `max-w-c px-5 m-auto`;
  const paddingClasses = `py-28`;
  const bgClasses = ["bg-s", "bg-s2"];

  function SkillChips({ skills: skillIds }) {
    const projSkills = skillIds.map((skillId) => skills.filter((skill) => skill.id === skillId)[0]);

    return (
      <ul className="inline-flex flex-wrap justify-center md:justify-start gap-1 text-xs font-sans">
        {projSkills.map((skill) => (
          <li className="bg-white text-black py-px px-2 rounded-full" key={`${Math.random()}-proj-skill-${skill.id}`}>
            {skill.skill}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <Section fullwidth={true}>
      {content.map((work, i) => (
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
                <div>
                  <Button target={work.url} newWindow={true}>
                    Launch Site
                  </Button>
                </div>
              </div>
              <div className="col-span-6 max-md:my-10">
                {work.images && work.images.length && (
                  <a href={work.url} target="_blank">
                    <Desktop images={work.images} video={work.video} />
                  </a>
                )}
              </div>
            </Grid>
          </div>
        </div>
      ))}
    </Section>
  );
}
