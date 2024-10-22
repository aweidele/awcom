import SkillCard from "./SkillCard";
import Heading from "./Heading";

export function Skills({ skills }) {
  skills.sort((a, b) => b.level - a.level);
  const highlightSkills = skills.filter((skill) => skill.highlight === true);
  const otherSkills = skills.filter((skill) => !skill.highlight);
  return (
    <>
      <Heading l={3}>My Skills</Heading>
      <ul className="grid grid-cols-4 gap-5">
        {highlightSkills.map((skill) => (
          <li className="text-center" key={skill.id}>
            <SkillCard skill={skill} />
          </li>
        ))}
      </ul>
      <ul className="text-xs font-sans leading-4 columns-3 my-10 gap-5">
        {otherSkills.map((skill) => (
          <li className="mb-2 duration-300 hover:bg-s2-lt" key={skill.id}>
            {skill.skill}
          </li>
        ))}
      </ul>
    </>
  );
}
