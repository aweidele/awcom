import Grid from "../layout/Grid";
import Heading from "./Heading";
import { Button } from "./Button";
import { Desktop } from "./Desktop";

import skills from "../../content/sections/content/skills.json";
import { nl2array } from "../../../utils/fontsizes";

const containerClasses = `max-w-c px-16 desktopXl:px-5 m-auto`;
const paddingClasses = `py-28`;

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

export const PortfolioCard = ({ id, title, description, skills, url, images, video, bgClass }) => {
  return (
    <div className={`text-white ${paddingClasses} ${bgClass} relative`}>
      <div className={`${containerClasses} `}>
        <Grid>
          <div className="col-span-6">
            <Heading l={4}>{title}</Heading>
            {nl2array(description).map((paragraph, i) => (
              <p key={`${id}-p${i}`} className="mb-04em text-reg">
                {paragraph}
              </p>
            ))}
            <SkillChips skills={skills} />
            <div>
              <Button target={url} newWindow={true}>
                Launch Site
              </Button>
            </div>
          </div>
          <div className="col-span-6 max-md:my-10">
            {images && images.length && (
              <a href={url} target="_blank">
                <Desktop images={images} video={video} />
              </a>
            )}
          </div>
        </Grid>
      </div>
    </div>
  );
};
