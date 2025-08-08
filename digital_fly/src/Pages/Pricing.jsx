import React, { useEffect } from "react";
import { motion as Motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Services from "../Components/Services";
import PricingCard from "../Components/PricingCard";

export default function PricingPlans() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, y: 200, scale: 1.3 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1 } },
  };

  return (
    <div
      ref={ref}
      className="w-full bg-page-bg py-20 px-6 flex flex-col items-center"
    >
      <Motion.div
        initial="hidden"
        animate={controls}
        variants={textVariants}
        className="max-w-4xl text-center mb-8"
      >
        <p className="text-sm text-sky-400 font-bold py-8 px-2">
          [<span className="text-sm text-white font-medium">Pricing Plans</span>
          ]
        </p>

        <h1 className="text-5xl font-semibold text-slate-100 leading-tight drop-shadow-md">
          Find the Perfect Fit for Your Business
        </h1>

        <h5 className="text-xl font-semibold text-slate-100 leading-tight drop-shadow-md mt-16">
          Monthly Growth Plans
        </h5>
      </Motion.div>
      <PricingCard />
    </div>
  );
}
