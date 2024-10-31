import Section from "./Section";
import Grid from "./Grid";
import Heading from "./Heading";
import { Fragment } from "react";
import { nl2p, nl2array } from "../utils/fontsizes";

export function Portfolio({ content }) {
  console.log(content);
  const containerClasses = `max-w-c px-5 m-auto`;
  const paddingClasses = `pt-60 pb-10`;
  const bgClasses = ["bg-s", "bg-s2"];
  return (
    <Section fullwidth={true}>
      {content.map((work, i) => (
        <div key={work.id} className={`text-white ${paddingClasses} ${bgClasses[i % 2]} relative`}>
          <div className={`${containerClasses} `}>
            <Grid>
              <div className="col-span-6">
                <Heading l={4}>{work.title}</Heading>
                {nl2array(work.description).map((paragraph) => (
                  <p className="mb-04em">{paragraph}</p>
                ))}
              </div>
            </Grid>
          </div>
        </div>
      ))}
    </Section>
  );
}
