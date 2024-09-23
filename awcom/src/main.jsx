import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <p class="text-sm-m md:text-sm leading-sm">Hello</p>
      <p class="text-base-m md:text-base leading-base">Hello</p>
      <p class="text-lg-m md:text-lg leading-lg">Hello</p>
      <p class="text-xl-m md:text-xl leading-xl">Hello</p>
      <p class="text-xl-m md:text-2xl leading-2xl">Hello</p>
      <p class="text-3xl-m md:text-3xl leading-3xl">Hello</p>
    </>
  </StrictMode>
);
