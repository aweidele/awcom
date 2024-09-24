export default function Heading({ l, children }) {
  const level = parseInt(l);
  const Tag = level <= 4 ? `h${level}` : `h4`;
  let classes = "font-sans";
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

/*
      <p className="text-sm-m md:text-sm leading-sm">Hello</p>
      <p className="text-base-m md:text-base leading-base">Hello</p>
      <p className="text-lg-m md:text-lg leading-lg">Hello</p>
      <p className="text-xl-m md:text-xl leading-xl">Hello</p>
      <p className="text-xl-m md:text-2xl leading-2xl">Hello</p>
      <p className="text-3xl-m md:text-3xl leading-3xl">Hello</p>
      */
