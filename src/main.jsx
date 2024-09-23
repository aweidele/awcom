import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <p className="text-sm-m md:text-sm leading-sm">Hello</p>
      <p className="text-base-m md:text-base leading-base">Hello</p>
      <p className="text-lg-m md:text-lg leading-lg">Hello</p>
      <p className="text-xl-m md:text-xl leading-xl">Hello</p>
      <p className="text-xl-m md:text-2xl leading-2xl">Hello</p>
      <p className="text-3xl-m md:text-3xl leading-3xl">Hello</p>
      <div className="flex gap-2">
        {["bg-p", "bg-p2", "bg-s", "bg-s2", "bg-a1", "bg-a2"].map((bg, i) => (
          <div className="text-center">
            <div key={i} className={`h-8 w-8 ${bg}`}></div>
            <div className="text-[10px]">{bg}</div>
          </div>
        ))}
      </div>
    </>
  </StrictMode>
);
