import UpcomingProductCard from "./UpcomingProductCard";
import {motion as Motion  } from "framer-motion";
 const upcomingProducts = [
  {
    id: 1,
    name: "VisionAI",
    tagline: "AI-powered analytics for business insights.",
    teaserImage: "https://images.unsplash.com/photo-1581092588429-5c1b1b7a5156",
    launchTimeline: "Coming Q4 2025",
    mainFeatures: [
      "Real-time data visualization",
      "AI-based predictive analysis",
      "Custom dashboards"
    ],
    benefits: [
      "Faster decision-making",
      "Improved business forecasting",
      "Reduce operational costs"
    ],
    signUpLink: "/signup/visionai",
    status: "In Development"
  },
  {
    id: 2,
    name: "FleetGo",
    tagline: "Smart fleet management for logistics companies.",
    teaserImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    launchTimeline: "Beta Release Q2 2025",
    mainFeatures: [
      "GPS vehicle tracking",
      "Route optimization",
      "Driver performance analytics"
    ],
    benefits: [
      "Cut fuel costs by up to 20%",
      "Increase delivery efficiency",
      "Reduce idle time"
    ],
    signUpLink: "/signup/fleetgo",
    status: "Beta Testing"
  },
  {
    id: 3,
    name: "EduSpace",
    tagline: "Virtual learning platform for global students.",
    teaserImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    launchTimeline: "Coming Early 2026",
    mainFeatures: [
      "Live interactive classes",
      "AI homework assistance",
      "Gamified learning system"
    ],
    benefits: [
      "Boost student engagement",
      "Personalized learning paths",
      "Connect learners worldwide"
    ],
    signUpLink: "/signup/eduspace",
    status: "Finalizing UI"
  }
];
export default function UpcomingProductsSection() {
  return (
    <section className="bg-page-bg py-12 px-6">
      <Motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-white text-center mb-8"
      >
        Upcoming Products
      </Motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {upcomingProducts.map((product, idx) => (
          <UpcomingProductCard key={idx} product={product} />
        ))}
      </div>
    </section>
  );
}
