
import { motion as Motion } from 'framer-motion';
import WhyCard from '../Components/WhyCard';
import { useFadeInOnView } from '../utils/Animations/useFadeInOnView';
import { slideInLeft2 } from '../utils/Animations/animations';


const WhyUs = () => {
  const { ref, ...motiontext } = useFadeInOnView();  
  return (
    // <div className="w-full bg-page-bg  py-20 py-6 px-4 sm:px-6 md:px-10 flex flex-col items-center">
    <div ref={ref} className="section-container">

      {/* Heading Section */}
      <Motion.div
        className="max-w-5xl text-center mb-12"
       {...motiontext}
      > 
        <Motion.p
          className="text-sm sm:text-sm text-sky-400 font-bold py-4 px-2"
          {...motiontext}
        >
          [ <span className="text-white font-medium">Our Core Advantages</span> ]
        </Motion.p>

        <Motion.h1
          className="text-4xl sm:text-4xl md:text-5xl font-semibold text-slate-100 leading-tight drop-shadow-md"
         {...motiontext}
        >
          The Digital Fly-High Difference
        </Motion.h1>

        <Motion.p
          className="text-xl sm:text-base md:text-lg leading-snug font-light text-gray-300 max-w-3xl mx-auto py-4 md:py-6"
          variants={slideInLeft2(2)}
        >
          We believe sustainable growth is built on a foundation of trust. That's why our
          partnership is defined by absolute transparency and relentless innovation. Our
          single-minded focus is to transform your challenges into triumphs, ensuring your
          brand doesn't just compete—it leads.
        </Motion.p>
      </Motion.div>

      {/* Card Section */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-4">
        <WhyCard
          title="Proven Track Record"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 stroke-teal-400"
            >
              <path d="M3 17l6-6 4 4 8-8" />
              <path d="M4 21h16a2 2 0 0 0 2-2V7" />
            </svg>
          }
          index='1'
        >
          Trust in proven experience. Our numbers provide the assurance you need, with over 450
          happy clients and ₹200+ Crore in ad spend successfully managed. We don’t just promise
          exceptional results—our history proves we deliver them.
        </WhyCard>

        <WhyCard
          title="Holistic Approach"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 stroke-slate-100"
            >
              <path d="M9 14l2-2 4 4 6-6" />
              <path d="M3 7h4v4H3V7zM17 3h4v4h-4V3zM3 17h4v4H3v-4z" />
            </svg>
          } 
          index='2'

        >
          We see the complete picture, not just the pieces. Our experts fuse stunning web design,
          precision SEO, and strategic ads into a single, unified force. This synergistic approach
          ensures your brand engages customers powerfully at every touchpoint.
        </WhyCard>

        <WhyCard
          title="Measurable Impact"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 stroke-teal-400"
            >
              <circle cx={12} cy={12} r={10} />
              <path d="M12 8v4l3 3" />
            </svg>
          }
          index='3'
        >
          Our focus is on your bottom line. We prioritize clear, actionable insights over vanity
          metrics, providing transparent reports that demonstrate tangible returns. With us, every
          rupee you spend is a calculated investment in measurable growth.
        </WhyCard>
      </div>
    </div>
  );
};

export default WhyUs;
