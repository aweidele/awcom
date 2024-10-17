import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Header } from "./components/Header";
import Sections from "./components/Sections";
import { sections } from "./content/content";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <Header sections={sections} />
      <Sections sections={sections} />
      <div className="flex gap-2">
        {["bg-p", "bg-p2", "bg-s", "bg-s2", "bg-a1", "bg-a2"].map((bg, i) => (
          <div key={i} className="text-center">
            <div className={`h-8 w-8 ${bg}`}></div>
            <div className="text-[10px]">{bg}</div>
          </div>
        ))}
      </div>
    </>
  </StrictMode>
);
