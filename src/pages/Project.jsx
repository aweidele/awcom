import { NavLink, useRouteLoaderData } from "react-router-dom";
import { InteriorHero } from "../components/elements/InteriorHero";
import { Section } from "../components/layout/Section";
import { ProjectPost } from "../components/elements/ProjectPost";

export const Project = () => {
  const { project } = useRouteLoaderData("project-slug");
  console.log("<Project />", project);
  return (
    <>
      <InteriorHero line1="Project" title={project.title.rendered}>
        <NavLink to="/projects" className="text-xs translate-y-20">
          Back to projects
        </NavLink>
      </InteriorHero>
      <ProjectPost {...project} />
    </>
  );
};

export const projectLoader = async ({ request, params }) => {
  const slug = params.slug;
  const response = await fetch(`https://blog.aaronweidele.com/wp-json/wp/v2/projects?slug=${slug}`);
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch select project details" }), { status: 500 });
  } else {
    const resData = await response.json();
    return { project: resData[0] };
  }
};
