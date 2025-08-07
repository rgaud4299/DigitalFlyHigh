// import React from "react";

// const ContactForm = () => {
//   return (
//     <div
//       className="bg-black bg-opacity-50 max-h-[95vh] flex flex-col items-center justify-center bg-cover bg-center px-4 py-8 pb-20 overflow-hidden object-cover z-0"
//       style={{
//         backgroundImage: `url('https://digitalflyhigh.in/images/background/laew%20(3).jpg')`,
//       }}
//     >
//       <div className="max-w-4xl text-center mb-8 ">
//         <p className="text-sm text-sky-400 font-normal py-7 px-2">
//           [{" "}
//           <span className="text-sm text-white font-medium">
//             {" "}
//             Let's Connect{" "}
//           </span>{" "}
//           ]
//         </p>

//         <h2 className="text-3xl md:text-5xl font-bold text-white">
//           Ready to Start Your Project?
//         </h2>
//         <p className="mt-4 text-md text-slate-300">
//           Tell us a little about your business and your goals. A member of our
//           expert team will get back to you shortly to schedule your free,
//           no-obligation consultation.
//         </p>
//       </div>

//       <div className="max-w-3xl w-full p-8 md:p-8 md:py-12  rounded-lg shadow-xl text-white bg-gradient-to-b from-[#00143C] to-[#011a4d]">
//         <form className="grid grid-cols-1 md:grid-cols-2 gap-3">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="border border-form-boader-color bg-[#1B2347] text-white placeholder-slate-400 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-sky-500"
//           />
//           <input
//             type="text"
//             placeholder="Business Name"
//             className="border border-form-boader-color bg-[#1B2347] text-white placeholder-slate-400 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-sky-500"
//           />
//           <input
//             type="email"
//             placeholder="Business Email"
//             className="border border-form-boader-color bg-[#1B2347] text-white placeholder-slate-400 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-sky-500"
//           />
//           <input
//             type="tel"
//             placeholder="Phone Number"
//             className="border border-form-boader-color bg-[#1B2347] text-white placeholder-slate-400 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-sky-500"
//           />
//           <input
//             type="url"
//             placeholder="Your Website URL (Optional)"
//             className="border border-form-boader-color bg-[#1B2347] text-white placeholder-slate-400 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-sky-500 md:col-span-1"
//           />
//           <input
//             type="text"
//             placeholder="Social Media Profile (Optional)"
//             className="border border-form-boader-color bg-[#1B2347] text-white placeholder-slate-400 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-sky-500 md:col-span-1"
//           />
//           <textarea
//             placeholder="Tell us about your project..."
//             rows="2"
//             className="border border-form-boader-color bg-[#1B2347] text-white placeholder-slate-400 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-sky-500 md:col-span-2"
//           ></textarea>

//           <div className="md:col-span-2 text-center mt-4">
//             <button
//               type="submit"
//               className="bg-cyan-500 hover:bg-cyan-600 transition-colors text-white px-4 py-2 rounded-md font-medium text-sm shadow-md"
//             >
//               GET MY FREE CONSULTATION
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;













import React, { useEffect } from "react";
import { motion as Motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactForm = () => {
    const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, y: 200 ,scale: 1.3 },
    visible: { opacity: 1, y: 0, scale: 1,transition: { duration: 1 } },
  };



  return (
    <section  className="relative bg-gradient-to-b from-page-bg to-page-bg bg-page-bg bg-gradient-to-t from-page-bg to-color-contact">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 z-0"
        style={{
          backgroundImage: `url('https://digitalflyhigh.in/images/background/laew%20(3).jpg')`,
        }}
      >  </div>

      {/* Overlay (optional dark layer to match theme) */}
      <div className="absolute inset-0  opacity-50 z-0"></div>

      {/* Content */}
      <Motion.div ref={ref}
          initial="hidden"
          animate={controls}
          variants={textVariants}
           className="relative z-10 max-w-6xl mx-auto px-4 py-20 flex flex-col items-center justify-center text-white">
        {/* Heading */}
        <div className="text-center mb-10 max-w-3xl">
          <p className="text-sky-400 font-medium text-sm">
            [ <span className="text-white"> Let's Connect </span> ]
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-slate-300 text-sm md:text-base">
            Tell us a little about your business and your goals. A member of our expert team will get back to you shortly to schedule your free, no-obligation consultation.
          </p>
        </div>

        {/* Form */}
        <div className="w-full max-w-3xl bg-gradient-to-b from-[#00143C] to-[#011a4d] p-8 md:p-12 rounded-lg shadow-xl">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-slate-600 bg-[#1B2347] text-white placeholder-slate-400 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-sky-500"
            />
            <input
              type="text"
              placeholder="Business Name"
              className="border border-slate-600 bg-[#1B2347] text-white placeholder-slate-400 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-sky-500"
            />
            <input
              type="email"
              placeholder="Business Email"
              className="border border-slate-600 bg-[#1B2347] text-white placeholder-slate-400 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-sky-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-slate-600 bg-[#1B2347] text-white placeholder-slate-400 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-sky-500"
            />
            <input
              type="url"
              placeholder="Your Website URL (Optional)"
              className="border border-slate-600 bg-[#1B2347] text-white placeholder-slate-400 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-sky-500"
            />
            <input
              type="text"
              placeholder="Social Media Profile (Optional)"
              className="border border-slate-600 bg-[#1B2347] text-white placeholder-slate-400 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-sky-500"
            />
            <textarea
              placeholder="Tell us about your project..."
              rows="2"
              className="border border-slate-600 bg-[#1B2347] text-white placeholder-slate-400 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-sky-500 md:col-span-2"
            ></textarea>

            <div className="md:col-span-2 text-center mt-4">
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 transition-colors text-white px-6 py-2 rounded-md font-medium text-sm shadow-md"
              >
                GET MY FREE CONSULTATION
              </button>
            </div>
          </form>
        </div>
      </Motion.div>
    </section>
  );
};

export default ContactForm;
