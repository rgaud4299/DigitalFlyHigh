// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
// import "./App.css";

// import { useScroll,motion as Motion } from "framer-motion";
// import Navbar from "./Pages/Navbar";
// import About from "./Pages/About";
// import WhyUs from "./Pages/WhyUs";
// import OurServicesSection from "./Pages/OurServicesSection";
// import PricingPlans from "./Pages/Pricing";
// import ProjectBasedSolutions from "./Pages/ProjectBasedSolutions";
// import LeadershipSection from "./Components/LeadershipSection";
// import FAQAccordion from "./Pages/FAQAccordion";
// import ContactForm from "./Pages/ContactForm";
// import HeroSection from "./Pages/HeroSection";
// import Footer from "./Components/Footer";

// function AppRouter() {
//   const { scrollYProgress } = useScroll();

//   return ( 
//     <>
//     <Router>
//       {/* Scroll Indicator */}
//       <Motion.div
//         id="scroll-indicator"
//         style={{
//           scaleX: scrollYProgress,
//           position: "fixed",
//           zIndex: 9999,
//           top: 0,
//           left: 0,
//           right: 0,
//           height: 7,
//           originX: 0,
//           backgroundColor: "#178de6",
//         }}
//       />

//       <Navbar />

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <HeroSection
//                 videoSrc="https://digitalflyhigh.in/video/2.mp4"
//                 subtitle="Your Partner in Digital Growth"
//                 title="Building Bigger. Better. Brighter."
//                 description="We are a full-service digital agency and your dedicated growth partner. We build stunning websites, execute data-driven marketing strategies, and develop custom software to ensure your success."
//               />
//               <About />
//               <WhyUs />
//               <OurServicesSection />
//               <PricingPlans />
//               <ProjectBasedSolutions />
//               <LeadershipSection />
//               <FAQAccordion />
//               <ContactForm />
//             </>
//           }
//         />
//         <Route path="/about" element={<About />} />
//         <Route path="/why-us" element={<WhyUs />} />
//         <Route path="/services" element={<OurServicesSection />} />
//         <Route path="/pricing" element={<PricingPlans />} />
//         <Route path="/faq" element={<FAQAccordion />} />
//         <Route path="/leadership" element={<LeadershipSection />} />
//         <Route path="/contact" element={<ContactForm />} />
//       </Routes>

//       <Footer />
//     </Router>
//     </>
//   );
// }

// export default AppRouter;








// AppRouter.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";

function AppRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppRouter;