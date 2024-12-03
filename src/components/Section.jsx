import { Fragment } from "react";
export default function Section({ className, children, tag = "section", fullwidth = false }) {
  const Tag = tag;
  return <Tag className={className}>{fullwidth ? <Fragment>{children}</Fragment> : <div className="max-w-c px-16 desktopXl:px-5 m-auto">{children}</div>}</Tag>;
}
