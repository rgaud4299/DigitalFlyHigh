import { motion as Motion } from "framer-motion";
import { useFadeInOnView } from "../utils/Animations/useFadeInOnView";
import { slideInLeft2 } from "../utils/Animations/animations";
// import {fadeInUpScale  , defaultOptions } from "../utils/Animations/animations";

const HeroSection = ({ videoSrc, subtitle, description }) => {
const { ref, ...motionText } = useFadeInOnView();  

return (
    <section  ref={ref} className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    
       <Motion.div 
      {...motionText} 
      className="absolute inset-0 bg-herovideo bg-opacity-50 flex py-24 md:py-36 justify-center text-center px-4">
        <div className="max-w-7xl w-full text-white ">
          <p className="text-sm sm:text-sm text-sky-400 font-medium py-2 sm:py-4">
            [ <span className="text-white font-medium">{subtitle}</span> ]
          </p>

          <Motion.h1  className="text-5xl sm:text-6xl md:text-8xl  font-bold uppercase mb-4 px-2 sm:px-6 leading-tight">
            Building Bigger. <br />
            Better. Brighter.
          </Motion.h1>

          <Motion.p variants={slideInLeft2(2)} className="text-xl sm:text-base md:text-lg leading-snug font-light text-gray-300 max-w-3xl md:max-w-7xl mx-auto px-2 sm:px-6">
            {description}
          </Motion.p>
        </div>
      </Motion.div>
    </section>
  );
};

export default HeroSection;
