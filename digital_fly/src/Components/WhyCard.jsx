// import React from 'react'

// const WhyCard =({ title, children, icon }) => {

//   return (
//     <div
//       className="relative w-full rounded-2xl p-8 shadow-md ring-1 ring-white/10 transition-all flex flex-col justify-between items-center text-center bg-slate-900 text-slate-200 hover:bg-accent hover:text-white hover:shadow-lg duration-300"
//       style={{ minHeight: '360px' }}
//     >
//       <div className="flex flex-col h-full w-full">
//         <div className="flex flex-col items-center gap-4">
//           <div className="w-12 h-12 flex items-center justify-center">
//             {icon}
//           </div>
//           <h3 className="text-2xl font-semibold">{title}</h3>
//         </div>
//         <div className="mt-4 flex-1">
//           <p className="leading-relaxed text-base">{children}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyCard

import { motion as Motion} from "framer-motion";
import { useFadeInOnView } from "../utils/Animations/useFadeInOnView";
import { cardVariants } from "../utils/Animations/animations";



const WhyCard = ({ title, children, icon,index }) => {
const { ref, ...motionCard } = useFadeInOnView(cardVariants(+index*0.15));  

  return (
    <Motion.div
      ref={ref}
     {...motionCard}
    
      style={{
        minHeight: "360px",
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
     className="relative w-full rounded-2xl p-8 shadow-md ring-1 ring-white/10 flex flex-col justify-between items-center text-center bg-card-bg2 text-slate-200 hover:text-white hover:shadow-lg hover:bg-card-hover"

    >
      <div className="flex flex-col h-full w-full">
        <div className="flex flex-col items-center gap-4">
          <div className="w-14 h-14 flex items-center justify-center bg-accent/10 rounded-full text-accent text-2xl shadow-inner">
            {icon}
          </div>
          <h3 className="text-2xl font-semibold">{title}</h3>
        </div>
        <div className="mt-4 flex-1">
          <p className="leading-relaxed text-base opacity-90">{children}</p>
        </div>
      </div>
    </Motion.div>
  );
};

export default WhyCard;
