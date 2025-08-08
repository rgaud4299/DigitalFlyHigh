
import {
  FaLaptopCode,
  FaShoppingCart,
  FaPaintBrush,
  FaVideo,
} from "react-icons/fa";


import ProjectBasedCard from '../Components/ProjectBasedCard';

export default function ProjectBasedSolutions() {
  // const containerRef = useRef(null);
  // const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div className="w-full bg-page-bg pt-5 px-6 flex flex-col items-center">
      <div className="max-w-4xl text-center mb-0">
        <h4 className="text-4xl font-semibold text-slate-100 leading-tight drop-shadow-md my-0">
          Project-Based Solutions
        </h4>
      </div>
<section className="py-8 px-4 sm:px-6 md:px-24 lg:px-28 ">
   
        {/* <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {services.map((card, index) => (
         

              <Motion.div
                className="bg-[#141a3a] p-6 rounded-xl shadow-lg flex flex-col justify-between text-white hover:scale-105 transition"
                whileHover={{ y: -5 }}
                   key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex flex-col gap-4">
                  <card.icon className="text-cyan-400 text-5xl mx-auto" />
                  <h3 className="text-xl font-semibold text-center">
                    {card.title}
                  </h3>
                  <p className="text-center text-gray-400">
                    {card.description}
                  </p>
                  <div className="mt-4 space-y-3">
                    {card.packages.map((item, index) => (
                      <div key={index}>
                        <p className="font-semibold">{item.name}:</p>
                        <p className="text-gray-300">Starts at ₹{item.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-4 rounded-lg mx-auto">
                  {card.buttonText}
                </button>
              </Motion.div>
          ))}
        </div> */}
<ProjectBasedCard/>
        
      </section>
    </div>
  );
}














// export default function ProjectBasedCard({
//   title,
//   description,
//   tiers, // array of { label: string, price: string }
//   ctaText = 'REQUEST A QUOTE',
//   icon, // JSX icon
// }) {
//   return (
//     <div
//       tabIndex={0}
//       aria-label={title}
//       className="relative w-full rounded-2xl p-8 shadow-md ring-1 ring-white/10 transition-all flex flex-col justify-between bg-card-bg text-text-primary hover:bg-accent hover:shadow-lg duration-300"
//       style={{ minHeight: '480px' }}
//     >
//       <div className="flex flex-col h-full">
//         <div className="mb-6 flex flex-col items-center text-center gap-3">
//           {icon && <div className="w-10 h-10 flex items-center justify-center text-accent">{icon}</div>}
//           <h3 className="text-2xl font-semibold text-white">{title}</h3>
//           <p className="text-sm leading-relaxed max-w-[400px]">{description}</p>
//           <div className="w-full border-t border-[rgba(255,255,255,0.2)] my-4" />
//         </div>

//         <div className="flex-grow">
//           <div className="space-y-3 text-sm mb-8">
//             {tiers.map((tier, i) => (
//               <div key={i} className="flex flex-col">
//                 <span className="font-semibold text-white">{tier.label}:</span>
//                 <span>
//                   <span className="font-bold">{tier.price}</span>
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mt-4">
//           <button
//             className="w-full py-3 rounded-md font-semibold tracking-wider uppercase bg-accent text-white hover:bg-[#178de6] transition"
//           >
//             {ctaText}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }  