export default function Grid({ children, extraClasses }) {
  return <div className={`w-full md:grid grid-cols-12 gap-5 ${extraClasses ? extraClasses : ""}`}>{children}</div>;
}
