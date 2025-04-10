import { SkillCard } from "../../components/elements/SkillCard";
import skills from "../../content/sections/content/skills.json";

const ids = skills.filter((skill) => skill.highlight).map((skill) => skill.id);

export default {
  title: "Layout/Header",
  component: SkillCard,
  argTypes: {
    level: { control: { type: "number", min: 1, max: 100 } },
    id: { control: "select", options: ids, name: "Icon" },
  },
};

export const HeaderStory = {
  args: {
    skill: "React",
    id: "react",
    level: 80,
  },
};
HeaderStory.storyName = "Header";
