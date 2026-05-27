import { useEffect, useState } from "react";
import AOS from "aos";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

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
    <span id={`counter-${end}-${suffix}`}>
      {count}
      {suffix}
    </span>
  );
}

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section
        className="relative h-[30vh] md:h-[50vh] flex items-center text-white"
        style={{
          backgroundImage:
            "url('https://as2.ftcdn.net/v2/jpg/06/21/38/09/1000_F_621380970_R7J1LVl5jj0opdCWhU8QTGo8KU56G03x.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0872b9]/70" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        </div>
      </section>

      {/* MAIN SECTION - FORM LEFT, STATS RIGHT */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* LEFT - FORM */}
          <div data-aos="fade-right">
            <h2 className="text-2xl font-bold mb-6 text-[#0872b9]">
              Send a Message
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border rounded-xl focus:border-[#f38020] outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border rounded-xl focus:border-[#f38020] outline-none"
              />
              <input
                type="text"
                placeholder="Company"
                className="w-full px-4 py-3 border rounded-xl focus:border-[#f38020] outline-none"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-3 border rounded-xl focus:border-[#f38020] outline-none"
              />

              <button className="px-6 py-3 bg-[#f38020] text-[#0872b9] font-semibold rounded-xl hover:bg-[#f38020] transition flex items-center gap-2">
                Send Message <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* RIGHT - STATS GRID */}
          <div data-aos="fade-left">
            <h2 className="text-2xl font-bold mb-8 text-[#0872b9]">
              Our Impact
            </h2>

            <div className="grid grid-cols-2 gap-6">
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
                  data-aos-delay={index * 50}
                  className="group relative bg-gradient-to-br from-[#0872b9]/5 to-[#f38020]/5 rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 min-h-[160px] flex flex-col justify-between"
                >
                  <div className="absolute top-0 left-0 h-1 w-0 bg-[#f38020] group-hover:w-full transition-all duration-500" />

                  <div>
                    <h3 className="text-[36px] sm:text-[42px] leading-none font-black tracking-tight text-slate-900 group-hover:text-[#0872b9] transition-colors duration-300">
                      <Counter end={item.number} suffix={item.suffix} />
                    </h3>
                  </div>

                  <div className="mt-4">
                    <p className="text-[#0872b9] text-sm leading-snug font-medium">
                      {item.label}
                    </p>
                  </div>

                  <div className="mt-3 w-8 h-[2px] bg-[#0872b9]/20 rounded-full group-hover:w-12 group-hover:bg-[#f38020] transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAPS SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0872b9]">Our Locations</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* ABU DHABI MAP */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                title="Abu Dhabi"
                src="https://maps.google.com/maps?q=Abu%20Dhabi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[350px] border-0"
                loading="lazy"
              />
            </div>

            {/* DUBAI MAP */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                title="Dubai"
                src="https://maps.google.com/maps?q=Dubai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[350px] border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
