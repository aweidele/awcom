import { useRouteLoaderData } from "react-router-dom";
import { InteriorHero } from "../components/elements/InteriorHero";
import { Section } from "../components/layout/Section";

export const Project = () => {
  const { project } = useRouteLoaderData("project-slug");
  console.log("<Project />", project);
  return (
    <>
      <InteriorHero line1="Project" title={project.title.rendered} />
      <Section className="py-32"></Section>
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
