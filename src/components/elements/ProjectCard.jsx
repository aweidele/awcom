import { ExpertiseTag } from "./ExpertiseTag";
import { ExternalLink, StorybookLogo, GitHubLogo } from "./Icons";

export const ProjectCard = ({ acf, featured_image_url, skills, title, excerpt }) => {
  console.log(acf);
  return (
    <div className="lg:flex sm:flex-row-reverse gap-10 my-5 border p-5">
      <div className="max-w-md shrink-0">
        {featured_image_url && (
          <a href={acf.project_link} target="_blank" className="block aspect-project">
            <img src={featured_image_url} alt={title.rendered} className="w-full h-full object-cover" />
          </a>
        )}
      </div>
      <div className="flex gap-5 flex-col justify-between max-lg:mt-5">
        <div>
          <h3 className="text-sm font-semibold">{title.rendered}</h3>
          <div className="text-reg" dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
        </div>
        <div>
          <div className="sm:flex gap-2.5">
            <h4 className="text-xs font-semibold">Expertise:</h4>
            <ul className="flex gap-2.5 mb-2.5 flex-wrap">
              {skills.map((skill) => (
                <ExpertiseTag {...skill} />
              ))}
            </ul>
          </div>
          <div className="sm:flex justify-between items-center">
            <div className="max-sm:mb-5">
              <a href={acf.project_link} aria-label={`Launch Project: ${title.rendered}`} className="text-xs border border-p2 hover:bg-p2 inline-flex py-1 px-2 items-center gap-2 transition-all">
                <span>Launch project</span>
                <ExternalLink className="w-2.5 h-2.5 fill-current" />
              </a>
            </div>
            {acf.links && (
              <ul className="flex sm:block lg:flex gap-2.5">
                {acf.links.map((link) => (
                  <li key={link.url}>
                    <a href={link.url} aria-label={`${link.link_type}: ${title.rendered}`} target="_blank" className="inline-flex gap-1 text-xs hover:text-p2 items-center transition-all">
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
    </div>
  );
};
