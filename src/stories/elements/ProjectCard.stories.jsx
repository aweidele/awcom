import { ProjectCard } from "../../components/elements/ProjectCard";

export default {
  title: "Page Elements/Project Card",
  component: ProjectCard,
  render: (args, { loaded: { todo } }) => <ProjectCard {...args} {...todo[0]} />,
};

export const ProjectCardStory = {
  loaders: [
    async () => ({
      todo: await (await fetch("https://blog.aaronweidele.com/wp-json/wp/v2/projects")).json(),
    }),
  ],
};
ProjectCardStory.storyName = "Project Card Full";
