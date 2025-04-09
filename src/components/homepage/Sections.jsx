import { Section } from "../layout/Section";
import { HomepageHero } from "./HomepageHero";
import { Skills } from "./Skills";
import { Work } from "./Work";
import { Portfolio } from "./Portfolio";
import { Experience } from "./Experience";

import { sections } from "../../content/content";
import { formatSectionName } from "../../../utils/formatSectionName";
import { Fragment } from "react";

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
        const sectionId = formatSectionName(section.title);
        return (
          <Fragment key={sectionId}>
            <a name={sectionId} id={sectionId} />
            <ThisComponent {...section.content} />
          </Fragment>
        );
      })}
    </>
  );
};
