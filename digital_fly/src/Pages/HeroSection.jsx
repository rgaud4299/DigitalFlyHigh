



// import React from 'react';

// const HeroSection = ({ videoSrc, subtitle,  description }) => {
//   return (
//     <section className="relative w-full h-screen overflow-hidden">
//       <video
//         autoPlay
//         muted
//         loop
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//       >
//         <source src={videoSrc} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       <div className="absolute inset-0 bg-herovideo bg-opacity-50 flex pt-36 justify-center text-center text-white px-4 ">
//         <div>
//           {/* <p className="text-lg mb-4">{subtitle}</p> */}
//          <p className="text-sm text-sky-400 font-medium py-4">[ <span  className="text-sm text-white font-medium">{subtitle}</span> ]</p>

//           <h1 className="text-5xl md:text-8xl font-bold uppercase mb-4 px-6">
//            Building Bigger. <br/>
//            Better. Brighter.
//           </h1>
//           <p className="text-base  leading-tight font-light md:text-lg max-w-6xl mx-auto font-weight-300 font-light text-gray-400">
//             {description}
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



import React from 'react';

const HeroSection = ({ videoSrc, subtitle, description }) => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
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

      <div className="absolute inset-0 bg-herovideo bg-opacity-50 flex py-24 justify-center text-center px-4">
        <div className="max-w-7xl w-full text-white">
          <p className="text-sm sm:text-sm text-sky-400 font-medium py-2 sm:py-4">
            [ <span className="text-white font-medium">{subtitle}</span> ]
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-8xl  font-bold uppercase mb-4 px-2 sm:px-6 leading-tight">
            Building Bigger. <br />
            Better. Brighter.
          </h1>

          <p className="text-xl sm:text-base md:text-lg leading-snug font-light text-gray-300 max-w-3xl md:max-w-7xl mx-auto px-2 sm:px-6">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
