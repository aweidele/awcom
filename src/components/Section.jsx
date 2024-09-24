export default function Section({ className, children }) {
  return (
    <section className={className}>
      <div className="max-w-c px-5 m-auto">{children}</div>
    </section>
  );
}
