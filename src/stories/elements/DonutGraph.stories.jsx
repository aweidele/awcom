import DonutGraph from "../../components/elements/DonutGraph";

export default {
  title: "Global Elements/DonutGraph",
  component: DonutGraph,
  argTypes: {
    percent: { name: "Percent", control: { type: "number", min: 0.05, max: 1, step: 0.05 } },
    r: { name: "Radius", control: { type: "number", min: 20 } },
    ir: { name: "Inner Radius", control: { type: "number", min: 0.05, max: 1, step: 0.05 } },
    s: { name: "Stroke", control: { type: "number" } },
  },
};

const Template = ({ text, ...args }) => (
  <div className="w-32 h-32">
    <DonutGraph {...args} />
  </div>
);

export const DonutGraphStory = Template.bind({});
DonutGraphStory.args = {
  percent: 0.75,
  r: 20,
  ir: 0.85,
  s: 1,
};
DonutGraphStory.storyName = "Donut Graph";
