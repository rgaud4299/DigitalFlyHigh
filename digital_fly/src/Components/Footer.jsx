// Footer.tsx

import { motion as Motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { useFadeInOnView } from "../utils/Animations/useFadeInOnView";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const { ref, ...motionText } = useFadeInOnView();

  const year = new Date().getFullYear();
  return (
    <footer className="bg-page-bg text-white bg-gradient-to-t from-page-bg to-page-bg3">
      <Motion.div
        ref={ref}
        {...motionText}
        className="max-w-7xl mx-auto px-6 md:px-16 py-16 border-b border-gray-700 flex flex-col md:flex-row justify-between gap-8"
      >
        {/* Left: Address */}
        <div className="flex-1 text-center md:text-left">
          <div className="text-xl font-semibold mb-1">Address</div>
          <div className="text-sm">Indore, Madhya Pradesh, India</div>
        </div>

        {/* Center: Social */}
        <div className="flex-1 flex justify-center items-start space-x-4">
          {[
            { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
            { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
            { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
            { icon: <Youtube size={20} />, href: "#", label: "YouTube" },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              aria-label={s.label}
              className="p-3 bg-[#1F234F] rounded-lg flex items-center justify-center hover:bg-[#2a2f80] transition"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Right: Contact */}
        <div className="flex-1 text-center md:text-right ">
          <div className="text-xl font-semibold mb-1">Contact Us</div>
          <div className="text-sm mb-1">+91-7389654447</div>
          <div className="text-sm">info@digitalflyhigh.in</div>
        </div>
      </Motion.div>

      {/* Bottom bar */}
      <Motion.div
        initial="hidden"
        {...motionText}
        className="max-w-7xl mx-auto px-6 md:px-16 py-16 flex flex-col md:flex-col justify-center items-center text-center text-sm gap-2"
      >
        <div className="text-gray-200">
          Copyright {year} - Digital Fly-High Solutions. All Rights Reserved.
        </div>

        <div className="flex space-x-2 ml-0 md:ml-4">
          <NavLink
            to="/PrivacyPolicy"
            className="underline hover:text-gray-300"
            aria-label="Privacy Policy"
          >
            Privacy Policy
          </NavLink>
          <span className="text-gray-400"> and </span>
          <NavLink
            to="/TermsOfService"
            className="underline hover:text-gray-300"
            aria-label="Terms of Service"
          >
            Terms
          </NavLink>
        </div>
      </Motion.div>
    </footer>
  );
};

export default Footer;
