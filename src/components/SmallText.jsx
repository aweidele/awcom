export function SmallText({ tag = "p", children, className }) {
  const Tag = tag;
  return <Tag className={`font-sans text-sm uppercase ${className}`}>{children}</Tag>;
}
