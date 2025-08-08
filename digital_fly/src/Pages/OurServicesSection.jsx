
import React, { useEffect } from "react";
import { motion as Motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import OurServicesCard from "../Components/OurServicesCard";

const OurServicesSection = () => {
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
    <div ref={ref} className="w-full bg-page-bg py-20 px-6 flex flex-col items-center">
      <Motion.div className="max-w-4xl text-center mb-16" initial="hidden"
          animate={controls}
          variants={textVariants}>
              <p className="text-sm text-sky-400 font-bold py-8 px-2">[ <span  className="text-sm text-white font-medium">What We Do</span> ]</p>

        <h1 className="text-4xl sm:text-4xl md:text-5xl font-semibold text-slate-100 leading-tight drop-shadow-md">
          Explore Our Core Services
        </h1>
        <p className="text-xl sm:text-base md:text-lg leading-snug font-light text-gray-300 max-w-3xl mx-auto py-4 md:py-6">
          We believe sustainable growth is built on a foundation of trust.
          That's why our partnership is defined by absolute transparency and
          relentless innovation. Our single-minded focus is to transform your
          challenges into triumphs, ensuring your brand doesn't just compete—it
          leads.
        </p>
      </Motion.div>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
        <OurServicesCard
          title="Custom Web Development"
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
        >
          We build stunning, high-performance websites tailored to your brand.
          Our creations are fast, secure, and fully responsive, ensuring a
          seamless user experience on every single device.
        </OurServicesCard>

        <OurServicesCard
          title="E-Commerce Solutions"
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
        >
          Launch a powerful online store with our robust e-commerce platforms.
          We offer end-to-end solutions, from product management to secure
          payment gateways, all designed to maximize sales.
        </OurServicesCard>

        <OurServicesCard
          title="Advanced SEO"
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
        >
          Dominate search rankings and drive valuable organic traffic. Our
          advanced SEO strategies use in-depth keyword research, technical
          optimization, and quality link-building to place you above
          competition.
        </OurServicesCard>

        <OurServicesCard
          title="Paid Advertising (PPC)"
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
        >
          Get instant, targeted traffic through high-ROI paid ad campaigns. We
          effectively manage your budget across Google and social media to
          maximize conversions and deliver truly measurable results.{" "}
        </OurServicesCard>

        <OurServicesCard
          title="Content Marketing"
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
        >
          Engage and convert your target audience with compelling, valuable
          content. We create blog posts and articles that establish your brand
          as a trusted industry leader, building lasting authority.{" "}
        </OurServicesCard>

        <OurServicesCard
          title="Social Media Management"
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
        >
          Build a vibrant, loyal community around your brand. We expertly manage
          your social media presence, creating engaging content and fostering
          connections that turn followers into dedicated, happy customers.{" "}
        </OurServicesCard>
      </div>
    </div>
  );
};

export default OurServicesSection;
