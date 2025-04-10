import { backgrounds, backgroundsDk, borders, bgAfter } from "../../content/content";

const formatDates = (dates) => {
  return (
    <>
      {dates[0].start}—{dates[0].end}
      <br />
      {dates[1].start}—{dates[1].end}
    </>
  );
};

export const ExperienceCard = ({ dates, start, title, name, index }) => {
  return (
    <li className="grid max-md:col-span-3 md:row-span-3 max-md:grid-cols-subgrid md:grid-rows-subgrid experience-row">
      <div className={`max-md:justify-self-end self-center experience-year ${bgAfter[index % 6]} ${index % 2 ? "md:row-start-3 md:self-start even" : "md:self-end"}`}>{dates ? <h4 className={`${borders[index % 6]} w-84 md:h-42 text-xxs text-center`}>{formatDates(dates)}</h4> : <h4 className={`${borders[index % 6]} w-42 h-42 text-reg`}>{start}</h4>}</div>
      <div className="experience-marker">
        <div className={`${backgrounds[index % 6]} max-md:skew-y-tl md:skew-x-tl`}></div>
        <div className={`${backgroundsDk[index % 6]} max-md:-skew-y-tl md:-skew-x-tl`}></div>
      </div>
      <div className={`self-center ${index % 2 ? "md:row-start-1 md:self-end" : "md:self-start"} md:text-center max-md:py-6`}>
        <span className="text-xs font-sans font-bold block">{title}</span>
        <span className="block text-reg font-sans">{name}</span>
      </div>
    </li>
  );
};
