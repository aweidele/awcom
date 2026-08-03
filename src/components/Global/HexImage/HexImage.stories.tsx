import HexImageAstroComponent from "./HexImage.astro";
import * as Logos from "../../../logos";

export default {
  title: 'Global/Hex Image',
  component: HexImageAstroComponent,
  argTypes: {
    width: {
      control: "number",
      name: "Width"
    },
    image: {
      control: "select",
      name: "Image",
      options: Object.keys(Logos),
      mapping: Logos
    },
    strokeColor: {
      control: "color",
      name: "Stroke Color"
    }
  }
}

export const HexImage = {
  args: {
    width: 115,
    image: "javascriptLogo",
    strokeColor: "#ae9e32"
  }
};