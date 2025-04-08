import { HomepageHero } from "../../components/homepage/HomepageHero";
import content from "../../content/sections/home.json";

export default {
  title: "Homepage/Homepage Hero",
  component: HomepageHero,
};

export const HPHero = {
  args: {
    ...content,
  },
};
HPHero.storyName = "Homepage Hero";
