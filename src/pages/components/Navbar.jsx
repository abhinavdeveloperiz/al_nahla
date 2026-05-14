import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Info,
  Briefcase,
  BookOpen,
  Phone,
  Server,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";
import Logo from "../../assets/logo/logonobg.png";

const navItems = [
  { name: "Home", path: "/", icon: <Home size={18} /> },
  { name: "About", path: "/about", icon: <Info size={18} /> },
  { name: "Services", path: "/services", icon: <Briefcase size={18} /> },
  { name: "Technologies", path: "/technologies", icon: <Server size={18} /> },
  { name: "Blog", path: "/blog", icon: <BookOpen size={18} /> },
  { name: "Contact", path: "/contact", icon: <Phone size={18} /> },
];

const servicesList = [
  "Managed Services",
  "IT Consultancy",
  "Professional Services",
  "Solution Architecture",
  "Staff Augmentation",
  "Annual Maintenance",
];

const technologiesList = [
  "Digital Transformation",
  "Cyber Security",
  "Network Solutions",
  "Enterprise Solutions",
  "Infrastructure Solutions",
  "Audio Visual Solutions",
  "Software Solutions",
  "Collaboration",
];

export default function FloatingNavbar() {
  const location = useLocation();
  const [hoveredPath, setHoveredPath] = useState(location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ================= DESKTOP: FULL NAVBAR ================= */}
      <div className="hidden md:block fixed top-0 left-0 w-full z-50 bg-white border-b border-[#0872b9]/20 shadow-sm">
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between"
        >
          {/* LEFT NAV */}
          <div className="flex items-center gap-2">
            {navItems.slice(0, 2).map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition
            ${
              isActive
                ? "bg-[#0872b9] text-white"
                : "text-[#0872b9] hover:bg-[#0872b9]/10"
            }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              );
            })}

            {/* SERVICES DROPDOWN */}
            {/* SERVICES DROPDOWN */}
            <div className="relative group">
              <Link
                to="/services"
                className={`px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition
    ${
      location.pathname === "/services"
        ? "bg-[#0872b9] text-white"
        : "text-[#0872b9] hover:bg-[#0872b9]/10"
    }`}
              >
                <Briefcase size={18} />
                Services
                <ChevronDown size={16} />
              </Link>

              <div className="absolute top-full left-0 mt-3 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white border border-[#0872b9]/10 rounded-3xl shadow-2xl p-4">
                <ul className="space-y-2">
                  {servicesList.map((item) => (
                    <li key={item}>
                      <Link
                        to="/services"
                        className="block px-4 py-3 rounded-2xl text-sm text-slate-700 hover:bg-[#0872b9]/5 hover:text-[#0872b9] transition"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CENTER LOGO */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <img src={Logo} alt="Logo" className="h-12 w-auto" />
          </Link>

          {/* RIGHT NAV */}
          <div className="flex items-center gap-2">
            {/* TECHNOLOGIES DROPDOWN */}
            {/* TECHNOLOGIES DROPDOWN */}
            <div className="relative group">
              <Link
                to="/technologies"
                className={`px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition
    ${
      location.pathname === "/technologies"
        ? "bg-[#0872b9] text-white"
        : "text-[#0872b9] hover:bg-[#0872b9]/10"
    }`}
              >
                <Server size={18} />
                Technologies
                <ChevronDown size={16} />
              </Link>

              <div className="absolute top-full right-0 mt-3 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white border border-[#0872b9]/10 rounded-3xl shadow-2xl p-4">
                <ul className="space-y-2">
                  {technologiesList.map((item) => (
                    <li key={item}>
                      <Link
                        to="/technologies"
                        className="block px-4 py-3 rounded-2xl text-sm text-slate-700 hover:bg-[#0872b9]/5 hover:text-[#0872b9] transition"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {navItems.slice(4).map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition
            ${
              isActive
                ? "bg-[#0872b9] text-white"
                : "text-[#0872b9] hover:bg-[#0872b9]/10"
            }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </motion.nav>
      </div>

      {/* ================= MOBILE: EXPANDING DOCK ================= */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[400px] px-4 py-2 bg-white/95 backdrop-blur-xl border border-[#0872b9] shadow-xl rounded-3xl flex justify-between items-center md:hidden z-50">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className="relative flex flex-col items-center justify-center w-14 gap-1 pt-1"
            >
              {/* Icon Container */}
              <motion.div
                animate={{
                  y: isActive ? -4 : 0,
                  scale: isActive ? 1.1 : 1,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className={`p-2 rounded-full transition-colors 
                  ${isActive ? "bg-[#0872b9] text-white shadow-md shadow-[#0872b9]/40" : "text-[#0872b9]"}`}
              >
                {item.icon}
              </motion.div>

              {/* Text Label in Small Letters */}
              <span
                className={`text-[10px] font-medium tracking-wide transition-colors ${
                  isActive ? "text-[#0872b9]" : "text-[#0872b9]"
                }`}
              >
                {item.name}
              </span>

              {/* Active Dot Indicator */}
              {isActive && (
                <motion.div
                  layoutId="mobile-dot"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#0872b9] rounded-full"
                />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
}
