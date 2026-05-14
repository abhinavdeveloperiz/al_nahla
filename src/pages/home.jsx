import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import Logo from "../assets/logo/logonobg.png";
import {
  Zap,
  Shield,
  Network,
  Building2,
  Server,
  Code2,
  Settings2,
  Lightbulb,
  ClipboardList,
  LayoutTemplate,
  UserPlus,
  Wrench,
  TrendingUp,
  Users2,
  ArrowRight,
} from "lucide-react";

function RotatingText() {
  const lines = [
    "Abu Dhabi HQ Launch",
    "Aligned with Oman Legacy",
    "Enterprise IT Excellence",
    "Technologies • Services • Business",
    "Built for UAE Market",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % lines.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[120px] md:h-[160px] flex items-center justify-center relative">
      <h2
        key={index}
        data-aos="zoom-out"
        className="
          text-5xl md:text-6xl lg:text-7xl
          font-extrabold
          text-[#0872b9]
          leading-tight
          tracking-tight
          transition-all duration-700
        "
      >
        <span className="bg-gradient-to-r from-[#0872b9] to-[#f38020] uppercase bg-clip-text text-transparent">
          {lines[index]}
        </span>
      </h2>
    </div>
  );
}

function Counter({ end, suffix }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 },
    );

    const element = document.getElementById(`counter-${end}-${suffix}`);

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [end, suffix]);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const incrementTime = 16;
    const steps = duration / incrementTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <span
      id={`counter-${end}-${suffix}`}
      className="block whitespace-nowrap leading-none"
    >
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Home() {
  const [activeService, setActiveService] = useState(0);

  const STATS = [
    { value: "17+", label: "Years" },
    { value: "750+", label: "Clients" },
    { value: "500+", label: "Projects" },
    { value: "70+", label: "Partners" },
  ];

  const stats = [
    {
      value: "18+",
      label: "Years Experience",
      color: "blue",
      pos: "top-10 left-10",
    },
    {
      value: "750+",
      label: "Happy Clients",
      color: "orange",
      pos: "top-40 left-1/3",
    },
    {
      value: "24x7",
      label: "Support",
      color: "orange",
      pos: "top-40 right-1/3",
    },
    {
      value: "3+",
      label: "Service Hubs\n(Oman + UAE)",
      color: "blue",
      pos: "top-10 right-10",
    },
    {
      value: "500+",
      label: "Projects Completed",
      color: "orange",
      pos: "bottom-10 left-20",
    },
    {
      value: "60+",
      label: "Work Force",
      color: "blue",
      pos: "bottom-20 left-1/2 -translate-x-1/2",
    },
    {
      value: "70+",
      label: "Partnerships",
      color: "orange",
      pos: "bottom-10 right-20",
    },
  ];

  const SERVICES = [
    {
      title: "Managed Services",
      desc: "Full IT support & monitoring",
      image:
        "https://th.bing.com/th/id/R.2e353704568d8461df59e69b19de19cf?rik=HuUdGsaaVgdiCQ&riu=http%3a%2f%2f22centurydesign.com%2fwp-content%2fuploads%2f2022%2f08%2fAdobeStock_494839224-scaled.jpeg&ehk=4TJuZI1j42CSF%2fkX2erak1Lv0oKY63lr%2bX53ddKkwEA%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      title: "IT Consultancy",
      desc: "Strategic IT planning",
      image:
        "https://i.pinimg.com/736x/53/ad/5a/53ad5ae5b21d5437660a0914aa477e9a.jpg",
    },
    {
      title: "Professional Services",
      desc: "Deployment & integration",
      image:
        "https://cdn.sanity.io/images/tlr8oxjg/production/acaceb27f1c52bce9db7527d89fbd95299df7421-1456x816.png?w=1080&q=100&fit=clip&auto=format",
    },
    {
      title: "Solution Architecture",
      desc: "Future-ready systems",
      image:
        "https://i.pcmag.com/imagery/roundups/05jgY5MYN5mNQUsxoGLX5Iu-1.fit_lim.size_400x250.v1607029548.jpg",
    },
    {
      title: "Staff Augmentation",
      desc: "On-demand engineers",
      image:
        "https://community.cisco.com/t5/image/serverpage/image-id/243146i87E00DDB923C90E7/image-size/medium?v=v2&px=400",
    },
    {
      title: "Annual Maintenance",
      desc: "Guaranteed uptime",
      image:
        "https://www.cmarix.com/blog/wp-content/uploads/2022/08/benefits-BaaS-brings-to-your-business.jpg",
    },
  ];

  const TESTIMONIALS = [
    {
      quote:
        "Al Nahla transformed our IT infrastructure completely. Their team is highly professional and responsive.",
      name: "Ahmed R.",
      title: "Operations Manager",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote:
        "Reliable, scalable, and always on time. Their managed services helped us reduce downtime significantly.",
      name: "Sarah M.",
      title: "IT Director",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      quote:
        "Exceptional support and deep technical expertise. Highly recommended for enterprise IT projects.",
      name: "Khalid A.",
      title: "CEO",
      avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" overflow-hidden">
      {/* HERO */}
      <section
        className="relative h-[70vh] md:h-[90vh] flex items-center text-white"
        data-aos="fade-in"
        style={{
          backgroundPosition: "center",
          backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/004/924/971/original/abstract-luxury-modern-background-3d-free-vector.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
          {/* Arabic Text */}
          <p
            data-aos="fade-up"
            className="text-[#f38020] text-xl md:text-3xl font-medium tracking-wide mb-3 mt-10"
          >
            النهلة لحلول تكنولوجيا المعلومات ذ.م.م
          </p>

          {/* Main Heading */}
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl md:text-7xl font-extrabold leading-tight"
          >
            <span className="text-[#0872b9]">Al Nahla</span>{" "}
            <span className="text-[#f38020]">Solutions L.L.C</span>
          </h1>

          {/* Subtitle */}
          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-[#0872b9] text-lg md:text-2xl font-semibold tracking-[0.2em] uppercase mt-4"
          >
            Information Technology
          </h2>

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-white/90 text-base md:text-lg max-w-3xl mx-auto mt-8 leading-relaxed"
          >
            Delivering secure, scalable and future-ready IT infrastructure,
            enterprise solutions, cybersecurity and digital transformation
            services for modern businesses.
          </p>

          {/* Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            <Link
              to="/contact"
              className="px-8 py-3 bg-[#f38020] text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:bg-[#de6f14] transition-all duration-300"
            >
              Get Started
            </Link>

            <Link
              to="/services"
              className="px-8 py-3 border border-white text-white font-medium rounded-xl hover:bg-white hover:text-[#0872b9] transition-all duration-300"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* UAE INTRO SECTION */}
      <section className="bg-white py-24 flex items-center justify-center overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <RotatingText />
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="relative bg-[#0872b9] py-28 overflow-hidden">
        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#f38020]/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full translate-x-1/2 translate-y-1/2" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE */}
            <div data-aos="fade-right" className="relative">
              {/* BIG HEADING */}
              <h2 className="text-2xl lg:text-4xl font-black leading-tight text-white">
                Global Systems Integrator.
                <span className="block">Local Partner of Choice.</span>
              </h2>
            </div>

            {/* RIGHT SIDE */}
            <div data-aos="fade-left" className="relative">
              {/* GLASS CARD */}
              <div className="relative  backdrop-blur-2xl rounded-[32px] p-8 md:p-10">
                {/* TOP LABEL */}
                <div className="inline-flex px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-medium mb-6">
                  About Al Nahla UAE
                </div>

                {/* PARAGRAPH */}
                <p className="text-white/90 leading-relaxed text-lg mb-8 text-justify">
                  Al Nahla Solutions brings 17 years of proven IT excellence
                  from Oman into the UAE market. With a strong foundation of
                  enterprise delivery, certified processes, and regional
                  expertise, our Abu Dhabi headquarters marks a new chapter in
                  delivering scalable, secure, and future-ready technology
                  solutions across industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0872b9] uppercase">
              Our Services
            </h2>
            <p className="text-[#0872b9] mt-4 max-w-xl mx-auto">
              How we deliver enterprise-grade IT solutions across UAE.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <Link
                to="/services/details"
                key={i}
                data-aos="zoom-in"
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition"
              >
                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* CONTENT BELOW IMAGE */}
                <div className="p-6 ">
                  <h3 className="text-[#0872b9] text-xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm mt-2">{service.desc}</p>

                  {/* OPTIONAL CTA */}
                  <div className="mt-4">
                    <span className="text-[#f38020] font-medium text-sm group-hover:underline cursor-pointer">
                      Learn More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section
        className="relative py-28 bg-fixed bg-center bg-cover "
        style={{
          backgroundImage:
            "url('https://c4.wallpaperflare.com/wallpaper/121/27/632/technology-internet-wallpaper-preview.jpg')",
        }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[#0872b9]/75" />

        <div className="relative max-w-6xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2
              data-aos="fade-up"
              className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wide"
            >
              Technologies
            </h2>

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="w-16 h-[2px] bg-[#f38020] mx-auto mt-4"
            />
          </div>

          {/* Glass Container */}
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-10">
              {[
                { name: "Digital Transformation", icon: Lightbulb },
                { name: "Cyber Security", icon: Shield },
                { name: "Network Solutions", icon: Network },
                { name: "Enterprise Solutions", icon: Building2 },
                { name: "Infrastructure", icon: Server },
                { name: "Audio Visual", icon: Zap },
                { name: "Software Solutions", icon: Code2 },
                { name: "Collaboration", icon: Users2 },
              ].map((tech, i) => {
                const Icon = tech.icon;

                return (
                  <div
                    key={i}
                    data-aos="fade-up"
                    className="group flex items-start gap-4"
                  >
                    {/* Icon */}
                    <div className="mt-1">
                      <Icon
                        size={22}
                        className="text-white group-hover:text-[#f38020] transition"
                      />
                    </div>

                    {/* Text */}
                    <div>
                      <p className="text-white font-semibold leading-snug group-hover:text-[#f38020] transition">
                        {tech.name}
                      </p>

                      {/* underline */}
                      <div className="w-0 group-hover:w-12 h-[2px] bg-[#f38020] mt-2 transition-all duration-300" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          {/* TITLE */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0872b9] uppercase mb-4">
              Industries We Serve
            </h2>
            <p className="text-[#0872b9] max-w-2xl mx-auto">
              Delivering tailored IT solutions across diverse sectors
            </p>
          </div>

          {/* STRIP */}
          <div
            className="flex w-full overflow-x-auto py-2"
            data-aos="slide-left"
          >
            {[
              {
                name: "Government",
                img: "https://static.vecteezy.com/system/resources/thumbnails/002/082/060/small_2x/scanning-view-of-the-interface-structure-city-skyscrapers-in-blue-color-vector.jpg",
              },
              {
                name: "Oil & Gas",
                img: "https://static.vecteezy.com/system/resources/thumbnails/050/679/200/small_2x/oil-pumps-working-at-night-under-a-starry-blue-sky-with-artificial-lighting-illuminating-the-scene-in-a-modern-industrial-setting-photo.jpg",
              },
              {
                name: "Banking",
                img: "https://static.vecteezy.com/system/resources/previews/010/518/833/original/digital-finance-and-banking-investment-service-on-microchip-with-cloud-computing-in-futuristic-background-bank-building-with-online-payment-secure-money-and-financial-innovation-technology-vector.jpg",
              },
              {
                name: "Enterprise",
                img: "https://img.freepik.com/premium-photo/corporate-blue-business-background_87720-128495.jpg",
              },
              {
                name: "SME",
                img: "https://tse1.mm.bing.net/th/id/OIP.HakeDa58wUEAulJrzZ5yVwHaDL?rs=1&pid=ImgDetMain&o=7&rm=3",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative min-w-[240px] md:flex-1 group ml-12"
              >
                {/* IMAGE CARD */}
                <div className="relative h-[280px] overflow-hidden rounded-2xl">
                  {/* IMAGE */}
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* DARK OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>

                {/* TEXT OUTSIDE IMAGE */}
                <div className="mt-5 pl-2">
                  <h3 className="text-[#0872b9] font-bold text-xl md:text-2xl leading-snug tracking-wide">
                    {item.name}
                  </h3>

                  {/* SMALL LINE */}
                  <div className="mt-3 w-24 h-[3px] bg-[#f38020] rounded-full group-hover:w-44 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white py-20 md:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center relative">
          {/* BIG ? (smaller on mobile) */}
          <h1 className="absolute inset-0 flex items-center justify-center text-[120px] md:text-[220px] font-bold text-gray-200 opacity-40 select-none">
            ?
          </h1>

          {/* TITLE */}
          <h2 className="text-3xl md:text-5xl font-bold relative z-10">
            <span className="text-[#0872b9]">Why Al Nahla</span>{" "}
          </h2>

          <p className="text-gray-500 mt-3 relative z-10 text-sm md:text-base">
            The proven partner bringing GCC excellence to the UAE
          </p>

          {/* ---------- MOBILE VIEW (GRID) ---------- */}
          <div className="grid grid-cols-2 gap-6 mt-12 md:hidden">
            {stats.map((item, i) => (
              <div key={i} className="flex justify-center">
                <div
                  className={`w-28 h-28 rounded-full flex flex-col items-center justify-center text-white shadow-lg
                ${item.color === "blue" ? "bg-[#0872b9]" : "bg-[#f38020]"}`}
                >
                  <h3 className="text-lg font-bold">{item.value}</h3>
                  <p className="text-[10px] text-center px-2 whitespace-pre-line leading-tight">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ---------- DESKTOP VIEW (FLOATING) ---------- */}
          <div className="hidden md:block relative mt-24 h-[500px]">
            {stats.map((item, i) => (
              <div key={i} className={`absolute ${item.pos}`}>
                <div
                  className={`w-32 h-32 rounded-full flex flex-col items-center justify-center text-white shadow-xl
                ${item.color === "blue" ? "bg-[#0872b9]" : "bg-[#f38020]"}
                hover:scale-110 transition duration-300`}
                >
                  <h3 className="text-2xl font-bold">{item.value}</h3>
                  <p className="text-xs text-center px-2 whitespace-pre-line leading-tight">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROOF IN NUMBERS ================= */}
      <section className="relative bg-[#f5f7fa] py-24 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          {/* TOP HEADER */}
          <div className="max-w-3xl mb-16">
            <p
              data-aos="fade-up"
              className="text-[#0872b9] uppercase tracking-[4px] font-semibold mb-4"
            >
              Our Impact
            </p>

            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-4xl md:text-6xl font-black text-slate-900 leading-tight"
            >
              Proof in the
              <span className="block text-[#0872b9]">Numbers.</span>
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-6 text-slate-600 text-lg leading-relaxed max-w-2xl"
            >
              Delivering enterprise-grade IT infrastructure, cybersecurity,
              collaboration, and digital transformation solutions across UAE and
              Oman with proven operational excellence.
            </p>
          </div>

          {/* STATS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                number: 7,
                suffix: "",
                label: "Offices in the Middle East",
              },
              {
                number: 400,
                suffix: "+",
                label: "Experts in the Middle East",
              },
              {
                number: 80,
                suffix: "%",
                label: "Technical background workforce",
              },
              {
                number: 400,
                suffix: "+",
                label: "Certifications and licenses",
              },
              {
                number: 220,
                suffix: "+",
                label: "Global locations",
              },
              {
                number: 5000,
                suffix: "+",
                label: "Installations completed",
              },
              {
                number: 11000,
                suffix: "+",
                label: "Colleagues worldwide",
              },
              {
                number: 2000,
                suffix: "+",
                label: "Global certifications",
              },
            ].map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="group relative bg-white rounded-[30px] border border-slate-200 p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden min-h-[250px] flex flex-col justify-between"
              >
                {/* TOP ORANGE BAR */}
                <div className="absolute top-0 left-0 h-1 w-0 bg-[#f38020] group-hover:w-full transition-all duration-500" />

                {/* NUMBER */}
                <div>
                  <h3 className="text-[48px] sm:text-[56px] leading-none font-black tracking-tight text-slate-900 group-hover:text-[#0872b9] transition-colors duration-300 whitespace-nowrap overflow-hidden">
                    <Counter end={item.number} suffix={item.suffix} />
                  </h3>
                </div>

                {/* LABEL */}
                <div className="mt-8">
                  <p className="text-[#0872b9] text-xl leading-snug font-medium max-w-[220px]">
                    {item.label}
                  </p>
                </div>

                {/* BOTTOM LINE */}
                <div className="mt-8 w-12 h-[3px] bg-[#0872b9]/20 rounded-full group-hover:w-20 group-hover:bg-[#f38020] transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0872b9] uppercase mb-4">
              What Our Clients Say
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-[#0872b9] mt-4 max-w-xl mx-auto"
            >
              Trusted by businesses across UAE and Oman for delivering reliable,
              innovative IT solutions that drive success.
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
            >
              {TESTIMONIALS.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-full px-2 md:px-4"
                  data-aos="fade-up"
                >
                  <div className="bg-gradient-to-br from-white to-white border border-[#0872b9] p-8 md:p-12 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 h-full relative">
                    <div className="absolute top-6 left-6 text-[#f38020] text-2xl">
                      "
                    </div>
                    <p className="text-[#0872b9] mb-8 text-lg md:text-xl leading-relaxed pl-8">
                      {testimonial.quote}
                    </p>

                    <div className="flex items-center gap-4 pl-8">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-[#f38020]/20"
                      />
                      <div>
                        <h4 className="font-bold text-[#0872b9] text-lg">
                          {testimonial.name}
                        </h4>
                        <span className="text-[#0872b9] font-medium">
                          {testimonial.title}
                        </span>
                        <div className="flex gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-[#f38020] text-sm">
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center gap-3">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    idx === activeTestimonial
                      ? "bg-[#f38020] scale-125"
                      : "bg-[#0872b9] hover:bg-[#0872b9]"
                  }`}
                  aria-label={`Show testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#f38020] to-[#f38020] py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0872b9] mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-[#0872b9]/80 mb-8 text-lg">
            Partner with Al Nahla Solutions for enterprise-grade IT services in
            UAE and Oman. Let's discuss your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-[#0872b9] text-white font-semibold rounded-lg hover:bg-[#0872b9] transition-colors duration-300"
            >
              Request a Consultation
            </a>
            <a
              href="/services"
              className="px-8 py-4 border-2 border-[#0872b9] text-[#0872b9] font-semibold rounded-lg hover:bg-[#0872b9] hover:text-white transition-colors duration-300"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
