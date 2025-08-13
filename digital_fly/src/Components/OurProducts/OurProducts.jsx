import React, { useState } from "react";
import {motion as Motion  } from "framer-motion";
// import { projects } from "../data/projects";
// import { upcomingProducts } from "../data/upcomingProducts";
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
    teaserImage: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d",
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
    teaserImage: "https://images.unsplash.com/photo-1584697964154-26f3c640e530",
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

 const projects = [
  {
    id: 1,
    name: "Travel Sphere",
    tagline: "Plan and book tours with real-time availability.",
    clientIndustry: "Travel & Tourism",
    techStack: ["React", "Node.js", "MongoDB", "Stripe API", "AWS"],
    challenge: "Client needed a responsive, high-speed booking system with real-time availability.",
    solution: "Built an optimized booking engine with integrated payment and instant confirmations.",
    result: "1,200+ bookings in the first month, 30% faster page load, 99.9% uptime.",
    features: [
      "Instant booking confirmations",
      "Responsive mobile-first design",
      "Secure payment integration"
    ],
    outcomeMetrics: [
      "Reduced load time by 30%",
      "Boosted bookings by 50%",
      "Maintained 99.9% uptime"
    ],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    liveDemo: "https://travelsphere.demo",
    caseStudy: "/case-studies/travel-sphere.pdf"
  },
  {
    id: 2,
    name: "MediTrack",
    tagline: "Smart patient monitoring for hospitals.",
    clientIndustry: "Healthcare",
    techStack: ["Angular", "Node.js", "PostgreSQL", "AWS", "IoT Devices"],
    challenge: "Hospitals needed real-time patient vitals tracking with alert systems.",
    solution: "Developed IoT-based monitoring with instant alerts via mobile app.",
    result: "Reduced emergency response time by 40%, improved patient care.",
    features: [
      "Live vitals dashboard",
      "Automated alerts for doctors",
      "Cloud storage of patient history"
    ],
    outcomeMetrics: [
      "40% faster response",
      "20% increase in treatment accuracy"
    ],
    image: "https://images.unsplash.com/photo-1581093588401-22d8f8f3d0b0",
    liveDemo: "https://meditrack.demo",
    caseStudy: "/case-studies/meditrack.pdf"
  },
  {
    id: 3,
    name: "ShopMate",
    tagline: "Multi-vendor e-commerce with advanced search.",
    clientIndustry: "E-commerce",
    techStack: ["Next.js", "Express", "MongoDB", "AWS", "ElasticSearch"],
    challenge: "Client wanted a scalable marketplace with advanced search filters.",
    solution: "Built multi-vendor support, AI-powered product recommendations, and blazing-fast search.",
    result: "Increased user engagement by 2x, handled 50k+ daily visits.",
    features: [
      "Multi-vendor management",
      "AI-based recommendations",
      "ElasticSearch integration"
    ],
    outcomeMetrics: [
      "2x user engagement",
      "Stable under 50k daily visits"
    ],
    image: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302d",
    liveDemo: "https://shopmate.demo",
    caseStudy: "/case-studies/shopmate.pdf"
  }
];








export default function OurWorkPage() {
  const categories = ["All", "Web Applications", "E-commerce", "Mobile Apps"];
  const [activeCat, setActiveCat] = useState("All");

  const filtered = activeCat === "All"
    ? projects
    : projects.filter(proj => proj.category === activeCat);

  return (
    <div className="bg-page-bg text-white min-h-screen">
      {/* Hero */}
      <Motion.div
        className="text-center py-16 px-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold mb-2">Our Work & Upcoming Innovations</h1>
        <p className="text-gray-300 max-w-lg mx-auto">
          Explore our completed projects and what’s brewing behind the scenes.
        </p>
      </Motion.div>

      {/* Category Filters */}
      <div className="flex justify-center gap-4 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={`px-4 py-2 rounded-full text-sm ${
              activeCat === cat
                ? "bg-btn-color"
                : "bg-card-bg2 hover:bg-card-hover"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Gallery */}
      <div className="grid gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((proj, idx) => (
          <Motion.div
            key={proj.id}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-card-bg2 rounded-xl overflow-hidden shadow-lg hover:border-card-hover border"
          >
            <img src={proj.image} alt={proj.name} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold">{proj.name}</h3>
              <p className="text-gray-300 text-sm">{proj.tagline}</p>
              <div className="mt-3 text-sm space-y-1">
                <p><strong>Challenge:</strong> {proj.challenge}</p>
                <p><strong>Solution:</strong> {proj.solution}</p>
                <p><strong>Result:</strong> {proj.result}</p>
              </div>
            </div>
          </Motion.div>
        ))}
      </div>

      {/* Upcoming Products */}
      <section className="px-6 mt-16">
        <Motion.h2
          className="text-3xl font-bold text-btn-color mb-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Upcoming Products
        </Motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {upcomingProducts.map((pro, idx) => (
            <Motion.div
              key={pro.id}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card-bg2 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pro.teaserImage}
                  alt={pro.name}
                  className="w-full h-full object-cover filter blur-sm opacity-70"
                />
                <span className="absolute top-3 left-3 bg-btn-color px-2 py-1 text-xs rounded">{pro.status}</span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold">{pro.name}</h3>
                <p className="text-gray-300 text-sm">{pro.tagline}</p>
                <p className="text-gray-400 mt-2 text-xs">Launch: {pro.launchTimeline}</p>
                <button className="mt-4 bg-btn-color hover:bg-btn-color-hover px-4 py-2 rounded-md text-white text-sm">
                  Sign Up for Updates
                </button>
              </div>
            </Motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}