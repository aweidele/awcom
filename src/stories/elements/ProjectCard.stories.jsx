import { ProjectCard } from "../../components/elements/ProjectCard";

export default {
  title: "Page Elements/Project Card",
  component: ProjectCard,
  render: (args, { loaded: { project } }) => <ProjectCard {...args} {...project[0]} />,
};

export const ProjectCardStory = {
  loaders: [
    async () => ({
      project: await (await fetch("https://blog.aaronweidele.com/wp-json/wp/v2/projects")).json(),
    }),
  ],
  args: {},
  storyName: "Project Card Full",
};
