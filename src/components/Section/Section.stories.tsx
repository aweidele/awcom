import SectionAstroComponent, { type SectionProps } from "./Section.astro";

export default {
  title: 'Components/Section',
  component: SectionAstroComponent,
  argTypes: {
    width: {
      control: "select", 
      options: ["x-wide","wide","medium","narrow"], 
      name: "Width" 
    },
    bgColor: {
      control: "select", 
      options: ["primary","secondary","secondary-dk","accent-1","accent-1-md","accent-1-dk","gray-lt","gray-dk"], 
      name: "Background Color" 
    },
  },
};

export const Section = {
  	args: {
      width: 'wide'
    }  satisfies SectionProps
};