import { Section } from "../../components/layout/Section";
import Grid from "../../components/layout/Grid";
import { Desktop } from "../../components/elements/Desktop";
import { portfolio } from "../../content/sections/portfolio";
const { images, video } = portfolio.portfolio[1];

export default {
  title: "Homepage Elements/Portfolio",
  component: Desktop,
};

const Template = ({ images, video }) => (
  <Section>
    <Grid>
      <div className="col-span-6 max-md:my-10">
        <Desktop images={images} video={video} />
      </div>
    </Grid>
  </Section>
);

export const DesktopStory = Template.bind({});

DesktopStory.args = { images: images, video: video };
DesktopStory.storyName = "Desktop";
