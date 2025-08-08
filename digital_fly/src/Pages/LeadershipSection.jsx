import React, { useEffect } from "react";
import { motion as Motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Services from "../Components/Services";

export default function LeadershipSection({
  headingMain = 'The Minds Behind',
  headingAccent = 'Your Growth',
  quote = `“True digital partnership is about more than just delivering services. It’s about aligning our strategy with our clients' goals to achieve measurable, impactful results together.”`,
  personName = 'Rajesh Arkhel',
  personTitle = 'Director',
  imageSrc = 'https://digitalflyhigh.in/images/team/md.webp', // replace with actual path
  imageAlt = 'Rajesh Arkhel portrait',
}) {
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
    <section
      aria-label="Leadership"
      className="bg-page-bg text-white font-sans py-20 px-6"
    >

      <div ref={ref} className="max-w-7xl mx-auto px-8">
        <Motion.div   
        initial="hidden"
          animate={controls}
          variants={textVariants} 
          className="text-center mb-12">
          

          <h1 className="font-semibold text-[1.5rem] md:text-[3rem] leading-none">
            <span className="block">{headingMain}</span>
            <span className="block gradient-text">{headingAccent}</span>
          </h1>
        </Motion.div>

        <div className="mt-12 px-8 flex flex-col md:flex-row items-center gap-12">
          
          <div className="flex-shrink-0">
            <div className="relative rounded-xl overflow-hidden w-full max-w-[330px]  aspect-[6/5]">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="object-cover w-full h-full rounded-xl"
              />
              <div className="absolute top-4 left-full md:left-auto md:right-auto -translate-x-2/3 md:-translate-x-0">
                {/* empty to preserve layout if needed */}
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-start gap-6 ">
              <div className="flex-shrink-0">
                {/* <div className="bg-accent w-16 h-16 rounded-md flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.17 8.5a4 4 0 015.66 0L16 11.67V17a2 2 0 01-2 2h-4a2 2 0 01-2-2v-5.33l1.17-1.17z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 10h16"
                    />
                  </svg>
                </div> */}
              </div>
              <div>
                <p className="text-white text-3xl md:text-4xl font-normal leading-snug mb-4">
                  {quote}
                </p>
                <div className="mt-2">
                  <p className="font-semibold text-lg">{personName}</p>
                  <p className="text-sm text-gray-400">{personTitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
