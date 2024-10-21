import SkillCard from "./SkillCard";

export function Skills({ skills }) {
  skills.sort((a, b) => b.level - a.level);
  return (
    <ul className="grid grid-cols-3 gap-5">
      {skills.map((skill) => (
        <li key={skill.id}>
          <SkillCard skill={skill} />
        </li>
      ))}
    </ul>
  );
}
