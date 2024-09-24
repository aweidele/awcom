import Home from "./Home";

const componentMap = {
  home: Home,
};

export default function Sections({ sections }) {
  return (
    <>
      {sections.map((section) => {
        const ThisComponent = componentMap[section.component];
        return <ThisComponent key={section.title} content={section.content}></ThisComponent>;
      })}
    </>
  );
}
