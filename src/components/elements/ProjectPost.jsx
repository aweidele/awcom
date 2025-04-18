import Grid from "../layout/Grid";
import { Section } from "../layout/Section";

export const ProjectPost = ({ content, skills, acf }) => {
  return (
    <Section className="blog-post py-16">
      <Grid>
        <div className="col-span-2">
          <h3 className="font-semibold">Relevant skills</h3>
          <ul className="mb-4 max-sm:columns-2 max-md:columns-3">
            {skills.map((skill) => (
              <li key={skill.slug} className="text-xs flex gap-2 items-center">
                <div className="w-6 h-6 rounded-full overflow-hidden border border-s2-lt2">
                  <img src={skill.icon} alt={`${skill.name} Icon`} />
                </div>
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-10 lg:col-span-8">
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: content.rendered }} />
        </div>
      </Grid>
    </Section>
  );
};
