import React from "react";
import ProductSection from "./ProductSection";
import { useLocation } from "react-router-dom";

const sections = [
  {
    type: "Web Development",
    content:
      "We create scalable, fast, and responsive websites tailored to your business goals using the latest technologies.",
    believeIn: "Crafting Ideas",
    beingDifferent: "That Inspire Action.",
  },
   {
    type: "E-Commerce Solutions",
    content:
      "From product listing to payment gateways, we build complete online store solutions that convert visitors into customers.",
    believeIn: "Empowering Sales",
    beingDifferent: "Through Smart Solutions.",
  },
   {
    type: "UI/UX Design",
    content:
      "We blend creativity with usability to deliver intuitive designs that engage and delight your audience.",
    believeIn: "Shaping Experiences",
    beingDifferent: "That Users Love.",
  },

  {
    type: "Digital Marketing",
    content:
      "Our data-driven marketing strategies help your brand reach the right audience at the right time.",
    believeIn: "Boosting Brands",
    beingDifferent: "With Measurable Impact.",
  },
  
  {
    type: "Mobile App Development",
    content:
      "Our mobile apps are built for performance, user experience, and functionality across all platforms.",
    believeIn: "Designing Futures",
    beingDifferent: "With Seamless Technology.",
  },
 
 
  
  {
    type: "Cloud Services",
    content:
      "We provide secure and scalable cloud solutions to enhance your business efficiency and agility.",
    believeIn: "Scaling Horizons",
    beingDifferent: "With Cloud Power.",
  },
];

const Section = () => {

    const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const serviceId = +queryParams.get("ServiceId");
  
  return (
    <div>
      <ProductSection
        title={sections[serviceId].type}
        description={sections[serviceId].content}
        believeIn={sections[serviceId].believeIn}
        beingDifferent={sections[serviceId].beingDifferent}
        serviceId={serviceId}
      />
      
    </div>
  );
};

export default Section;
