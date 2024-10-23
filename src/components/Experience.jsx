import { ExperienceCard } from "./ExperienceCard";

export function Experience({ experience }) {
  return (
    <ul>
      {experience.map((exp, i) => (
        <ExperienceCard item={exp} index={i} />
      ))}
    </ul>
  );
}
