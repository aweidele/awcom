import { useState } from "react";
import DonutGraph from "./DonutGraph";

export default function SkillCard({ skill }) {
  const [imgSrc, setImgSrc] = useState(`/assets/images/logos/${skill.id}.svg`);
  const handleImageError = () => {
    console.log("error?");
    setImgSrc(false);
  };
  return (
    <div className="text-xs font-sans leading-reg text-center inline-flex flex-col">
      <div class="relative max-w-42 max-h-42 aspect-square mx-auto mb-2.5">
        <DonutGraph className="size-full my-0 relative z-10" percent={skill.level / 100} />
        {imgSrc && (
          <figure className="size-full absolute top-0 left-0 flex items-center justify-center">
            <div class="size-logo rounded-full overflow-hidden">
              <img src={imgSrc} onError={handleImageError} className="size-full object-contain" />
            </div>
          </figure>
        )}
      </div>
      <span>{skill.skill}</span>
    </div>
  );
}
