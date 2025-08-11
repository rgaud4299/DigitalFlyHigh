

// import React from "react";
// import Services from "../Components/Services";

// const About = () => {
//   return (
//     <section className="bg-[#0E1129] min-h-screen flex flex-col items-center justify-center px-4 md:px-10 lg:px-20 py-16 pt-32">
//       <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
        
//         {/* Left Side Text */}
//         <div className="text-white max-w-2xl">
//           <p className="text-xs sm:text-sm text-sky-400 font-bold mb-4 sm:mb-6">[ <span className="text-white font-medium">About Us</span> ]</p>

//           <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold leading-tight">
//             We're more than just an agency; we are your dedicated digital growth partner.
//           </h2>

//           <p className="text-xl sm:text-base md:text-lg leading-snug font-light text-gray-300 max-w-3xl mx-auto py-4 md:py-6">
//             Our promise is to transform your online presence into a powerful asset that drives leads, enhances brand authority, and boosts your market leadership.
//           </p>

//           <ul className="mt-6 space-y-3 sm:space-y-4 text-sm sm:text-base">
//             {[
//               "Custom Web & E-commerce Development",
//               "Advanced SEO & Content Marketing",
//               "Targeted Paid Advertising (PPC)",
//               "Social Media Management",
//               "Mobile App Development",
//               "Custom Software Solutions",
//             ].map((item, index) => (
//               <li key={index} className="flex items-center ">
//                 <span className="text-green-400 mr-2 ">✔️</span>
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Right Side Rotating Sphere */}
//         <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-[28rem] md:h-[28rem] animate-spin-slow">
//           <img
//             src="https://digitalflyhigh.in/images/misc/c1.webp"
//             alt="Rotating Sphere"
//             className="w-full h-full object-contain"
//           />
//         </div>
//       </div>

//       <div className="mt-16 w-full">
//         <Services />
//       </div>
//     </section>
//   );
// };

// export default About;


import { motion as Motion } from "framer-motion";
import Services from "../Components/Services";
import { useFadeInOnView } from "../utils/Animations/useFadeInOnView";
import { imageVariants,  slideInLeft2} from "../utils/Animations/animations";

const About = () => {
const { ref, ...motionProps } = useFadeInOnView();  
// const cardVariants = {
//     hidden: { opacity: 0, y: 60 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
//   };
 const { ...motionImageProps } = useFadeInOnView(
     imageVariants ,
 );  



  return (
    <section
      ref={ref}
      className="bg-page-bg min-h-screen flex flex-col items-center justify-center px-4 md:px-10 lg:px-20 py-16 pt-32"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
        {/* Left Side Text */}
        <Motion.div
          className="text-white max-w-2xl"
         {...motionProps} 
        >
          <p className="text-xs sm:text-sm text-sky-400 font-bold mb-4 sm:mb-6">
            [ <span className="text-white font-medium">About Us</span> ]
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            We're more than just an agency; we are your dedicated digital growth partner.
          </h2>

          <Motion.p variants={slideInLeft2(2)} className="text-xl sm:text-base md:text-lg leading-snug font-light text-gray-300 max-w-3xl mx-auto py-4 md:py-6">
            Our promise is to transform your online presence into a powerful asset that drives leads, enhances brand authority, and boosts your market leadership.
          </Motion.p>

          <ul className="mt-6 space-y-3 sm:space-y-4 text-sm sm:text-base">
            {[
              "Custom Web & E-commerce Development",
              "Advanced SEO & Content Marketing",
              "Targeted Paid Advertising (PPC)",
              "Social Media Management",
              "Mobile App Development",
              "Custom Software Solutions",
            ].map((item, index) => (
              <Motion.li key={index} variants={slideInLeft2()} className="flex items-center">
                <span className="text-green-400 mr-2">✔️</span>
                {item}
              </Motion.li>
            ))}
          </ul>
        </Motion.div>

        {/* Right Side Image */}
        <Motion.div
          className="w-80 h-80 sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem]"
          initial="hidden"
          {...motionImageProps} 
          
        >
          <img
            src="https://digitalflyhigh.in/images/misc/c1.webp"
            alt="Rotating Sphere"
            className="w-full h-full object-contain animate-spin-slow"
          />
        </Motion.div>
      </div>

      {/* Services Section below */}
      <div className="mt-16 w-full">
        <Services />
      </div>
    </section>
  );
};

export default About;



