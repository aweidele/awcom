import { Portfolio } from "../../components/homepage/Portfolio";
import { portfolio } from "../../content/sections/portfolio";

export default {
  title: "Homepage/Portfolio",
  component: Portfolio,
};
export const PortfolioStory = {
  args: {
    ...portfolio,
  },
};
PortfolioStory.storyName = "Portfolio";
