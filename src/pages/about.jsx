import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Shield,
  Building2,
  Users2,
  TrendingUp,
  Award,
  Globe,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function About() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="font-sans overflow-hidden">
      {/* HERO */}
      <section
        className="relative h-[30vh] md:h-[50vh] flex items-center text-white"
        style={{
          backgroundImage:
            "url('https://t4.ftcdn.net/jpg/03/77/96/35/360_F_377963527_mcjPoX6p11HGPv9XfcUL6nWnQJzYo8hQ.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">
            About Us
          </h1>
          <p className="text-slate-300 max-w-xl">
            <Link to="/" className="text-amber-400 hover:underline">
              Home
            </Link>{" "}
            / About Us
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            className="rounded-2xl shadow-xl"
            alt="About"
          />

          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Who We Are
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6 text-justify">
              Al Nahla Solutions brings over 17 years of proven IT expertise
              from Oman into the UAE market. Our Abu Dhabi headquarters
              represents a strategic expansion delivering enterprise-grade,
              secure, and scalable solutions.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex gap-3">
                <Shield className="text-amber-500" />
                <span>ISO Certified</span>
              </div>
              <div className="flex gap-3">
                <Building2 className="text-amber-500" />
                <span>Enterprise Focus</span>
              </div>
              <div className="flex gap-3">
                <Users2 className="text-amber-500" />
                <span>750+ Clients</span>
              </div>
              <div className="flex gap-3">
                <TrendingUp className="text-amber-500" />
                <span>500+ Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section
        className="relative py-32 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative max-w-5xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase">
              Our Journey
            </h2>
            <div className="w-16 h-[2px] bg-amber-400 mx-auto mt-4" />
          </div>

          {/* Timeline Wrapper */}
          <div className="relative">
            {/* Desktop Center Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/20 -translate-x-1/2" />

            {/* Mobile Left Line */}
            <div className="md:hidden absolute left-4 top-0 bottom-0 w-[2px] bg-white/20" />

            {[
              {
                year: "2008",
                text: "Founded in Oman, establishing a strong foundation in enterprise IT services.",
              },
              {
                year: "2015",
                text: "Expanded capabilities with 300+ successful projects and major enterprise clients.",
              },
              {
                year: "2022",
                text: "Achieved 750+ clients and 70+ global technology partnerships.",
              },
              {
                year: "2026",
                text: "Launched Abu Dhabi HQ, bringing proven expertise into the UAE market.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`relative mb-16 flex items-center 
            ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}
            justify-start
          `}
              >
                {/* Content */}
                <div
                  data-aos="fade-up"
                  className="w-full md:w-[45%] ml-10 md:ml-0 backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-xl"
                >
                  <h3 className="text-amber-400 font-bold text-lg mb-2">
                    {item.year}
                  </h3>
                  <p className="text-white/80">{item.text}</p>
                </div>

                {/* Dot */}
                <div
                  className={`
              absolute w-4 h-4 bg-amber-400 rounded-full shadow-lg
              md:left-1/2 md:-translate-x-1/2
              left-4
            `}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase mb-4">
              Leadership Team
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Meet the visionary leaders driving Al Nahla Solutions' success in
              delivering innovative IT solutions across UAE and Oman.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ahmed Al-Rashid",
                role: "Chief Executive Officer",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: "Fatima Al-Zahra",
                role: "Chief Technology Officer",
                image: "https://randomuser.me/api/portraits/women/45.jpg",
              },
              {
                name: "Omar Al-Mansoori",
                role: "Chief Operations Officer",
                image: "https://randomuser.me/api/portraits/men/28.jpg",
              },
            ].map((leader, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6 text-center">
                  <img
                    src={leader.image}
                    className="w-24 h-24 mx-auto rounded-full mb-4 object-cover border-4 border-amber-100"
                    alt={leader.name}
                  />
                  <h3 className="font-bold text-slate-900 text-lg mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-amber-600 font-medium mb-3">
                    {leader.role}
                  </p>
                
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase mb-4">
              Certifications & Partnerships
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Our commitment to excellence is validated through industry-leading
              certifications and strategic global partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "ISO 9001:2015",
                desc: "Quality Management Systems certification ensuring consistent service excellence.",
              },
              {
                icon: Shield,
                title: "ISO 27001:2013",
                desc: "Information Security Management certification for robust data protection.",
              },
              {
                icon: Globe,
                title: "Global Technology Partners",
                desc: "70+ strategic partnerships with leading technology providers worldwide.",
              },
            ].map((cert, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 150}
                className="bg-slate-800 rounded-xl p-8 text-center hover:bg-slate-700 transition-colors duration-300 border border-slate-700"
              >
                <cert.icon className="mx-auto mb-6 text-amber-400" size={48} />
                <h3 className="text-white font-bold text-xl mb-3">
                  {cert.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase mb-4">
              Join Our Team
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-8">
              Be part of a dynamic team shaping the future of enterprise IT
              solutions across UAE and Oman.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Why Choose Al Nahla?
              </h3>
              <ul className="space-y-4">
                {[
                  "Innovative projects with cutting-edge technologies",
                  "Competitive compensation and benefits package",
                  "Professional development and certification opportunities",
                  "Work-life balance in a supportive environment",
                  "International exposure across UAE and Oman markets",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div data-aos="fade-left" className="text-center">
              <div className="bg-slate-50 rounded-xl p-8 mb-8">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="text-3xl font-bold text-amber-600">
                      200+
                    </div>
                    <div className="text-slate-600">Team Members</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-amber-600">15+</div>
                    <div className="text-slate-600">Open Positions</div>
                  </div>
                </div>
                <Link
                  to="/careers"
                  className="inline-block px-8 py-3 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-500 transition-colors duration-300"
                >
                  View Open Positions
                </Link>
              </div>
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
            Let's discuss how Al Nahla Solutions can help you achieve your IT
            goals with our proven expertise and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              Get In Touch
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border-2 border-black text-black font-semibold rounded-lg hover:bg-black hover:text-white transition-colors duration-300"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
