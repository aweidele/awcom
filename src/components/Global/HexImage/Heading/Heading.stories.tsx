import HeadingAstroComponent, { type Props as HeadingProps } from "./Heading.astro";

export default {
  title: 'Global/Typography/Headings',
  component: HeadingAstroComponent,
  argTypes: {
    level: {
      control: { type: "number", min: 1, max: 6, step: 1 },
    },
    className:{
      control: { type: "text" },
    }
  }
}

export const Heading_1 = {
  args: {
    level: 1,
  } satisfies HeadingProps
};

export const Heading_2 = {
  args: {
    level: 2
  } satisfies HeadingProps
};

export const Heading_3 = {
  args: {
    level: 3
  } satisfies HeadingProps
};

export const Heading_4 = {
  args: {
    level: 4
  } satisfies HeadingProps
};

export const Heading_5= {
  args: {
    level: 5
  } satisfies HeadingProps
};

export const Heading_6 = {
  args: {
    level: 6
  } satisfies HeadingProps
};