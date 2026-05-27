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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
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

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Shield className="text-[#f38020]" />
                <span className="font-medium text-[#0872b9]">
                  Trusted Solutions
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Building2 className="text-[#f38020]" />
                <span className="font-medium text-[#0872b9]">
                  Enterprise ICT
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Users2 className="text-[#f38020]" />
                <span className="font-medium text-[#0872b9]">
                  Government & SME
                </span>
              </div>

              <div className="flex items-center gap-3">
                <TrendingUp className="text-[#f38020]" />
                <span className="font-medium text-[#0872b9]">
                  Digital Transformation
                </span>
              </div>
            </div>
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
            <span className="tracking-[4px] text-[#f38020] font-semibold">
              Our Growth
            </span>

            <h2 className="text-4xl font-bold text-white mt-4">Our Journey</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div
              data-aos="fade-up"
              className="backdrop-blur-md bg-white/10 border border-white/10 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-[#f38020] mb-4">
                Founded in Oman
              </h3>

              <p className="text-white/90 leading-relaxed">
                Founded in Oman over 17 years ago, Al Nahla Solutions grew from
                a focused IT services provider into one of the region’s most
                trusted technology partners.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="backdrop-blur-md bg-white/10 border border-white/10 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-[#f38020] mb-4">
                Tier-1 Partnerships
              </h3>

              <p className="text-white/90 leading-relaxed">
                Today, we hold Tier-1 partner status with many of the world’s
                leading technology vendors and have delivered hundreds of
                enterprise-grade projects across critical sectors.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="backdrop-blur-md bg-white/10 border border-white/10 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-[#f38020] mb-4">
                UAE Expansion
              </h3>

              <p className="text-white/90 leading-relaxed">
                Our expansion into the UAE with headquarters established in Abu
                Dhabi marks a natural progression of our regional growth.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="backdrop-blur-md bg-white/10 border border-white/10 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-[#f38020] mb-4">
                GCC Expertise
              </h3>

              <p className="text-white/90 leading-relaxed">
                We bring deep GCC expertise and a proven delivery track record
                to one of the world’s most dynamic technology markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          {/* Mission */}
          <div
            data-aos="fade-right"
            className="bg-[#0872b9] p-10 rounded-3xl shadow-xl"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>

            <p className="text-white/90 leading-relaxed text-justify">
              Our mission is to empower individuals and businesses through
              transformative technology, support economic diversification, and
              drive sustainable growth. Through advanced ICT solutions, we aim
              to enhance efficiency while upholding social responsibility and
              digital inclusion.
            </p>

            <p className="text-white/90 leading-relaxed mt-5 text-justify">
              In the UAE, we are committed to supporting the nation’s transition
              to a knowledge-based economy and reinforcing the region’s role as
              a global ICT leader in line with UAE Vision 2031.
            </p>
          </div>

          {/* Vision */}
          <div
            data-aos="fade-left"
            className="bg-[#f38020] p-10 rounded-3xl shadow-xl"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>

            <p className="text-white leading-relaxed text-justify">
              Our vision is to be a driving force in the UAE’s digital
              transformation, supporting the goals of UAE Vision 2031 and the
              Smart UAE Strategy.
            </p>

            <p className="text-white leading-relaxed mt-5 text-justify">
              We are committed to delivering innovative ICT solutions that help
              realize a smart, connected, and future-ready United Arab Emirates.
              By bringing our proven Oman model to the UAE, we aim to become the
              region’s most trusted ICT partner.
            </p>
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

      {/* CAREERS */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="tracking-[4px] text-[#f38020] font-semibold">
              Careers
            </span>

            <h2 className="text-4xl font-bold text-[#0872b9] mt-4 mb-5">
              Join Our Team
            </h2>

            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Be part of a dynamic team shaping the future of enterprise IT
              solutions across the UAE and Oman.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div data-aos="fade-right">
              <img
                src="https://static.vecteezy.com/system/resources/previews/013/445/892/non_2x/digital-technology-banner-blue-background-ai-big-data-online-cyber-security-technology-abstract-privacy-hi-tech-binary-code-innovation-future-data-internet-network-connection-illustration-vector.jpg"
                alt="Careers"
                className="rounded-3xl shadow-2xl"
              />
            </div>

            <div data-aos="fade-left">
              <h3 className="text-3xl font-bold text-[#0872b9] mb-8">
                Why Join Us?
              </h3>

              <ul className="space-y-5">
                {[
                  "Work on innovative projects using cutting-edge technologies",
                  "Enjoy a competitive compensation and benefits package",
                  "Access professional development and certification opportunities",
                  "Experience work-life balance in a supportive environment",
                  "Gain international exposure across the UAE and Oman markets",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <CheckCircle
                      className="text-[#f38020] flex-shrink-0 mt-1"
                      size={22}
                    />

                    <span className="text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 p-6 bg-[#0872b9] rounded-2xl">
                <p className="text-white leading-relaxed mb-4">
                  We are always looking for talented individuals who are
                  passionate about technology and driven to make a difference.
                </p>

                <a
                  href="mailto:careers@alnahlasolutions.ae"
                  className="text-white font-semibold text-lg"
                >
                  careers@alnahlasolutions.ae
                </a>
              </div>
            </div>
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
