import { ProjectCard } from "../../components/elements/ProjectCard";

export default {
  title: "Page Elements/Project Card",
};

const Template = ({ text, ...args }) => <ProjectCard {...args} />;
export const ProjectCardStory = Template.bind({});
ProjectCardStory.storyName = "Project Card";
ProjectCardStory.args = { acf: [], featured_image_url: "", skills: [], title: "", slug: "", excerpt: "" };
