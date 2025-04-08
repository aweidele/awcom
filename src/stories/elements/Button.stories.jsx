//children, target, tag = "a", newWindow = false, extraClasses
import { Button } from "../../components/elements/Button";
export default {
  title: "Global Elements/Button",
  component: Button,
  argTypes: {
    tag: { control: "select", options: ["a", "button"] },
  },
};

const Template = ({ text, ...args }) => <Button {...args}>{text}</Button>;

export const ButtonStory = Template.bind({});
ButtonStory.args = {
  target: "http://www.aaronweidele.com",
  tag: "a",
  text: "Launch Project",
  newWindow: true,
};

ButtonStory.storyName = "Button";
