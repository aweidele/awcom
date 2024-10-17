import Section from "./Section";
import { SmallText } from "./SmallText";
import { DownArrow } from "./Icons";
import Grid from "./Grid";

export default function Home({ content }) {
  console.log(content);
  const { line1, line2, scrollText } = content;
  return (
    <Section className="bg-p2 text-white relative overflow-hidden before:w-[102%] before:aspect-square before:absolute before:-left-1/2 before:bottom-0 before:content-[''] before:rounded-full before:bg-p2-dk before:translate-y-[35%] before:translate-x-[4.5%]">
      <div className="min-h-home relative flex items-end w-full pb-[15%]">
        <div>
          <Grid>
            <h1 className="col-span-12 lg:col-span-10 lg:col-start-2 text-center lg:grid lg:grid-cols-subgrid">
              <span className="col-span-10 home-intro text-3xl-m md:text-3xl leading-3xl uppercase font-bold font-sans">{line1}</span>
              <span className="col-span-6 col-start-3 block">{line2}</span>
            </h1>
          </Grid>
          <SmallText className="mt-5">
            <a href="#" className="text-center flex flex-col items-center gap-2.5">
              <span className="flex items-center justify-center w-[44px] h-[44px] border border-white bg-p-20 rounded-full">
                <DownArrow className="w-[28px] h-[16px] fill-white" />
              </span>
              <span>{scrollText}</span>
            </a>
          </SmallText>
        </div>
      </div>
    </Section>
  );
}
