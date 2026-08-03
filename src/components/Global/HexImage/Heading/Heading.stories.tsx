import HeadingAstroComponent, { type Props as HeadingProps } from "./Heading.astro";

export default {
  title: 'Global/Typography/Heading',
  component: HeadingAstroComponent,
  argTypes: {
    level: {
      control: { type: "number", min: 1, max: 6, step: 1 },
    }
  }
}

export const Heading = {
  args: {
    level: 2
  } satisfies HeadingProps
};