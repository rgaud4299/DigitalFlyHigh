import React, { useRef } from "react";
import { motion as Motion } from "framer-motion";
import { useInView } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

import {
  FaLaptopCode,
  FaShoppingCart,
  FaPaintBrush,
  FaVideo,
} from "react-icons/fa";

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

export default function PricingCard() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  const parentVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-page-bg text-white px-4 py-16">
      <Motion.div
        ref={containerRef}
        variants={parentVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
      >
        {pricingPlans.map((item, index) => (
          <Motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.03,
              rotateX: 3,
              rotateY: -3,
              boxShadow: "0 15px 40px rgba(0, 255, 255, 0.2)",
              transition: { duration: 0.15 },
            }}
            style={{
              willChange: "transform",
              perspective: "1000px",
              transformStyle: "preserve-3d",
              minHeight: "360px",
            }}
            className={`flex flex-col justify-between rounded-xl p-8 shadow-md ${
              item.highlighted
                ? "bg-card-highlighted text-white"
                : "bg-card-bg2 text-white"
            } relative`}
          >
            {item.badge && (
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-orange-400 text-black rounded-full">
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
      </Motion.div>
    </div>
  );
}
