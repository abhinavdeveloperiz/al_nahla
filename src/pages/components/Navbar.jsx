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
      {/* ================= DESKTOP: FLOATING PILL ================= */}
      <div className="hidden md:flex fixed top-6 left-0 w-full z-50 justify-center pointer-events-none">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="flex items-center gap-2 p-2 bg-white border border-[#0872b9] rounded-full pointer-events-auto"
          onMouseLeave={() => setHoveredPath(location.pathname)}
        >
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-8 w-auto ml-3 mr-4" />
          </Link>

          <div className="relative">
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full border border-[#0872b9] bg-white px-4 py-2 text-sm font-medium text-[#0872b9] hover:bg-[#f7fbff] transition"
            >
              Explore
              <ChevronDown size={16} />
            </button>
            {menuOpen && (
              <div className="absolute left-0 mt-2 w-[320px] rounded-3xl border border-[#0872b9]/20 bg-white p-4 shadow-2xl shadow-slate-900/10 z-50">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#0872b9]/70 mb-3">
                      Services
                    </p>
                    <ul className="space-y-2 text-sm text-slate-700">
                      {servicesList.map((item) => (
                        <li key={item}>
                          <Link
                            to="/services"
                            onClick={() => setMenuOpen(false)}
                            className="block rounded-2xl px-3 py-2 hover:bg-[#0872b9]/5 hover:text-[#0872b9] transition"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#0872b9]/70 mb-3">
                      Technologies
                    </p>
                    <ul className="space-y-2 text-sm text-slate-700">
                      {technologiesList.map((item) => (
                        <li key={item}>
                          <Link
                            to="/technologies"
                            onClick={() => setMenuOpen(false)}
                            className="block rounded-2xl px-3 py-2 hover:bg-[#0872b9]/5 hover:text-[#0872b9] transition"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const isHovered = hoveredPath === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onMouseEnter={() => setHoveredPath(item.path)}
                  className={`relative px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-colors z-10 
                    ${isActive || isHovered ? "text-[#0872b9]" : "text-[#0872b9] hover:text-[#0872b9]"}`}
                >
                  {isHovered && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-[#0872b9]/10 rounded-full -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
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
