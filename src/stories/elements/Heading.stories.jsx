import Heading from "../../components/elements/Heading";

export default {
  title: "Global Elements/Heading",
  component: Heading,
  argTypes: {
    children: { table: { disable: true } },
    text: {
      control: "text",
      description: "Content for the heading",
    },
    l: {
      name: "Heading Level",
      control: "select",
      options: [1, 2, 3, 4],
      mapping: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
      },
      labels: {
        1: "h1",
        2: "h2",
        3: "h3",
        4: "h4",
      },
      description: "Select the heading level (h1–h4)",
    },
  },
};

const Template = ({ text, ...args }) => <Heading {...args}>{text}</Heading>;

export const HeadingStory = Template.bind({});
HeadingStory.args = {
  className: "mt-5 text-center",
  text: "This is a heading.",
  l: 2,
};
HeadingStory.storyName = "Heading";
