import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Shield,
  Building2,
  Users2,
  TrendingUp,
  Award,
  Globe,
  Lightbulb,
  Handshake,
  CheckCircle,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

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

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section
        className="relative h-[35vh] md:h-[55vh] flex items-center text-white"
        style={{
          backgroundImage: "url('https://wallpaper.dog/large/20372204.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0872b9]/80" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Al Nahla Edge</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div data-aos="fade-right">
            <img
              src="https://wallpaper.dog/large/20372204.jpg"
              alt="About Al Nahla"
              className="rounded-3xl shadow-2xl w-full"
            />
          </div>

          <div data-aos="fade-left">
            <span className="tracking-[4px] text-[#f38020] font-semibold">
              The Al Nahla Edge
            </span>

            <h2 className="text-4xl font-bold text-[#0872b9] mt-4 mb-6">
              Trusted ICT Partner Since 2008
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6 text-justify">
              Established in 2008 in the Sultanate of Oman, Al Nahla Solutions
              LLC is a leading ICT system integrator helping organizations
              navigate digital transformation. We have supported a wide range of
              clients, from government entities and SMEs to large enterprises,
              by delivering expert guidance and innovative solutions.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8 text-justify">
              With a strong focus on ICT services and evolving digital
              technologies, we have built trusted partnerships with leading
              global vendors while delivering scalable and future-ready
              enterprise solutions across the GCC region.
            </p>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section
        className="relative py-28 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1438937435/photo/electronic-technology-high-tech-abstract-background.jpg?s=170667a&w=0&k=20&c=P7mkFqURrxdjxvhfFKAYu_aMXa084DPQZYMvMoOnKzw=')",
        }}
      >
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mt-4">Our Journey</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div
              data-aos="fade-up"
              className="backdrop-blur-md bg-white/10 border border-white/10 p-8 rounded-2xl"
            >
              <ul className="list-disc pl-5 text-white/90 leading-relaxed space-y-2">
                <li>Founded in Oman over 17 years ago.</li>
                <li>Started as a focused IT services provider.</li>
                <li>
                  Now one of the region's most trusted technology partners.
                </li>
              </ul>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="backdrop-blur-md bg-white/10 border border-white/10 p-8 rounded-2xl"
            >
              <ul className="list-disc pl-5 text-white/90 leading-relaxed space-y-2">
                <li>Tier-1 partner with leading global technology vendors.</li>
                <li>Delivered hundreds of enterprise-grade IT projects.</li>
                <li>Trusted across multiple critical industry sectors.</li>
              </ul>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="backdrop-blur-md bg-white/10 border border-white/10 p-8 rounded-2xl"
            >
              <ul className="list-disc pl-5 text-white/90 leading-relaxed space-y-2">
                <li>Expanded operations into the UAE.</li>
                <li>Established headquarters in Abu Dhabi.</li>
                <li>Strengthened our regional presence and growth.</li>
              </ul>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="backdrop-blur-md bg-white/10 border border-white/10 p-8 rounded-2xl"
            >
              <ul className="list-disc pl-5 text-white/90 leading-relaxed space-y-2">
                <li>Deep expertise across the GCC region.</li>
                <li>Proven track record in enterprise project delivery.</li>
                <li>
                  Serving one of the world's fastest-growing technology markets.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="relative overflow-hidden bg-slate-50 py-24">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-20">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-[#0872b9]">
              What Drives Us
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-black text-[#0872b9]">
              Mission & Vision
            </h2>

            <div className="w-24 h-1 rounded-full bg-gradient-to-r from-[#0872b9] to-[#f38020] mx-auto mt-5"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Mission Card */}
            <div
              data-aos="fade-right"
              className="group bg-white rounded-[32px] shadow-xl hover:shadow-2xl border border-slate-200 overflow-hidden transition-all duration-500 hover:-translate-y-2"
            >
              <div className="h-2 bg-[#0872b9]"></div>

              <div className="p-10">
                <div className="flex items-center gap-5 mb-8">
                  <div>
                    <span className="uppercase tracking-[3px] text-[#0872b9]/70 text-sm font-semibold">
                      Our Purpose
                    </span>

                    <h3 className="text-3xl font-bold text-[#0872b9] mt-1">
                      Our Mission
                    </h3>
                  </div>
                </div>

                <div className="space-y-5 text-gray-600 leading-8">
                  <p>
                    Our mission is to empower individuals and businesses through
                    transformative technology, support economic diversification,
                    and drive sustainable growth. Through advanced ICT
                    solutions, we enhance operational efficiency while promoting
                    digital inclusion and social responsibility.
                  </p>

                  <p>
                    In the UAE, we actively support the nation's transition to a
                    knowledge-based economy and contribute towards the goals of
                    UAE Vision 2031 by delivering innovative and future-ready
                    technology solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div
              data-aos="fade-left"
              className="group bg-white rounded-[32px] shadow-xl hover:shadow-2xl border border-slate-200 overflow-hidden transition-all duration-500 hover:-translate-y-2"
            >
              <div className="h-2 bg-[#f38020]"></div>

              <div className="p-10">
                <div className="flex items-center gap-5 mb-8">
                  <div>
                    <span className="uppercase tracking-[3px] text-[#f38020]/70 text-sm font-semibold">
                      Our Future
                    </span>

                    <h3 className="text-3xl font-bold text-[#f38020] mt-1">
                      Our Vision
                    </h3>
                  </div>
                </div>

                <div className="space-y-5 text-gray-600 leading-8">
                  <p>
                    Our vision is to become a leading force in the UAE's digital
                    transformation by supporting the ambitions of UAE Vision
                    2031 and the Smart UAE Strategy through innovative ICT
                    services.
                  </p>

                  <p>
                    By bringing our successful Oman business model to the UAE,
                    we aspire to become the region's most trusted ICT partner,
                    delivering intelligent, connected, and future-ready digital
                    solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-[#f8fafc] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="tracking-[4px] text-[#f38020] font-semibold">
              What Drives Us
            </span>

            <h2 className="text-4xl font-bold text-[#0872b9] mt-4">
              Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Innovation",
                desc: "Embracing forward-thinking technologies and solutions.",
              },
              {
                icon: Shield,
                title: "Integrity",
                desc: "Acting with honesty, transparency, and accountability.",
              },
              {
                icon: Award,
                title: "Excellence",
                desc: "Delivering the highest standards in every engagement.",
              },
              {
                icon: Handshake,
                title: "Partnership",
                desc: "Building trusted long-term client relationships.",
              },
              {
                icon: CheckCircle,
                title: "Reliability",
                desc: "Providing consistent and dependable service support.",
              },
              {
                icon: Globe,
                title: "Agility",
                desc: "Adapting quickly to evolving technologies and business needs.",
              },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300"
              >
                <item.icon className="text-[#f38020] mb-5" size={45} />

                <h3 className="text-2xl font-bold text-[#0872b9] mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR IMPACT */}
      <section className="bg-[#f8fafc] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="tracking-[4px] text-[#f38020] font-semibold">
              Our Impact
            </span>

            <h2 className="text-4xl font-bold text-[#0872b9] mt-4">
              What We Deliver
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                number: 18,
                suffix: "+",
                label: "Years Field Experience",
              },
              {
                number: 500,
                suffix: "+",
                label: "Projects Done Around Oman",
              },
              {
                number: 60,
                suffix: "+",
                label: "Work Force",
              },
              {
                number: 2008,
                suffix: "",
                label: "Year Established On",
              },
              {
                number: 2,
                suffix: "+",
                label: "Service Hub",
              },
              {
                number: 750,
                suffix: "+",
                label: "Happy Clients",
              },
            ].map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="group relative bg-white p-8 rounded-3xl shadow-lg border border-slate-200 hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-5xl font-extralight tracking-tight text-[#0872b9] leading-none mb-4">
                  <Counter end={item.number} suffix={item.suffix} />
                </h3>

                <p className="text-slate-700 font-medium leading-relaxed">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#0872b9] to-[#0b5f95] py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>

          <p className="text-white/80 text-lg leading-relaxed mb-10">
            Partner with Al Nahla Solutions and accelerate your digital
            transformation journey with trusted enterprise ICT expertise.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#f38020] text-white font-semibold rounded-xl hover:scale-105 transition duration-300"
            >
              Contact Us
            </Link>

            <Link
              to="/services"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-[#0872b9] transition duration-300"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
