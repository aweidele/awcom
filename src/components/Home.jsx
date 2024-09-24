import Section from "./Section";
import Grid from "./Grid";

export default function Home({ content }) {
  console.log(content);
  const { line1, line2, scrollText } = content;
  return (
    <Section className="bg-p2 text-white">
      <div className="min-h-home relative flex items-center w-full">
        <Grid>
          <h1 className="col-span-12 lg:col-span-10 lg:col-start-2 text-center lg:grid lg:grid-cols-subgrid">
            <span className="col-span-10 home-intro text-3xl-m md:text-3xl leading-3xl uppercase font-bold font-sans">{line1}</span>
            <span className="col-span-6 col-start-3 block">{line2}</span>
          </h1>
        </Grid>
      </div>
    </Section>
  );
}
