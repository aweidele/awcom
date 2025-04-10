import { Experience } from "../../components/homepage/Experience";
import experience from "../../content/sections/content/work-experience.json";
console.log(experience);

export default {
  title: "Homepage/Experience",
  component: Experience,
};
export const ExperienceStory = { args: { experience: experience } };
ExperienceStory.storyName = "Experience";
