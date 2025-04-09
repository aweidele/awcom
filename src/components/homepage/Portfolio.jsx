import { Section } from "../layout/Section";
import Grid from "../layout/Grid";
import Heading from "../elements/Heading";
import { Desktop } from "../elements/Desktop";
import { Button } from "../elements/Button";

import skills from "../../content/sections/content/skills.json";
import { nl2array } from "../../../utils/fontsizes";
import { PortfolioCard } from "../elements/PortfolioCard";

const containerClasses = `max-w-c px-16 desktopXl:px-5 m-auto`;
const paddingClasses = `py-28`;
const bgClasses = ["bg-s", "bg-s2"];

export const Portfolio = ({ portfolio }) => {
  return (
    <Section fullwidth={true}>
      {portfolio.map((work, i) => (
        <PortfolioCard {...work} bgClass={bgClasses[i % 2]} />
      ))}
    </Section>
  );
};
