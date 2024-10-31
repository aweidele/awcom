import { Fragment, useContext } from "react";
import { ContentContext } from "./ContentContext";

import Home from "./Home";
import { Work } from "./Work";
import { Portfolio } from "./Portfolio";
import { formatSectionName } from "../utils/formatSectionName";
import { portfolio } from "../content/sections/portfolio";

const componentMap = {
  home: Home,
  work: Work,
  portfolio: Portfolio,
};

export default function Sections() {
  const { sections } = useContext(ContentContext);
  return (
    <>
      {sections.map((section, i) => {
        const ThisComponent = componentMap[section.component];
        return (
          <Fragment key={`${section.title}-${i}`}>
            <a name={formatSectionName(section.title, i)}></a>
            <ThisComponent key={section.title} content={section.content}></ThisComponent>
          </Fragment>
        );
      })}
    </>
  );
}
