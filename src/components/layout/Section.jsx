export const Section = ({ className, children, tag = "section", fullwidth = false, id, padding = "lg" }) => {
  const Tag = tag;
  const paddingClasses = {
    sm: "px-4",
    md: "px-8",
    lg: "px-16",
  };
  return (
    <Tag id={id} className={className}>
      {fullwidth ? <>{children}</> : <div className={`max-w-c ${paddingClasses[padding]} desktopXl:px-5 m-auto`}>{children}</div>}
    </Tag>
  );
};
