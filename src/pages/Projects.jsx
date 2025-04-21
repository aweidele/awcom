import { InteriorHero } from "../components/elements/InteriorHero";
import { Section } from "../components/layout/Section";
import Grid from "../components/layout/Grid";
import { useLoaderData } from "react-router-dom";
import Heading from "../components/elements/Heading";
import { ExternalLink, GitHubLogo, StorybookLogo } from "../components/elements/Icons";

export const Projects = () => {
  const { projects } = useLoaderData();
  console.log(projects);
  return (
    <>
      <InteriorHero title="Projects" />
      <Section className="py-32">
        {projects.map(({ acf, featured_image_url, skills, title, slug, excerpt }) => (
          <div className="flex gap-10 my-5 border p-5" key={slug}>
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-semibold">{title.rendered}</h3>
                <div className="text-reg" dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
              </div>
              <div>
                <div className="flex gap-2.5">
                  <h4 className="text-xs font-semibold">Expertise:</h4>
                  <ul className="flex gap-2.5 mb-2.5">
                    {skills.map((skill) => (
                      <li key={skill.name}>
                        <div className="w-6 h-6 rounded-full overflow-hidden border border-s2-lt2">
                          <img src={skill.icon} alt={`${skill.name} Icon`} />
                        </div>
                        <span className="sr-only">{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <a href={acf.project_link} className="text-xs border border-p2 hover:bg-p2 inline-flex py-1 px-2 items-center gap-2 transition-all">
                      <span>Launch project</span>
                      <ExternalLink className="w-2.5 h-2.5 fill-current" />
                    </a>
                  </div>
                  {acf.links && (
                    <ul className="flex gap-2.5">
                      {acf.links.map((link) => (
                        <li key={link.url}>
                          <a href={link.url} target="_blank" className="inline-flex gap-1 text-xs hover:text-p2 items-center transition-all">
                            {link.link_type === "github" && (
                              <>
                                <GitHubLogo className="w-4 h-4 fill-current" />
                                <span>Github</span>
                              </>
                            )}
                            {link.link_type === "storybook" && (
                              <>
                                <StorybookLogo className="w-4 h-4 fill-current" />
                                <span>Storybook</span>
                              </>
                            )}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <div className="max-w-md shrink-0">
              {featured_image_url && (
                <a href={acf.project_link} target="_blank" className="block aspect-project">
                  <img src={featured_image_url} alt={title.rendered} className="w-full h-full object-cover" />
                </a>
              )}
            </div>
          </div>
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
