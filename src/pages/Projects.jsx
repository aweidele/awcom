import { InteriorHero } from "../components/elements/InteriorHero";
import { Section } from "../components/layout/Section";
import Grid from "../components/layout/Grid";
import { useLoaderData } from "react-router-dom";

export const Projects = () => {
  const { projects } = useLoaderData();
  console.log(projects);
  return (
    <>
      <InteriorHero title="Projects" />
      <Section className="py-32">
        {projects.map(({ acf, featured_image_url, skills, title }) => (
          <div>{title.rendered}</div>
        ))}
      </Section>
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
