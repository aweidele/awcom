export default function Heading({ l = 2, className, children }) {
  const level = parseInt(l);
  const Tag = level <= 4 ? `h${level}` : `h4`;
  let classes = `font-sans ${className}`;
  switch (level) {
    case 1:
      classes = `${classes} text-3xl-m md:text-3xl leading-3xl uppercase font-bold`;
      break;
    case 2:
      classes = `${classes} text-xl-m md:text-2xl leading-2xl font-bold`;
      break;
    case 3:
      classes = `${classes} text-xl-m md:text-xl leading-xl`;
      break;
    default:
      classes = `${classes} text-lg-m md:text-lg leading-lg font-bold`;
      break;
  }
  return <Tag className={classes}>{children}</Tag>;
}
