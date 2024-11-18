export function Button({ children, target, tag = "a", newWindow = false }) {
  const Tag = tag;
  return (
    <Tag href={target} target={newWindow ? "_blank" : null} className="bg-p2 text-black font-sans text-reg uppercase inline-block py-5 px-8 mt-5">
      {children}
    </Tag>
  );
}
