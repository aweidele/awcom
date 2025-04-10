import { ExperienceCard } from "../../components/elements/ExperienceCard";
import experience from "../../content/sections/content/work-experience.json";

const index = 5;

export default {
  title: "Homepage Elements/Experience Card",
  component: ExperienceCard,
  argTypes: {
    title: {
      control: { type: "text" },
      name: "Title",
    },
    name: {
      control: { type: "text" },
      name: "Company",
    },
    start: {
      control: { type: "number" },
      name: "Start Year",
    },
    index: { control: { type: "number", min: 0 }, name: "Index" },
  },
};

const Template = ({ ...args }) => {
  console.log(index);
  return (
    <ul className={`my-10 grid max-md:gap-x-5 md:gap-y-5 md:grid-rows-timeline max-md:grid-cols-timeline md:grid-cols-6`}>
      <ExperienceCard {...args} />
    </ul>
  );
};
export const ExperienceCardStory = Template.bind({});
ExperienceCardStory.args = { ...experience[index], index: index };
ExperienceCardStory.storyName = "Experience Card";
