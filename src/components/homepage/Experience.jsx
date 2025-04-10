import { Section } from "../layout/Section";
import Heading from "../elements/Heading";
import { ExperienceCard } from "../elements/ExperienceCard";

const cols = { 3: "md:grid-cols-3", 4: "md:grid-cols-4", 5: "md:grid-cols-5", 6: "md:grid-cols-6", 7: "md:grid-cols-7", 8: "md:grid-cols-8", 9: "md:grid-cols-9" };

export function Experience({ experience }) {
  console.log(experience);
  return (
    <Section className="bg-white py-32">
      <Heading>Work Experience</Heading>
      <ul className={`my-10 grid max-md:gap-x-5 md:gap-y-5 md:grid-rows-timeline max-md:grid-cols-timeline ${cols[experience.length]}`}>
        {experience.map((item, index) => (
          <ExperienceCard key={item.name} {...item} index={index} />
        ))}
      </ul>
    </Section>
  );
}
