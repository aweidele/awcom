import { backgrounds, backgroundsDk } from "../content/content";
export function ExperienceCard({ item, index }) {
  return (
    <li key={item.name} className={`w-full flex my-6 gap-5 items-center after:content-[""] after:h-px after:bg-black after:w-20`}>
      <h4 className={`w-42 h-42 flex items-center justify-center text-reg text-white ${backgrounds[index % 6]} rounded-full font-sans`}>{item.start}</h4>
      <p class="grow order-3">
        <span className="text-xs font-sans font-bold block">{item.title}</span>
        <span className="block text-sm font-sans">{item.name}</span>
      </p>
      <div className={`w-2 h-5 skew-y-12 ${backgrounds[index % 6]}`}></div>
      <div className={`size-3 ${backgroundsDk[index % 6]}`}></div>
    </li>
  );
}
