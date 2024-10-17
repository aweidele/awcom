export default function Grid({ children }) {
  return <div className="w-full md:grid grid-cols-12 gap-5">{children}</div>;
}
