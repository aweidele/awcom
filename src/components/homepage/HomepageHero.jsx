import { Section } from "../layout/Section";
import Grid from "../layout/Grid";
import { DownArrow } from "../elements/Icons";
import { SmallText } from "../elements/SmallText";
import border from "../../assets/images/border.svg";

export const HomepageHero = ({ line1, line2, scrollText }) => {
  return (
    <Section className="bg-p2 text-white relative z-10 home-container">
      <div className="circle-bg"></div>
      <div className="min-h-home relative flex items-center md:items-end w-full md:pb-[15%]">
        <div className="w-full">
          <Grid>
            <h1 className="col-span-12 lg:col-span-10 lg:col-start-2 text-center grid grid-cols-subgrid">
              <span className="home-intro text-3xl-m md:text-3xl leading-3xl uppercase font-bold font-sans col-span-12 lg:col-span-10">{line1}</span>
              <span className="block col-span-12 lg:col-span-6 lg:col-start-3">{line2}</span>
            </h1>
          </Grid>
          <SmallText className="mt-5">
            <a href="" className="text-center flex flex-col items-center gap-2.5">
              <span className="flex items-center justify-center w-7 md:w-[44px] h-7 md:h-[44px] border border-white bg-p-20 rounded-full">
                <DownArrow className="w-3.5 h-2 md:w-7 md:h-4 fill-white" />
              </span>
              <span>{scrollText}</span>
            </a>
          </SmallText>
        </div>
      </div>
    </Section>
  );
};
