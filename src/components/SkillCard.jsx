import { useState } from "react";
import DonutGraph from "./DonutGraph";

export default function SkillCard({ skill }) {
  const [imgSrc, setImgSrc] = useState(`/assets/images/logos/${skill.id}.svg`);
  const handleImageError = () => {
    console.log("error?");
    setImgSrc(false);
  };
  return (
    <div className="text-reg leading-reg text-center">
      <div class="relative max-w-42 max-h-42 aspect-square mx-auto">
        <DonutGraph className="size-full my-0 relative z-10" percent={skill.level / 100} />
        {imgSrc && (
          <figure className="w-full h-full absolute top-0 left-0 rounded-full overflow-hidden flex items-center justify-center">
            <img src={imgSrc} onError={handleImageError} className="size-logo object-contain" />
          </figure>
        )}
      </div>
      <span>{skill.skill}</span>
    </div>
  );
}
