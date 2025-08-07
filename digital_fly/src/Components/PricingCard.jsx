// import React, { useRef } from 'react';
// import { motion as Motion, useInView } from 'framer-motion';

// const cardVariants = {
//   hidden: { opacity: 0, y: 20, scale: 1.1 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 1.2,
//       ease: [0.22, 1, 0.36, 1], // smooth easing
//     },
//   },
// };
// export default function PricingCard({
//   title,
//   children,
//   priceLabel,
//   price,
//   frequency,
//   badge,
//   highlighted = false,
//   icon,
//   ctaText = 'Get Started',
//   onCtaClick,
// }) {
//     const cardRef = useRef(null);
//   const isInView = useInView(cardRef, { once: true, margin: '-100px' });

//   return (
//     <Motion.div
//       ref={cardRef}
//       variants={cardVariants}
//       initial="hidden"
//       animate={isInView ? 'visible' : 'hidden'}
//       whileHover={{
//         scale: 1.03,
//         rotateX: 3,
//         rotateY: -3,
//         boxShadow: '0 15px 40px rgba(0, 255, 255, 0.2)',
//         transition: { duration: 0.4 },
//       }}
//       tabIndex={0}
//       aria-label={title}
//       className={`relative w-full rounded-2xl p-8 shadow-md ring-1 ring-white/10 transition-all flex flex-col justify-between text-center ${
//         highlighted
//           ? 'bg-accent text-white'
//           : 'bg-card-bg text-text-primary'
//       } hover:shadow-lg duration-300 ${
//         highlighted
//           ? ''
//           : 'hover:bg-[rgba(39,56,111,0.9)] hover:text-white'
//       }`}
//       style={{ minHeight: '480px' }}
//     >
//       {badge && (
//         <div className="absolute top-4 left-1/2 transform -translate-x-1/2 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-[#1f2f66] rounded-full">
//           {badge}
//         </div>
//       )}
//       <div className="flex flex-col h-full">
//         <div className="mb-6">
//           {icon && (
//             <div className="mb-2 flex justify-center">
//               {icon}
//             </div>
//           )}
//           <h3 className="text-2xl font-semibold mb-2">{title}</h3>
//           <div className="flex flex-col items-center gap-1">
//             {priceLabel && <div className="text-sm">{priceLabel}</div>}
//             <div className="text-3xl font-bold flex items-baseline gap-1">
//               <span>{price}</span>
//               {frequency && <span className="text-base font-medium">{frequency}</span>}
//             </div>
//           </div>
//           <div className="my-4 border-t border-[rgba(255,255,255,0.2)]" />
//         </div>

//         <div className="flex-grow">
//           <div className="text-sm leading-relaxed mb-6">{children}</div>
//         </div>

//         <div className="mt-4">
//           <button
//             onClick={onCtaClick}
//             className={`w-full py-3 rounded-md font-semibold uppercase tracking-wider transition ${
//               highlighted
//                 ? 'bg-[rgba(255,255,255,0.15)] text-white hover:bg-[rgba(255,255,255,0.25)]'
//                 : 'bg-accent text-white hover:bg-[#178de6]'
//             }`}
//           >
//             {ctaText}
//           </button>
//         </div>
//       </div>
//     </Motion.div>
//   );
// }

// import React, { useRef } from 'react';
// import { motion as Motion, useInView } from 'framer-motion';
// import { FaCheckCircle } from 'react-icons/fa';

// const pricingPlans = [
//   {
//     title: 'LaunchPad',
//     description: 'For new businesses needing a foundational online presence to attract their first wave of customers.',
//     price: '₹25,000',
//     frequency: '/month',
//     badge: '',
//     highlighted: false,
//     buttonText: 'Get Started',
//     features: [
//       'Professional 5-Page Website',
//       'Foundational SEO Setup',
//       'Local Google My Business Setup',
//       'Social Media: 15 Posts + 5 Reels',
//       'Content: 4 SEO-Optimized Blogs',
//       'Monthly Performance Report',
//     ],
//   },
//   {
//     title: 'Growth Engine',
//     description: 'For growing businesses ready to scale customer acquisition and active online growth.',
//     price: '₹55,000',
//     frequency: '/month',
//     badge: 'Most Popular',
//     highlighted: true,
//     buttonText: 'Get Started',
//     features: [
//       'Everything in LaunchPad, plus:',
//       'National/Global GMB Optimization',
//       'Standard On-Page & Local SEO',
//       'Lead Gen Ads Management',
//       'Basic WhatsApp Campaigns',
//       'Advanced Performance Analytics',
//     ],
//   },
//   {
//     title: 'Scale Pro',
//     description: 'For established companies aiming to dominate their industry with an aggressive, full-funnel marketing approach.',
//     price: '₹85,000',
//     frequency: '/month',
//     badge: '',
//     highlighted: false,
//     buttonText: 'Get Started',
//     features: [
//       'Everything in Growth Engine, plus:',
//       'Advanced SEO & Backlink Building',
//       'Ad Retargeting & CRO',
//       'Advanced WhatsApp Campaigns',
//       'Basic IVR Service Setup',
//       'Full Content Strategy',
//     ],
//   },
//   {
//     title: 'Enterprise',
//     description: 'Fully bespoke solutions including custom software, app development, and high-level strategic business consulting.',
//     price: 'Custom',
//     frequency: '',
//     badge: '',
//     highlighted: false,
//     buttonText: 'Contact Us',
//     features: [
//       'Everything in Scale Pro, plus:',
//       'Dedicated Account Manager',
//       'Custom Software Development',
//       'Mobile App Development',
//       'Full WhatsApp & IVR Integration',
//     ],
//   },
// ];

// export default function PricingSection() {
//   const containerRef = useRef(null);
//   const isInView = useInView(containerRef, { once: true, margin: '-100px' });

//   return (
//     <div ref={containerRef} className="flex flex-col md:flex-row gap-8 justify-center items-start px-4 py-16 bg-[#0b0e2c] text-white">
//       {pricingPlans.map((item, index) => (
//         <Motion.div
//           key={index}
//           initial={{ opacity: 0, y: 60 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: index * 0.3 }}
//           className={`flex flex-col justify-between rounded-xl p-8 shadow-md w-full md:min-w-100 ${
//             item.highlighted ? 'bg-[#0fa9e6] text-white' : 'bg-[#141a3a] text-white'
//           }`}
//         >
//           {item.badge && (
//             <div className="absolute top-4 left-1/2 transform -translate-x-1/2 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-white text-black rounded-full">
//               {item.badge}
//             </div>
//           )}

//           <div>
//             <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
//             <p className="text-sm mb-6">{item.description}</p>

//             <div className="mb-6">
//               <p className="text-sm">Starts at</p>
//               <div className="text-3xl font-bold">
//                 {item.price}
//                 <span className="text-base font-medium">{item.frequency}</span>
//               </div>
//             </div>

//             <div className="border-t border-[rgba(255,255,255,0.2)] my-6" />

//             <ul className="space-y-3 text-sm">
//               {item.features.map((feature, idx) => (
//                 <li key={idx} className="flex items-start gap-2">
//                   <FaCheckCircle className="text-teal-400 mt-[2px]" />
//                   <span>{feature}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <button
//             onClick={() => alert(`${item.title} button clicked`)}
//             className="mt-8 bg-[#0fa9e6] hover:bg-[#178de6] w-full py-3 rounded-md font-semibold uppercase tracking-wider transition"
//           >
//             {item.buttonText}
//           </button>
//         </Motion.div>
//       ))}
//     </div>
//   );
// }

import React, { useRef } from "react";
import { motion as Motion, useInView } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const pricingPlans = [
  {
    title: "LaunchPad",
    description:
      "For new businesses needing a foundational online presence to attract their first wave of customers.",
    price: "₹25,000",
    frequency: "/month",
    badge: "",
    highlighted: false,
    buttonText: "Get Started",
    features: [
      "Professional 5-Page Website",
      "Foundational SEO Setup",
      "Local Google My Business Setup",
      "Social Media: 15 Posts + 5 Reels",
      "Content: 4 SEO-Optimized Blogs",
      "Monthly Performance Report",
    ],
  },
  {
    title: "Growth Engine",
    description:
      "For growing businesses ready to scale customer acquisition and active online growth.",
    price: "₹55,000",
    frequency: "/month",
    badge: "Most Popular",
    highlighted: true,
    buttonText: "Get Started",
    features: [
      "Everything in LaunchPad, plus:",
      "National/Global GMB Optimization",
      "Standard On-Page & Local SEO",
      "Lead Gen Ads Management",
      "Basic WhatsApp Campaigns",
      "Advanced Performance Analytics",
    ],
  },
  {
    title: "Scale Pro",
    description:
      "For established companies aiming to dominate their industry with an aggressive, full-funnel marketing approach.",
    price: "₹85,000",
    frequency: "/month",
    badge: "",
    highlighted: false,
    buttonText: "Get Started",
    features: [
      "Everything in Growth Engine, plus:",
      "Advanced SEO & Backlink Building",
      "Ad Retargeting & CRO",
      "Advanced WhatsApp Campaigns",
      "Basic IVR Service Setup",
      "Full Content Strategy",
    ],
  },
  {
    title: "Enterprise",
    description:
      "Fully bespoke solutions including custom software, app development, and high-level strategic business consulting.",
    price: "Custom",
    frequency: "",
    badge: "",
    highlighted: false,
    buttonText: "Contact Us",
    features: [
      "Everything in Scale Pro, plus:",
      "Dedicated Account Manager",
      "Custom Software Development",
      "Mobile App Development",
      "Full WhatsApp & IVR Integration",
    ],
  },
];

export default function PricingSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div className="bg-page-bg text-white px-4 py-16">
      <div
        // ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
      >
        {pricingPlans.map((item, index) => (
          <Motion.div
            ref={containerRef}
            key={index}
            whileHover={{
              scale: 1.03,
              rotateX: 3,
              rotateY: -3,
              boxShadow: "0 15px 40px rgba(0, 255, 255, 0.2)",
              transition: { duration: 0.15 },
            }}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            style={{
              minHeight: "360px",
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
            className={`flex flex-col justify-between rounded-xl p-8 shadow-md ${
              item.highlighted
                ? "bg-card-highlighted text-white"
                : "bg-card-bg2 text-white"
            } relative`}
          >
            {item.badge && (
              <div className=" absolute top-2 left-1/2 transform -translate-x-1/2 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-orange-400 text-black rounded-full">
                {item.badge}
              </div>
            )}

            <div>
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-sm mb-6">{item.description}</p>

              <div className="mb-6">
                <p className="text-sm">Starts at</p>
                <div className="text-3xl font-bold">
                  {item.price}
                  <span className="text-base font-medium">
                    {item.frequency}
                  </span>
                </div>
              </div>

              <div className="border-t border-[rgba(255,255,255,0.2)] my-6" />

              <ul className="space-y-3 text-sm">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FaCheckCircle className="text-teal-400 mt-[2px]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => alert(`${item.title} button clicked`)}
              className={`mt-8 w-full py-3 rounded-md font-semibold uppercase tracking-wider transition ${
                item.highlighted
                  ? "bg-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.25)]"
                  : "bg-[#0fa9e6] hover:bg-[#178de6]"
              }`}
            >
              {item.buttonText}
            </button>
          </Motion.div>
        ))}
      </div>
    </div>
  );
}
