import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Info, Briefcase, BookOpen, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "../../assets/logo/logonobg.png";

const navItems = [
  { name: "Home", path: "/", icon: <Home size={18} /> },
  { name: "About", path: "/about", icon: <Info size={18} /> },
  { name: "Careers", path: "/careers", icon: <Briefcase size={18} /> },
  { name: "Blog", path: "/blog", icon: <BookOpen size={18} /> },
  { name: "Contact", path: "/contact", icon: <Phone size={18} /> },
];

export default function FloatingNavbar() {
  const location = useLocation();
  const [hoveredPath, setHoveredPath] = useState(location.pathname);

  return (
    <>
      {/* ================= DESKTOP: FLOATING PILL ================= */}
      <div className="hidden md:flex fixed top-6 left-0 w-full z-50 justify-center pointer-events-none">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="flex items-center gap-2 p-2 bg-white border border-gray-200 rounded-full pointer-events-auto"
          onMouseLeave={() => setHoveredPath(location.pathname)}
        >
          <img src={Logo} alt="Logo" className="h-8 w-auto ml-3 mr-4" />

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
                    ${isActive || isHovered ? "text-blue-700" : "text-gray-600 hover:text-gray-900"}`}
                >
                  {isHovered && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-blue-100 rounded-full -z-10"
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
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[400px] px-4 py-2 bg-white/95 backdrop-blur-xl border border-gray-200 shadow-xl rounded-3xl flex justify-between items-center md:hidden z-50">
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
                  ${isActive ? "bg-blue-500 text-white shadow-md shadow-blue-500/40" : "text-gray-500"}`}
              >
                {item.icon}
              </motion.div>

              {/* Text Label in Small Letters */}
              <span
                className={`text-[10px] font-medium tracking-wide transition-colors ${
                  isActive ? "text-blue-600" : "text-gray-500"
                }`}
              >
                {item.name}
              </span>

              {/* Active Dot Indicator */}
              {isActive && (
                <motion.div
                  layoutId="mobile-dot"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"
                />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
}
