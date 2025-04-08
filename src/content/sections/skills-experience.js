import skills from "./content/skills.json";
import experience from "./content/work-experience.json";

export const workExperience = {
  skills: skills,
  experience: experience.sort((a, b) => a.start - b.start),
};
