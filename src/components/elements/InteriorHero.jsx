import { Section } from "../layout/Section";
import Heading from "./Heading";

export const InteriorHero = ({ title, line1, line2, children }) => {
  return (
    <Section tag="header" className="bg-p2 text-white relative z-10">
      <div className="circle-bg"></div>
      <div className="relative w-full py-8 md:py-30 text-center">
        <div className="uppercase tracking-wider">{line1}</div>
        <Heading>{title}</Heading>
        {children}
      </div>
    </Section>
  );
};
