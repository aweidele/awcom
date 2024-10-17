import { Fragment, useContext } from "react";
import { ContentContext } from "./ContentContext";

import Home from "./Home";
import { formatSectionName } from "../utils/formatSectionName";

const componentMap = {
  home: Home,
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
