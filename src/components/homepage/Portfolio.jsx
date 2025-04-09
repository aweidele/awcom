import { Section } from "../layout/Section";
import { PortfolioCard } from "../elements/PortfolioCard";

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
