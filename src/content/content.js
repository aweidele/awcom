import home from "./sections/home.json";
import { workExperience } from "./sections/skills-experience";

export const backgrounds = ["bg-p", "bg-p2", "bg-s", "bg-a1", "bg-s2", "bg-a2"];
export const backgroundsDk = ["bg-p-dk", "bg-p2-dk", "bg-s-dk", "bg-a1-dk", "bg-s2-dk", "bg-a2-dk"];
export const borders = ["border-p", "border-p2", "border-s", "border-a1", "border-s2", "border-a2"];
export const bordersDk = ["border-p-dk", "border-p2-dk", "border-s-dk", "border-a1-dk", "border-s2-dk", "border-a2-dk"];

export const bgAfter = ["after:bg-p", "after:bg-p2", "after:bg-s", "after:bg-a1", "after:bg-s2", "after:bg-a2"];

export const sections = [
  {
    title: "Home",
    content: home,
    component: "home",
  },
  {
    title: "Work Experience",
    content: workExperience,
    component: "work",
  },
];
