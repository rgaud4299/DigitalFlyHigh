const leadershipData = [
  {
    name: "Rajesh Arkhel",
    title: "Director",
    quote:
      "True digital partnership is about more than just delivering services. It’s about aligning our strategy with our clients' goals to achieve measurable, impactful results together.",
    image: "https://digitalflyhigh.in/images/team/md.webp",
  },
  {
    name: "Mr. Praful Yogi",
    title: "Software Engineer",
    quote:
      "Our approach is not just about visibility, but meaningful engagement that drives real business growth.",
    image:
      "https://standardpetro.in/wp-content/uploads/2024/12/pr-1024x1024.jpg",
  },
  {
    name: "Vikas Mehra",
    title: "Tech Lead",
    quote:
      "We believe in building scalable, future-ready solutions that grow with your business.",
    image:
      "https://standardpetro.in/wp-content/uploads/2024/04/PHOTO-2024-03-29-18-20-52-1-603x1024.jpg",
  },

];

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion as Motion } from "framer-motion";
import { useFadeInOnView } from "../utils/Animations/useFadeInOnView";


const LeadershipSection = () => {
 const { ref, ...motionProps } = useFadeInOnView();  
 
  return (
    <section 
    ref={ref}
     className="bg-page-bg text-white py-20">
      <Motion.div 
       {...motionProps} 

           className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          {/* <span className="text-[#00B4D8] font-medium text-sm">[ Our Leadership ]</span> */}
          <p className="text-sm text-sky-400 font-bold py-8 px-2">
            [{" "}
            <span className="text-sm text-white font-medium">
              {" "}
              Our Leadership
            </span>{" "}
            ]
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            <span>The Minds Behind</span>
            <span className="block bg-gradient-to-r from-[#00B4D8] to-[#48CAE4] text-transparent bg-clip-text">
              Your Growth
            </span>
          </h2>
        </div>

        <Swiper
          spaceBetween={40}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Navigation, Pagination]}
          className="leadership-swiper"
        >
          {leadershipData.map((person, index) => (
            <SwiperSlide key={index}>
              <Motion.div
               {...motionProps} 
                className="flex flex-col md:flex-row items-center gap-10">
                <div className="relative w-80 h-80 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="object-cover w-full h-full rounded-xl"
                  />
                  <div className="absolute top-0 right-0 bg-[#00B4D8] text-white text-7xl px-4 py-2 rounded-md shadow-lg">
                    ❝
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xl md:text-3xl leading-snug mb-4">
                    {person.quote}
                  </p>
                  <div className="mt-2">
                    <p className="font-semibold text-lg">{person.name}</p>
                    <p className="text-sm text-gray-400">{person.title}</p>
                  </div>
                </div>
              </Motion.div>
              
            </SwiperSlide>
          ))}
        </Swiper>
      </Motion.div >
    </section>
  );
};

export default LeadershipSection;
