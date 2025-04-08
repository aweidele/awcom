import { SmallText } from "../../components/elements/SmallText";

export default {
  title: "Global Elements/Small Text",
  component: SmallText,
  argTypes: {
    children: { table: { disable: true } }, // Hides `children` from controls
    text: {
      control: "text",
      description: "Content for the small text element",
    },
    tag: {
      control: "select",
      options: ["p", "div", "span"],
    },
  },
};

const Template = ({ text, ...args }) => <SmallText {...args}>{text}</SmallText>;

export const SmallTextStory = Template.bind({});
SmallTextStory.args = {
  className: "mt-5 text-center",
  text: "This is some Small Text copy.",
  tag: "p",
};
SmallTextStory.storyName = "Small Text";
