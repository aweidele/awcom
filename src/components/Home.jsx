import { useContext } from "react";
import { ContentContext } from "./ContentContext";

import Section from "./Section";
import { SmallText } from "./SmallText";
import { DownArrow } from "./Icons";
import Grid from "./Grid";
import { formatSectionName } from "../utils/formatSectionName";
import border from "../assets/border.svg";

export default function Home({ content }) {
  const { sections } = useContext(ContentContext);
  const { line1, line2, scrollText } = content;
  return (
    <Section className="bg-p2 text-white relative z-10 home-container">
      <div class="circle-bg"></div>
      <div className="min-h-home relative flex items-center md:items-end w-full md:pb-[15%]">
        <div className="w-full">
          <Grid>
            <h1 className="col-span-12 lg:col-span-10 lg:col-start-2 text-center grid grid-cols-subgrid">
              <span className="home-intro text-3xl-m md:text-3xl leading-3xl uppercase font-bold font-sans col-span-12 lg:col-span-10">{line1}</span>
              <span className="block col-span-12 lg:col-span-6 lg:col-start-3">{line2}</span>
            </h1>
          </Grid>
          <SmallText className="mt-5">
            <a href={`#${formatSectionName(sections[1].title, 1)}`} className="text-center flex flex-col items-center gap-2.5">
              <span className="flex items-center justify-center w-[44px] h-[44px] border border-white bg-p-20 rounded-full">
                <DownArrow className="w-[28px] h-[16px] fill-white" />
              </span>
              <span>{scrollText}</span>
            </a>
          </SmallText>
        </div>
      </div>
      <hr className="w-full h-[50px] left-0 -bottom-[25px] absolute border-0" style={{ backgroundImage: `url(${border})` }} />
    </Section>
  );
}
