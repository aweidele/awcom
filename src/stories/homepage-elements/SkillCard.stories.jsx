import { SkillCard } from "../../components/elements/SkillCard";

export default {
  title: "Homepage Elements/Skill Card",
  component: SkillCard,
  argTypes: {
    level: { control: { type: "number", min: 1, max: 100 } },
  },
};

export const SkillCardStory = {
  args: {
    skill: "React",
    id: "react",
    level: 80,
  },
};
SkillCardStory.storyName = "Skill Card";
