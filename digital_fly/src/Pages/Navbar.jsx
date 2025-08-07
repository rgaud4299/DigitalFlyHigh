



import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"; // Hamburger & Close Icons

const navItems = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Why Us", to: "/why-us" },
  { name: "Services", to: "/services" },
  { name: "Pricing", to: "/pricing" },
  { name: "FAQ", to: "/faq" },
];

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        isSticky ? "bg-page-bg shadow-md" : "bg-page-bg"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-1">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://digitalflyhigh.in/images/logo.svg"
            alt="DFHS Logo"
            className="w-28 h-16 object-contain"
          />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className="text-white font-semibold transition-all duration-200 hover:text-[#00A8CC]"
              style={({ isActive }) => ({
                color: isActive ? "#00A8CC" : "",
              })}
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Get a Quote Button - Desktop */}
        <div className="hidden md:block">
          <button className="bg-[#00A8CC] text-white px-4 py-2 rounded-md uppercase font-semibold text-sm">
            Get a Quote
          </button>
        </div>

        {/* Hamburger Button - Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none text-2xl"
          >
            {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#0D1033] px-6 pt-2 pb-4 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.to}
            onClick={() => setIsMenuOpen(false)} // Close menu on click
            className="block py-2 text-white font-medium transition-all duration-150 hover:text-[#00A8CC]"
            style={({ isActive }) => ({
              color: isActive ? "#00A8CC" : "",
            })}
          >
            {item.name}
          </NavLink>
        ))}

        <button className="mt-4 w-full bg-[#00A8CC] text-white py-2 rounded-md uppercase font-semibold text-sm">
          Get a Quote
        </button>
      </div>
    </nav>
  );
};

export default Navbar;



























// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

// const navItems = [
//   { name: "Home", to: "/" },
//   { name: "About Us", to: "/about" },
//   { name: "Why Us", to: "/why-us" },
//   { name: "Services", to: "/services" },
//   { name: "Pricing", to: "/pricing" },
//   { name: "FAQ", to: "/faq" },
// ];

// const Navbar = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSticky(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className={`w-full sticky top-0 z-50 transition-all duration-300 ${
//       isSticky ? "bg-page-bg shadow-md" : "bg-page-bg"
//     }`}>
//       <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-1">
//         <div className="flex items-center">
//           <img
//             src="https://digitalflyhigh.in/images/logo.svg"
//             alt="DFHS Logo"
//             className="w-28 h-16 object-contain"
//           />
//         </div>

//         <div className="hidden md:flex items-center gap-8">
//           {navItems.map((item) => (
//             <NavLink
//               key={item.name}
//               to={item.to}
//               className="text-white font-semibold transition-all duration-200 hover:text-[#00A8CC]"
//               style={({ isActive }) => ({
//                 color: isActive ? "#00A8CC" : "",
//               })}
//             >
//               {item.name}
//             </NavLink>
//           ))}
//         </div>

//         <div className="hidden md:block">
//           <button className="bg-[#00A8CC] text-white px-4 py-2 rounded-md uppercase font-semibold text-sm">
//             Get a Quote
//           </button>
//         </div>

//         <div className="md:hidden">
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="text-white focus:outline-none text-2xl"
//           >
//             {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
//           </button>
//         </div>
//       </div>

//       <div
//         className={`md:hidden bg-[#0D1033] px-6 pt-2 pb-4 transition-all duration-300 ease-in-out ${
//           isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
//         }`}
//       >
//         {navItems.map((item) => (
//           <NavLink
//             key={item.name}
//             to={item.to}
//             onClick={() => setIsMenuOpen(false)}
//             className="block py-2 text-white font-medium transition-all duration-150 hover:text-[#00A8CC]"
//             style={({ isActive }) => ({
//               color: isActive ? "#00A8CC" : "",
//             })}
//           >
//             {item.name}
//           </NavLink>
//         ))}

//         <button className="mt-4 w-full bg-[#00A8CC] text-white py-2 rounded-md uppercase font-semibold text-sm">
//           Get a Quote
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
