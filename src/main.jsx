import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Heading from "./components/Heading";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <Heading l="1">This is an H1</Heading>
      <Heading l="2">This is an H2</Heading>
      <Heading l="3">This is an H3</Heading>
      <Heading l="4">This is an H4</Heading>

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
