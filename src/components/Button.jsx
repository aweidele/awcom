export function Button({ children, target, tag = "a", newWindow = false, extraClasses }) {
  const Tag = tag;
  return (
    <Tag href={target} target={newWindow ? "_blank" : null} className={`bg-p2 hover:bg-p2-dk text-black font-sans text-xs md:text-reg uppercase inline-block px-4 py-3 md:px-8 mt-5 duration-300 max-md:w-full max-md:text-center ${extraClasses}`}>
      {children}
    </Tag>
  );
}
