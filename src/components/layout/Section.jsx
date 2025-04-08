export const Section = ({ className, children, tag = "section", fullwidth = false, id }) => {
  const Tag = tag;
  return (
    <Tag id={id} className={className}>
      {fullwidth ? <>{children}</> : <div className="max-w-c px-16 desktopXl:px-5 m-auto">{children}</div>}
    </Tag>
  );
};
