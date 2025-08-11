


import React, { useRef } from "react";
import { motion as Motion, useInView } from "framer-motion";

const stats = [
  { value: "450+", label: "Happy Clients", color: "bg-[#014B72]" },
  { value: "200+ Cr", label: "Ad Spend Managed", color: "bg-[#029DBF]" },
  { value: "950+", label: "Projects Delivered", color: "bg-[#014B72]" },
  { value: "5X", label: "Average ROI Achieved", color: "bg-[#029DBF]" },
];

const Services = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  return (
    <div
      ref={containerRef}
      className="my-16 sm:my-20 md:my-20 flex flex-wrap justify-center gap-6 px-2 md:px-4 "
    >
      {stats.map((item, index) => (
        <Motion.div
          key={index}
           whileHover={{
        scale: 1.03,
        rotateX: 3,
        rotateY: -3,
        boxShadow: "0 15px 40px rgba(0, 255, 255, 0.2)",
        transition: { duration: 0.4 },
      }}
          className={`w-80 md:w-64 p-7  ${item.color} text-white rounded-lg shadow-md`}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.3 }}
        >
          <h3 className="text-3xl font-bold mb-2">{item.value}</h3>
          <p className="text-sm">{item.label}</p>
        </Motion.div>
      ))}
    </div>
  );
};

export default Services;



