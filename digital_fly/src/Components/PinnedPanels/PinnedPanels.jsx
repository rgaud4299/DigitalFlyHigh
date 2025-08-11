// PinnedPanels.jsx
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import "./pin.css"; 
import About from "../../Pages/About";
import WhyUs from "../../Pages/WhyUs";
import OurServicesSection from "../../Pages/OurServicesSection";
import PricingPlans from "../../Pages/Pricing";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function PinnedPanels() {
  useEffect(() => {
    console.clear();

    const smoother = ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });

    const pinnedPanels = gsap.utils.toArray(".panel.pinned");

    pinnedPanels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        endTrigger: ".end-pin",
        end: "top top",
        pin: true,
        pinSpacing: false,
        markers: {
          indent: 150 * i,
          startColor: "white",
          endColor: "white",
        },
        id: i + 1,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      smoother.kill();
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <section className="panel red pinned"><About /></section> 
         <section className="panel orange pinned"><WhyUs /></section>
        <section className="panel purple pinned"> <OurServicesSection /></section>
        <section className="panel green pinned"> <PricingPlans /></section>

        <div className="end-pin" style={{ height: "100vh" }}>
          <h2>End of Pinned Panels</h2>
        </div>
      </div>
    </div>
  );
}
