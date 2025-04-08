import { Section } from "../layout/Section";
import { HomepageHero } from "./HomepageHero";
import { Skills } from "./Skills";
import { Work } from "./Work";
import { Portfolio } from "./Portfolio";
import { Experience } from "./Experience";

import { sections } from "../../content/content";
import { formatSectionName } from "../../../utils/formatSectionName";

const componentMap = {
  homepageHero: HomepageHero,
  work: Work,
  portfolio: Portfolio,
  skills: Skills,
  experience: Experience,
};

export const Sections = () => {
  return (
    <>
      {sections.map((section, i) => {
        const ThisComponent = componentMap[section.component];
        return <ThisComponent key={formatSectionName(section.title)} {...section.content} />;
      })}
    </>
  );
};
