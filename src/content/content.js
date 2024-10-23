import home from "./sections/home.json";
import { workExperience } from "./sections/skills-experience";

export const backgrounds = ["bg-p", "bg-p2", "bg-s", "bg-s2", "bg-a1", "bg-a2"];
export const backgroundsDk = ["bg-p-dk", "bg-p2-dk", "bg-s-dk", "bg-s2-dk", "bg-a1-dk", "bg-a2-dk"];

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
