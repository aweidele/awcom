import { ExperienceCard } from "./ExperienceCard";
import Section from "./Section";
import Heading from "./Heading";
import { backgrounds, backgroundsDk, borders, bgAfter } from "../content/content";

const cols = { 3: "md:grid-cols-3", 4: "md:grid-cols-4", 5: "md:grid-cols-5", 6: "md:grid-cols-6", 7: "md:grid-cols-7", 8: "md:grid-cols-8", 9: "md:grid-cols-9" };

export function Experience({ content: experience }) {
  return (
    <Section className="bg-white py-32">
      <Heading>Work Experience</Heading>
      <ul className={`my-10 grid max-md:gap-x-5 md:gap-y-5 md:grid-rows-timeline max-md:grid-cols-timeline ${cols[experience.length]}`}>
        {experience.map((item, index) => (
          <li key={item.name} className="grid max-md:col-span-3 md:row-span-3 max-md:grid-cols-subgrid md:grid-rows-subgrid experience-row">
            <div className={`self-center experience-year ${bgAfter[index % 6]} ${index % 2 ? "md:row-start-3 md:self-start even" : "self-end"}`}>
              <h4 className={`${borders[index % 6]}`}>{item.start}</h4>
            </div>
            <div className="experience-marker">
              <div className={`${backgrounds[index % 6]} max-md:skew-y-tl md:skew-x-tl`}></div>
              <div className={`${backgroundsDk[index % 6]} max-md:-skew-y-tl md:-skew-x-tl`}></div>
            </div>
            <div className={`self-center ${index % 2 ? "md:row-start-1 md:self-end" : "md:self-start"} md:text-center max-md:py-6`}>
              <span className="text-xs font-sans font-bold block">{item.title}</span>
              <span className="block text-reg font-sans">{item.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

// {experience.map((exp, i) => (
//   <ExperienceCard item={exp} index={i} />
// ))}
