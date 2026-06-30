import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Info,
  Briefcase,
  Phone,
  Server,
  ChevronDown,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import Logo from "../../assets/logo/logonobg.png";

const navItems = [
  { name: "Home", path: "/", icon: <Home size={18} /> },
  { name: "About", path: "/about", icon: <Info size={18} /> },
  { name: "Services", path: "/services", icon: <Briefcase size={18} /> },
  { name: "Technologies", path: "/technologies", icon: <Server size={18} /> },
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
  const [servicesOpen, setServicesOpen] = useState(false);
  const [technologiesOpen, setTechnologiesOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null); // 'services' | 'technologies' | null

  const servicesRef = useRef(null);
  const technologiesRef = useRef(null);
  const servicesTimer = useRef(null);
  const technologiesTimer = useRef(null);

  useEffect(() => {
    function handleDocClick(e) {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
      if (
        technologiesRef.current &&
        !technologiesRef.current.contains(e.target)
      ) {
        setTechnologiesOpen(false);
      }
    }

    function handleEsc(e) {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setTechnologiesOpen(false);
        setMobileDropdown(null);
      }
    }

    document.addEventListener("click", handleDocClick);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("click", handleDocClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <>
      {/* ================= DESKTOP: FULL NAVBAR ================= */}
      <div className="hidden md:block fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-lg border-b border-[#0872b9]/10 shadow-sm">
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="max-w-7xl mx-auto h-24 px-8 flex items-center justify-between"
        >
          {/* LOGO LEFT */}
          <Link to="/" className="flex items-center shrink-0">
            <img src={Logo} alt="Logo" className="h-16 w-auto object-contain" />
          </Link>

          {/* NAV CENTER/RIGHT */}
          <div className="flex items-center gap-3">
            {/* NORMAL NAV ITEMS */}
            {navItems.slice(0, 2).map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
            ${
              isActive
                ? "bg-[#0872b9] text-white shadow-md"
                : "text-[#0872b9] hover:bg-[#0872b9]/10"
            }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* SERVICES DROPDOWN */}
            <div
              className="relative"
              ref={servicesRef}
              onMouseEnter={() => {
                clearTimeout(servicesTimer.current);
                setServicesOpen(true);
              }}
              onMouseLeave={() => {
                servicesTimer.current = setTimeout(
                  () => setServicesOpen(false),
                  180,
                );
              }}
            >
              <div className="flex items-center gap-1">
                <Link
                  to="/services"
                  onClick={() => setServicesOpen(false)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
            ${
              location.pathname === "/services"
                ? "bg-[#0872b9] text-white shadow-md"
                : "text-[#0872b9] hover:bg-[#0872b9]/10"
            }`}
                >
                  Services
                </Link>
              </div>

              <div
                className={`absolute top-full left-0 mt-4 w-72 bg-white rounded-3xl border border-[#0872b9]/10 shadow-2xl p-4 transition-all duration-200 transform origin-top-left
          ${
            servicesOpen
              ? "opacity-100 visible translate-y-0 scale-100"
              : "opacity-0 invisible -translate-y-2 scale-95 pointer-events-none"
          }`}
              >
                <ul className="space-y-2">
                  {servicesList.map((item) => (
                    <li key={item}>
                      <Link
                        to="/services"
                        onClick={() => setServicesOpen(false)}
                        className="block px-4 py-3 rounded-2xl text-sm font-medium text-slate-700 hover:bg-[#0872b9]/5 hover:text-[#0872b9] transition-all"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* TECHNOLOGIES DROPDOWN */}
            <div
              className="relative"
              ref={technologiesRef}
              onMouseEnter={() => {
                clearTimeout(technologiesTimer.current);
                setTechnologiesOpen(true);
              }}
              onMouseLeave={() => {
                technologiesTimer.current = setTimeout(
                  () => setTechnologiesOpen(false),
                  180,
                );
              }}
            >
              <div className="flex items-center gap-1">
                <Link
                  to="/technologies"
                  onClick={() => setTechnologiesOpen(false)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
            ${
              location.pathname === "/technologies"
                ? "bg-[#0872b9] text-white shadow-md"
                : "text-[#0872b9] hover:bg-[#0872b9]/10"
            }`}
                >
                  Technologies
                </Link>
              </div>

              <div
                className={`absolute top-full right-0 mt-4 w-80 bg-white rounded-3xl border border-[#0872b9]/10 shadow-2xl p-4 transition-all duration-200 transform origin-top-right
          ${
            technologiesOpen
              ? "opacity-100 visible translate-y-0 scale-100"
              : "opacity-0 invisible -translate-y-2 scale-95 pointer-events-none"
          }`}
              >
                <ul className="space-y-2">
                  {technologiesList.map((item) => (
                    <li key={item}>
                      <Link
                        to="/technologies"
                        onClick={() => setTechnologiesOpen(false)}
                        className="block px-4 py-3 rounded-2xl text-sm font-medium text-slate-700 hover:bg-[#0872b9]/5 hover:text-[#0872b9] transition-all"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* REMAINING NAV ITEMS */}
            {navItems.slice(4).map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
            ${
              isActive
                ? "bg-[#0872b9] text-white shadow-md"
                : "text-[#0872b9] hover:bg-[#0872b9]/10"
            }`}
                >
                  {item.name}
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

          // Special handling for Services and Technologies on mobile: open bottom sheet
          if (item.name === "Services" || item.name === "Technologies") {
            const isOpen = mobileDropdown === item.name.toLowerCase();

            return (
              <div
                key={item.name}
                className="relative flex flex-col items-center justify-center w-14 gap-1 pt-1"
              >
                <Link
                  to={item.path}
                  className="relative flex flex-col items-center justify-center"
                >
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

                  <span className="text-[10px] font-medium tracking-wide text-[#0872b9]">
                    {item.name}
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    setMobileDropdown((s) =>
                      s === item.name.toLowerCase()
                        ? null
                        : item.name.toLowerCase(),
                    )
                  }
                  aria-expanded={isOpen}
                  className="absolute -right-0.5 top-0.5 p-1 rounded-full bg-white border border-slate-200 text-[#0872b9] shadow-sm hover:bg-[#f8fafc]"
                >
                  <ChevronDown size={14} />
                </button>
              </div>
            );
          }

          return (
            <Link
              key={item.name}
              to={item.path}
              className="relative flex flex-col items-center justify-center w-14 gap-1 pt-1"
            >
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

              <span className="text-[10px] font-medium tracking-wide transition-colors text-[#0872b9]">
                {item.name}
              </span>

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

      {/* Mobile bottom-sheet dropdowns */}
      {mobileDropdown && (
        <div className="fixed inset-0 z-50 flex items-end">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileDropdown(null)}
          />

          <div className="relative w-full max-w-md mx-auto mb-6 bg-white rounded-2xl p-4 shadow-2xl">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-lg text-slate-800">
                {mobileDropdown === "services" ? "Services" : "Technologies"}
              </h3>
              <button
                className="p-2 text-slate-600 rounded-full hover:bg-slate-100"
                onClick={() => setMobileDropdown(null)}
              >
                <X size={18} />
              </button>
            </div>

            <div className="divide-y divide-slate-100">
              {(mobileDropdown === "services"
                ? servicesList
                : technologiesList
              ).map((item) => (
                <Link
                  key={item}
                  to={
                    mobileDropdown === "services"
                      ? "/services"
                      : "/technologies"
                  }
                  onClick={() => setMobileDropdown(null)}
                  className="block px-4 py-3 text-slate-700 rounded-xl hover:bg-[#0872b9]/5 hover:text-[#0872b9]"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
