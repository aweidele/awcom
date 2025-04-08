import { Section } from "../Section";
import { HomepageHero } from "./HomepageHero";
import { Skills } from "./Skills";
import { Work } from "./Work";
import { Portfolio } from "./Portfolio";
import { Experience } from "./Experience";

import { sections } from "../../content/content";

const componentMap = {
  homepageHero: HomepageHero,
  work: Work,
  portfolio: Portfolio,
  skills: Skills,
  experience: Experience,
};

console.log(sections);

export const Sections = () => {
  return (
    <>
      {sections.map((section, i) => {
        const ThisComponent = componentMap[section.component];
        return (
          <Section fullwidth>
            <ThisComponent {...section.content} />
          </Section>
        );
      })}
    </>
  );
};
