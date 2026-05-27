import {
  ShieldCheck,
  Server,
  Globe,
  Layers,
  ArrowRight,
  CheckCircle,
  Network,
  Lock,
  Cloud,
  Database,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function TechnologiesDetails() {
  const technologies = [
    {
      title: "Threat Detection",
      description:
        "Real-time threat intelligence and advanced detection mechanisms to identify and mitigate cyber risks before they impact operations.",
    },
    {
      title: "Endpoint Security",
      description:
        "Comprehensive protection for endpoints, user devices, and enterprise systems against malware, ransomware, and unauthorized access.",
    },
    {
      title: "Data Protection",
      description:
        "Advanced encryption, backup, and access control strategies ensuring the security and integrity of critical business data.",
    },
    {
      title: "Security Monitoring",
      description:
        "24/7 continuous monitoring and rapid incident response to maintain operational continuity and enterprise resilience.",
    },
  ];

  return (
    <div className="bg-white overflow-hidden">
      <section className="relative h-[30vh] md:h-[50vh] flex items-center text-white">
        <div className="absolute inset-0 bg-[#0872b9]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cyber Security
          </h1>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* LEFT */}
            <div>
              <div
                data-aos="fade-right"
                className="inline-flex items-center gap-2 rounded-full bg-[#f38020]/10 px-5 py-2 text-[#0872b9] text-sm font-semibold tracking-[0.18em]"
              >
                <ShieldCheck size={18} className="text-[#f38020]" />
                Cyber Security Focus
              </div>

              <h2
                data-aos="fade-right"
                data-aos-delay="100"
                className="mt-8 text-4xl md:text-5xl font-black text-slate-900 leading-tight"
              >
                Protecting enterprise
                <span className="block text-[#0872b9]">
                  digital environments.
                </span>
              </h2>

              <p
                data-aos="fade-right"
                data-aos-delay="200"
                className="mt-8 text-slate-600 text-lg leading-relaxed text-justify"
              >
                Al Nahla Solutions delivers enterprise-grade cybersecurity
                services designed to protect businesses from evolving digital
                threats. Our security strategies combine proactive monitoring,
                advanced threat detection, compliance management, and resilient
                infrastructure protection to ensure operational continuity.
              </p>

              {/* FEATURES */}
              <div className="mt-10 space-y-5">
                {[
                  "Advanced threat detection & prevention",
                  "Endpoint & network security",
                  "Security monitoring & incident response",
                  "Compliance & governance management",
                  "Data protection & backup security",
                ].map((item, index) => (
                  <div
                    key={index}
                    data-aos="fade-right"
                    data-aos-delay={index * 100}
                    className="flex items-center gap-4"
                  >
                    <div className="w-11 h-11 rounded-2xl bg-[#0872b9]/10 flex items-center justify-center">
                      <CheckCircle size={22} className="text-[#0872b9]" />
                    </div>

                    <p className="text-slate-700 text-lg font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="space-y-6">
              {technologies.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-left"
                  data-aos-delay={index * 120}
                  className="group bg-[#f8fafc] border border-slate-200 rounded-[32px] p-8 hover:bg-[#0872b9] hover:border-[#0872b9] transition-all duration-500"
                >
                  <div className="flex gap-6 items-start">
                    {/* CONTENT */}
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-white transition-colors duration-500">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-slate-600 group-hover:text-white/80 leading-relaxed transition-colors duration-500">
                        {item.description}
                      </p>

                      <div className="mt-6 w-12 h-[3px] bg-[#0872b9]/20 rounded-full group-hover:w-20 group-hover:bg-[#f38020] transition-all duration-500" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-[#0872b9] relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f38020]/20 blur-3xl rounded-full" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <p
            data-aos="fade-up"
            className="text-[#f38020] text-sm tracking-[4px] text-sm font-semibold mb-5"
          >
            Enterprise Cyber Defense
          </p>

          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-2xl md:text-4xl font-black text-white leading-tight"
          >
            Secure your business
            <span className="block text-[#f38020]">
              against modern cyber threats.
            </span>
          </h2>

          <div data-aos="fade-up" data-aos-delay="300" className="mt-6">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#f38020] px-6 py-2 text-white font-semibold shadow-xl hover:scale-105 transition-all duration-300"
            >
              Contact Us
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
