import { InteriorHero } from "../components/elements/InteriorHero";
import { Section } from "../components/layout/Section";
import Grid from "../components/layout/Grid";
import { useLoaderData } from "react-router-dom";
import Heading from "../components/elements/Heading";
import { ExternalLink, GitHubLogo, StorybookLogo } from "../components/elements/Icons";
import { ProjectCard } from "../components/elements/ProjectCard";

import { portfolio } from "../content/sections/portfolio";
import { Portfolio } from "../components/homepage/Portfolio";

export const Projects = () => {
  const { projects } = useLoaderData();
  console.log(projects);
  return (
    <>
      <InteriorHero title="Projects" />
      <Section className="py-24">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </Section>
      <Portfolio {...portfolio} />
    </>
  );
};

export const projectsLoader = async () => {
  const response = await fetch(`https://blog.aaronweidele.com/wp-json/wp/v2/projects`);
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch select projects" }), { status: 500 });
  } else {
    const resData = await response.json();
    return { projects: resData };
  }
};
