
import {
  FaLaptopCode,
  FaShoppingCart,
  FaPaintBrush,
  FaVideo,
} from "react-icons/fa";

// import React, { useRef } from "react";
import { motion as Motion,  } from "framer-motion";
import { Navigate, useNavigate } from "react-router-dom";
const services = [
  {
    icon: FaLaptopCode,
    title: "Website Design & Development",
    description:
      "We build beautiful, websites focused on user experience and responsive design for an excellent impression everywhere.",
    packages: [
      { name: "Basic (5 Pages)", price: "15,000" },
      { name: "Standard (7 Pages + Blog)", price: "25,000" },
      { name: "Premium (10+ Pages)", price: "35,000" },
    ],
    buttonText: "View More...",
  },
  {
    icon: FaShoppingCart,
    title: "E-Commerce Development",
    description:
      "We build powerful e-commerce stores designed to maximize sales and streamline your entire online operation.",
    packages: [
      { name: "Basic Store (10 Products)", price: "25,000" },
      { name: "Standard Store (50 Products)", price: "50,000" },
      { name: "Premium Store (100+)", price: "75,000" },
    ],
    buttonText: "View More...",
  },
  {
    icon: FaPaintBrush,
    title: "Branding & Graphic Design",
    description:
      "Let us craft a memorable brand identity and stunning visuals that will captivate your audience and elevate your market presence.",
    packages: [
      { name: "Basic Logo (3 Concepts)", price: "7,000" },
      { name: "Premium Branding Package", price: "15,000" },
      { name: "Social Media Creatives (10)", price: "5,000" },
    ],
    buttonText: "View More...",
  },
  {
    icon: FaVideo,
    title: "Digital Marketing & Video Marketing",
    description:
      "We produce highly engaging video content, from viral short-form reels to professional videos that effectively tell your unique brand story.",
    packages: [
      { name: "10 Reels/Shorts", price: "8,000" },
      { name: "Corporate Video (3-5 Min)", price: "20,000" },
      { name: "Full Production Package", price: "35,000" },
    ],
    buttonText: "View More...",
  },
];

const ProjectBasedCard = () => {
  // const containerRef = useRef(null);
  // const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  const navigate = useNavigate();

  // const parentVariants = {
  //   hidden: {},
  //   visible: {
  //     transition: { staggerChildren: 0.2 },
  //   },
  // };

  // const cardVariants = {
  //   hidden: { opacity: 0, y: 100 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  // };

  return (
    <Motion.div
      // ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
      // variants={parentVariants}
      initial="hidden"
      // animate={isInView ? "visible" : "hidden"}
    >
      {services.map((card, index) => (
        <Motion.div
          key={index}
          className="bg-card-bg2 rounded-xl p-8 shadow-md flex flex-col justify-between text-white"
          // variants={cardVariants}
          whileHover={{
            scale: 1.03,
            rotateX: 3,
            rotateY: -3,
            boxShadow: "0 15px 40px rgba(0, 255, 255, 0.2)",
            transition: { duration: 0.4 },
          }}
          style={{
            minHeight: "360px",
            perspective: "1000px",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="flex flex-col gap-4">
            <card.icon className="text-cyan-400 text-5xl mx-auto" />
            <h3 className="text-xl font-semibold text-center">{card.title}</h3>
            <p className="text-center text-gray-400">{card.description}</p>
            <div className="mt-4 space-y-3">
              {card.packages.map((item, idx) => (
                <div key={idx}>
                  <p className="font-semibold">{item.name}:</p>
                  <p className="text-gray-300">Starts at ₹{item.price}</p>
                </div>
              ))}
            </div>
          </div>
          <button
            className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-4 rounded-lg mx-auto"
           onClick={() => navigate(`/service-details?ServiceId=${index}`)}
          >
            {card.buttonText}
          </button>
        </Motion.div>
      ))}
    </Motion.div>
  );
};

export default ProjectBasedCard;
