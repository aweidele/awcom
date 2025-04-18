import Grid from "../layout/Grid";
import { Section } from "../layout/Section";

export const ProjectPost = ({ content, skills, acf }) => {
  return (
    <Section className="blog-post py-16">
      <Grid>
        <div className="col-span-2">Sidebar</div>
        <div className="col-span-8">
          <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
        </div>
      </Grid>
    </Section>
  );
};
