import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
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
          text-slate-900
          leading-tight
          tracking-tight
          transition-all duration-700
        "
      >
        <span className="bg-gradient-to-r from-black to-amber-600 uppercase bg-clip-text text-transparent">
          {lines[index]}
        </span>
      </h2>
    </div>
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
      image: "https://i.pcmag.com/imagery/roundups/05jgY5MYN5mNQUsxoGLX5Iu-1.fit_lim.size_400x250.v1607029548.jpg",
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
        className="relative h-[70vh] md:h-[80vh] flex items-center text-white"
        data-aos="fade-in"
        style={{
          backgroundImage: `url("https://wallpaperaccess.com/full/7333590.gif")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/0" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
          <h1
            data-aos="fade-up"
            className="text-3xl md:text-6xl font-bold mb-6 uppercase"
          >
            Smart IT Solutions for <br />
            <span className="text-amber-400"> Modern Business</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-slate-300 mb-8 max-w-xl"
          >
            Secure, scalable and future-ready IT infrastructure for enterprises.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-wrap gap-4 mt-6"
          >
            <Link
              to="/contact"
              className="px-6 py-3 bg-amber-400 text-black font-semibold rounded-lg shadow hover:bg-amber-500 transition"
            >
              Get Started
            </Link>

            <Link
              to="/services"
              className="px-6 py-3 border border-slate-300 text-slate-50 hover:text-black font-medium rounded-lg hover:bg-slate-100 transition"
            >
              Services
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="bg-slate-900 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-6">
          {STATS.map((s, i) => (
            <div key={i}>
              <h3 className="text-3xl text-amber-400 font-bold">{s.value}</h3>
              <p className="text-slate-400 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* UAE INTRO SECTION */}
      <section className="bg-white py-24 flex items-center justify-center overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <RotatingText />
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <div data-aos="fade-right" className="relative">
            <img
              src="https://vserviceitsolutions.com/wp-content/uploads/2022/07/it-serv-inner.jpg"
              alt="About Al Nahla"
              className="rounded-2xl shadow-xl w-full object-cover"
            />

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-amber-400 text-black px-6 py-3 rounded-xl shadow-lg text-sm font-semibold">
              17+ Years Experience
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            {/* Heading */}
            <h2
              data-aos="fade-up"
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 uppercase"
            >
              About Al Nahla UAE
            </h2>

            {/* Text */}
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-slate-600 leading-relaxed mb-8 text-justify"
            >
              Al Nahla Solutions brings 17 years of proven IT excellence from
              Oman into the UAE market. With a strong foundation of enterprise
              delivery, certified processes, and regional expertise, our Abu
              Dhabi headquarters marks a new chapter in delivering scalable and
              secure technology solutions across industries.
            </p>

            {/* ICON FEATURES */}
            <div className="grid grid-cols-2 gap-6">
              <div data-aos="zoom-in" className="flex items-start gap-3">
                <Shield className="text-amber-500" />
                <span className="text-slate-700 font-medium">
                  ISO Certified
                </span>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-delay="100"
                className="flex items-start gap-3"
              >
                <Building2 className="text-amber-500" />
                <span className="text-slate-700 font-medium">
                  Enterprise Focus
                </span>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-delay="200"
                className="flex items-start gap-3"
              >
                <Network className="text-amber-500" />
                <span className="text-slate-700 font-medium">70+ Partners</span>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-delay="300"
                className="flex items-start gap-3"
              >
                <TrendingUp className="text-amber-500" />
                <span className="text-slate-700 font-medium">750+ Clients</span>
              </div>
            </div>

            {/* CTA */}
            <div data-aos="fade-up" data-aos-delay="400" className="mt-8">
              <a
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-300 text-white font-semibold hover:bg-amber-600 rounded-xl hover:rounded-3xl transition duration-900"
              >
                Learn More <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES - IMAGE CARDS */}
      <section id="services" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase">
              Our Services
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto">
              How we deliver enterprise-grade IT solutions across UAE.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                className="group relative rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-sm mt-2">{service.desc}</p>
                </div>
              </div>
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
        <div className="absolute inset-0 bg-black/75" />

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
              className="w-16 h-[2px] bg-amber-400 mx-auto mt-4"
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
                        className="text-white group-hover:text-amber-400 transition"
                      />
                    </div>

                    {/* Text */}
                    <div>
                      <p className="text-white font-semibold leading-snug group-hover:text-amber-400 transition">
                        {tech.name}
                      </p>

                      {/* underline */}
                      <div className="w-0 group-hover:w-12 h-[2px] bg-amber-400 mt-2 transition-all duration-300" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          {/* TITLE */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase mb-4">
              Industries We Serve
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
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
                className="relative min-w-[240px] md:flex-1 h-[380px] overflow-hidden group ml-12"
                style={{
                  transform: "skewX(-15deg)",
                }}
              >
                {/* INNER FIX (removes distortion) */}
                <div className="w-full h-full relative">
                  {/* IMAGE */}
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-center justify-center">
                    <h3 className="text-white font-semibold text-lg md:text-xl text-center px-3 tracking-wide">
                      {item.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - ICON STYLE */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 uppercase">
              Why Choose Al Nahla UAE
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* Item 1 */}
            <div data-aos="zoom-in" className="group">
              <div className="flex justify-center mb-4">
                <Shield
                  size={40}
                  className="text-amber-500 group-hover:scale-110 transition"
                />
              </div>
              <h3 className="font-semibold text-slate-100">ISO Certified</h3>
            </div>

            {/* Item 2 */}
            <div data-aos="zoom-in" className="group">
              <div className="flex justify-center mb-4">
                <Building2
                  size={40}
                  className="text-amber-500 group-hover:scale-110 transition"
                />
              </div>
              <h3 className="font-semibold text-slate-100 ">
                Enterprise Solutions
              </h3>
            </div>

            {/* Item 3 */}
            <div data-aos="zoom-in" className="group">
              <div className="flex justify-center mb-4">
                <Network
                  size={40}
                  className="text-amber-500 group-hover:scale-110 transition"
                />
              </div>
              <h3 className="font-semibold text-slate-100">70+ Partners</h3>
            </div>

            {/* Item 4 */}
            <div data-aos="zoom-in" className="group">
              <div className="flex justify-center mb-4">
                <TrendingUp
                  size={40}
                  className="text-amber-500 group-hover:scale-110 transition"
                />
              </div>
              <h3 className="font-semibold text-slate-100">750+ Clients</h3>
            </div>

            {/* Item 5 */}
            <div data-aos="zoom-in" className="group">
              <div className="flex justify-center mb-4">
                <Zap
                  size={40}
                  className="text-amber-500 group-hover:scale-110 transition"
                />
              </div>
              <h3 className="font-semibold text-slate-100">Fast Delivery</h3>
            </div>

            {/* Item 6 */}
            <div data-aos="zoom-in" className="group">
              <div className="flex justify-center mb-4">
                <Server
                  size={40}
                  className="text-amber-500 group-hover:scale-110 transition"
                />
              </div>
              <h3 className="font-semibold text-slate-100">Cloud & Infra</h3>
            </div>

            {/* Item 7 */}
            <div data-aos="zoom-in" className="group">
              <div className="flex justify-center mb-4">
                <Code2
                  size={40}
                  className="text-amber-500 group-hover:scale-110 transition"
                />
              </div>
              <h3 className="font-semibold text-slate-100">Custom Software</h3>
            </div>

            {/* Item 8 */}
            <div data-aos="zoom-in" data-aos-delay="300" className="group">
              <div className="flex justify-center mb-4">
                <Users2
                  size={40}
                  className="text-amber-500 group-hover:scale-110 transition"
                />
              </div>
              <h3 className="font-semibold text-slate-100">Expert Team</h3>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase mb-4">
              What Our Clients Say
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-slate-600 mt-4 max-w-xl mx-auto"
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
                  <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-8 md:p-12 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 h-full relative">
                    <div className="absolute top-6 left-6 text-amber-400 text-2xl">
                      "
                    </div>
                    <p className="text-slate-700 mb-8 text-lg md:text-xl leading-relaxed pl-8">
                      {testimonial.quote}
                    </p>

                    <div className="flex items-center gap-4 pl-8">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-amber-200"
                      />
                      <div>
                        <h4 className="font-bold text-slate-900 text-lg">
                          {testimonial.name}
                        </h4>
                        <span className="text-slate-600 font-medium">
                          {testimonial.title}
                        </span>
                        <div className="flex gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-amber-400 text-sm">
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
                      ? "bg-amber-400 scale-125"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Show testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-amber-400 to-amber-500 py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-black/80 mb-8 text-lg">
            Partner with Al Nahla Solutions for enterprise-grade IT services in
            UAE and Oman. Let's discuss your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              Request a Consultation
            </a>
            <a
              href="/services"
              className="px-8 py-4 border-2 border-black text-black font-semibold rounded-lg hover:bg-black hover:text-white transition-colors duration-300"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
