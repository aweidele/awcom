import DonutGraph from "./DonutGraph";

export default function SkillCard({ skill }) {
  console.log(skill);
  return (
    <div className="text-reg leading-reg text-center">
      <DonutGraph className="w-42 h-42 m-auto" percent={skill.level / 100} />
      <span>{skill.skill}</span>
    </div>
  );
}
