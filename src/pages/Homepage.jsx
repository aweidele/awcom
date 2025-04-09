import { Sections } from "../components/homepage/Sections";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const Homepage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      console.log(hash, el);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);

  return <Sections />;
};
