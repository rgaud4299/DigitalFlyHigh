import ProjectCard from "./ProjectCard";
import {motion as Motion  } from "framer-motion";

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
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
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
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    liveDemo: "https://shopmate.demo",
    caseStudy: "/case-studies/shopmate.pdf"
  }
];



export default function ProjectsSection() {
  return (
    <section className="bg-page-bg py-12 px-6">
      <Motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-white text-center mb-8"
      >
        Our Projects
      </Motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
}
