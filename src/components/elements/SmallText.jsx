export function SmallText({ tag = "p", children, className }) {
  const Tag = tag;
  return <Tag className={`font-sans text-sm-m lg:text-sm uppercase font-extralight ${className}`}>{children}</Tag>;
}
