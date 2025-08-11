import { motion as Motion} from "framer-motion";

import PricingCard from "../Components/PricingCard";
import { useFadeInOnView } from "../utils/Animations/useFadeInOnView";
import { slideInLeft2 } from "../utils/Animations/animations";

export default function PricingPlans() {
 const { ref, ...motionText } = useFadeInOnView();  
  return (
    <div
      ref={ref}
      className="section-container"
    >
      <Motion.div
        {...motionText} 
        className="max-w-4xl text-center mb-8"
      >
        <p className="text-sm text-sky-400 font-bold py-8 px-2">
          [<span className="text-sm text-white font-medium">Pricing Plans</span>
          ]
        </p>

        <h1 className="text-5xl font-semibold text-slate-100 leading-tight drop-shadow-md">
          Find the Perfect Fit for Your Business
        </h1>

        <Motion.h5 variants={slideInLeft2(2)} className="text-xl font-semibold text-slate-100 leading-tight drop-shadow-md mt-16">
          Monthly Growth Plans
        </Motion.h5>
      </Motion.div>
      <PricingCard />
    </div>
  );
}
