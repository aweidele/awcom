import desktop from "/assets/images/imac.svg";
import { useRef, useEffect, useState } from "react";
import { useIsVisible } from "../utils/useIsVisible";

export function Desktop({ images, video }) {
  const ref = useRef();
  const vidRef = useRef();
  const [isViewed, setIsViewed] = useState(false);

  const isVisible = useIsVisible(ref);

  useEffect(() => {
    if (isVisible && isViewed) {
      vidRef.current.play();
    } else if (isVisible && !isViewed) {
      setIsViewed(true);
    } else if (isViewed) {
      vidRef.current.pause();
    }
  }, [isVisible]);

  const slides = images.map((img) => {
    const type = img.split(".").pop();
    return {
      image: type === "mp4" || type === "webm" ? `/assets/video/${img}` : `/assets/images/portfolio/${img}`,
      format: type === "mp4" || type === "webm" ? "video" : "image",
    };
  });
  console.log(slides);
  return (
    <>
      <div className="grid grid-cols-1 grid-rows-1" ref={ref}>
        <div className="row-start-1 col-start-1 p-[3%]">
          {video && isViewed && (
            <div>
              <video ref={vidRef} autoPlay={true} muted={true} loop>
                <source src={`/assets/video/${video}`} type="video/mp4" />
              </video>
            </div>
          )}
          {video && !isViewed && (
            <div>
              <img src={slides[0].image} />
            </div>
          )}
          {!video &&
            slides.map((slide) => (
              <div key={slide.image}>
                <div>
                  <img src={slide.image} />
                </div>
              </div>
            ))}
        </div>
        <div className="row-start-1 col-start-1">
          <img src={desktop} />
        </div>
      </div>
    </>
  );
}
