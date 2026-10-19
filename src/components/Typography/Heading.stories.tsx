import HeadingAstroComponent, { type HeadingProps } from "./Heading.astro";

type HeadingStoryArgs = HeadingProps;

export default {
  title: 'Components/Typography/Heading',
  component: HeadingAstroComponent,
  argTypes: {
    l: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6],
      name: "Level"
    },
    className: {
      control: "text",
      name: "Class Name"
    },
  },
};

export const Heading = {
  args: {
    l: 2,
    slots: { default: 'Consectetur adipiscing elit sed do' }
  } satisfies HeadingStoryArgs
};

export const H1 = {
  args: {
    l: 1,
    slots: { default: 'Lorem ipsum dolor sit amet' }
  } satisfies HeadingStoryArgs
};

export const H2 = {
  args: {
    l: 2,
    slots: { default: 'Consectetur adipiscing elit sed do' }
  } satisfies HeadingStoryArgs
};

export const H3 = {
  args: {
    l: 3,
    slots: { default: 'Eiusmod tempor incididunt ut labore' }
  } satisfies HeadingStoryArgs
};

export const H4 = {
  args: {
    l: 4,
    slots: { default: 'Magna aliqua ut enim minim' }
  } satisfies HeadingStoryArgs
};

export const H5 = {
  args: {
    l: 5,
    slots: { default: 'Quis nostrud exercitation ullamco laboris' }
  } satisfies HeadingStoryArgs
};

export const H6 = {
  args: {
    l: 6,
    slots: { default: 'Nisi ut aliquip ex ea' }
  } satisfies HeadingStoryArgs
};
