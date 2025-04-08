import { Skills } from "../../components/homepage/Skills";
import { workExperience } from "../../content/sections/skills-experience";
const content = workExperience.skills;

export default {
  title: "Homepage/Skills",
  component: Skills,
};
export const SkillsStory = {
  args: {
    ...content,
  },
};
SkillsStory.storyName = "Skills";
