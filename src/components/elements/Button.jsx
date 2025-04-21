export function Button({ children, target, tag = "a", newWindow = false, extraClasses, color = "p2", size = "reg" }) {
  const Tag = tag;
  const sizeClass = size && size === "sm" ? "px-2 py-1 md:px-4" : "px-4 py-3 md:px-8";
  const bgClass = color && color === "p" ? "bg-s hover:bg-s2 text-white" : "bg-p2 hover:bg-p2-dk text-black";
  return (
    <Tag href={target} target={newWindow ? "_blank" : null} className={`btn ${bgClass} font-sans text-xs md:text-reg uppercase inline-block ${sizeClass} mt-5 duration-300 max-md:w-full max-md:text-center ${extraClasses}`}>
      {children}
    </Tag>
  );
}
