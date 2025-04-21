export const ExpertiseTag = ({ name, icon, tag = "li", showName = false }) => {
  const Tag = tag;
  return (
    <Tag key={name} className="text-xs flex gap-2 items-center">
      <div className="w-6 h-6 rounded-full overflow-hidden border border-s2-lt2">
        <img src={icon} alt={`${name} Icon`} />
      </div>
      <span className={showName ? "" : "sr-only"}>{name}</span>
    </Tag>
  );
};
