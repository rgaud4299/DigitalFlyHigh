
// import React from 'react'

// const OurServicesCard =({ title, children, icon }) => {

//   return (
//     <div
//       className="relative w-full rounded-2xl p-8 shadow-md ring-1 ring-white/10 transition-all flex flex-col justify-between items-center text-center bg-card-bg2 text-slate-200 hover:bg-accent hover:text-white hover:shadow-lg duration-300"
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
 
// export default OurServicesCard














import React, { useRef } from 'react';
import { motion as Motion, useInView } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 1.09 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1], // smooth easing
    },
  },
};
const OurServicesCard =({ title, children, icon }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-100px' });

  return (
    <Motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      whileHover={{
        scale: 1.03,
        rotateX: 3,
        rotateY: -3,
        boxShadow: '0 15px 40px rgba(0, 255, 255, 0.2)',
        transition: { duration: 0.4 },
      }}
      className="relative w-full rounded-2xl p-8 shadow-md ring-1 ring-white/10 flex flex-col justify-between items-center text-center bg-card-bg2 text-slate-200 hover:text-white hover:shadow-lg hover:bg-accent"
      style={{ minHeight: '360px', perspective: '1000px', transformStyle: 'preserve-3d' }}
    >
      <div className="flex flex-col h-full w-full">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center">
            {icon}
          </div>
          <h3 className="text-2xl font-semibold">{title}</h3>
        </div>
        <div className="mt-4 flex-1">
          <p className="leading-relaxed text-base">{children}</p>
        </div>
      </div>
    </Motion.div>   
  );
};    
 
export default OurServicesCard
