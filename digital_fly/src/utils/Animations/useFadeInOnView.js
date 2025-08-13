// useFadeInOnView.js
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import {  defaultOptions, staggerContainer2 } from "./animations";

export function useFadeInOnView(
  variants = staggerContainer2(),
  options = defaultOptions
) {
  const controls = useAnimation(); 

  const [ref, inView] = useInView({
    triggerOnce: options.once,
    threshold: options.threshold
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!options.once) {
      controls.start("hidden");
    }
  }, [inView, controls, options.once]);

  return {
    ref,
    initial: "hidden",
    animate: controls,
    variants
  };
}
