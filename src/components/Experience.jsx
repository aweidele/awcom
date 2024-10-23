import { ExperienceCard } from "./ExperienceCard";
import { backgrounds, backgroundsDk, borders } from "../content/content";

const cols = { 3: "grid-cols-3", 4: "grid-cols-4", 5: "grid-cols-5", 6: "grid-cols-6", 7: "grid-cols-7", 8: "grid-cols-8", 9: "grid-cols-9" };

export function Experience({ experience }) {
  return (
    <ul className={`my-10 grid gap-y-5 grid-rows-timeline ${cols[experience.length]}`}>
      {experience.map((item, index) => (
        <li className="grid row-span-3 grid-rows-subgrid experience-row">
          <div className={`${index % 2 ? "row-start-3 self-start" : "self-end"}`}>
            <h4 className={`${borders[index % 6]}`}>{item.start}</h4>
          </div>
          <div className="experience-marker">
            <div className={`${backgrounds[index % 6]} skew-x-tl`}></div>
            <div className={`${backgroundsDk[index % 6]} -skew-x-tl`}></div>
          </div>
          <div className={`${index % 2 ? "row-start-1 self-end" : "self-start"} text-center`}>
            <span className="text-xs font-sans font-bold block">{item.title}</span>
            <span className="block text-reg font-sans">{item.name}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

// {experience.map((exp, i) => (
//   <ExperienceCard item={exp} index={i} />
// ))}
