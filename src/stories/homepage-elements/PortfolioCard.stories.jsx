import { ArgTypes } from "@storybook/blocks";
import { PortfolioCard } from "../../components/elements/PortfolioCard";
import { portfolio } from "../../content/sections/portfolio";
console.log(portfolio);

export default {
  title: "Homepage Elements/Portfolio Card",
  component: PortfolioCard,
  argTypes: {
    bgClass: { control: "select", options: ["bg-s", "bg-s2"] },
  },
};
export const PortfolioCardStory = {
  args: {
    bgClass: "bg-s",
    ...portfolio.portfolio[1],
  },
};
PortfolioCardStory.storyName = "Portfolio Card";
