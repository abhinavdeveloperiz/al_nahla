import {
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Server,
  Headphones,
  Activity,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ServiceDetails() {
  return (
    <div className="bg-white overflow-hidden">
      <section
        className="relative h-[30vh] md:h-[50vh] flex items-center text-white"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/53/ad/5a/53ad5ae5b21d5437660a0914aa477e9a.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0872b9]/70" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">
            Enterprise IT Services
          </h1>
          <p className="text-white max-w-xl">
            <Link to="/" className="text-[#f38020] hover:underline">
              Home
            </Link>{" "}
            / About Us
          </p>
        </div>
      </section>

      {/* ================= SERVICE OVERVIEW ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* LEFT SIDE */}
            <div>
              <div
                data-aos="fade-right"
                className="inline-flex items-center gap-2 rounded-full bg-[#f38020]/10 px-5 py-2 text-[#0872b9] text-sm font-semibold uppercase tracking-[0.18em]"
              >
                <ShieldCheck size={18} className="text-[#f38020]" />
                Service Overview
              </div>

              <h2
                data-aos="fade-right"
                data-aos-delay="100"
                className="mt-8 text-4xl md:text-5xl font-black text-slate-900 leading-tight"
              >
                Proactive IT management
                <span className="block text-[#0872b9]">
                  for modern businesses.
                </span>
              </h2>

              <p
                data-aos="fade-right"
                data-aos-delay="200"
                className="mt-8 text-slate-600 text-lg leading-relaxed text-justify"
              >
                Our Managed Services ensure your IT infrastructure remains
                secure, optimized, and operational around the clock. We
                proactively monitor, maintain, and support your systems so your
                organization can focus on growth and innovation.
              </p>

              {/* FEATURES */}
              <div className="mt-10 space-y-5">
                {[
                  "24/7 Infrastructure Monitoring",
                  "Proactive Issue Resolution",
                  "Security & Backup Management",
                  "Performance Optimization",
                  "Remote & On-Site Support",
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

            {/* RIGHT SIDE */}
            <div className="space-y-6">
              {[
                {
                  title: "Continuous Monitoring",
                  desc: "Real-time monitoring and proactive alerts to minimize downtime and maintain operational continuity.",
                },
                {
                  title: "Advanced Security",
                  desc: "Integrated cybersecurity, backups, and compliance-driven protection across enterprise systems.",
                },
                {
                  title: "Infrastructure Management",
                  desc: "Optimized management of servers, networks, and cloud environments for maximum efficiency.",
                },
                {
                  title: "Dedicated Support",
                  desc: "Responsive technical assistance with experienced engineers available whenever needed.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
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
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-24 bg-[#0872b9] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f38020]/20 blur-3xl rounded-full" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <p
            data-aos="fade-up"
            className="text-[#f38020] uppercase tracking-[4px] text-sm font-semibold mb-5"
          >
            Ready to Transform Your IT?
          </p>

          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-2xl md:text-4xl font-black text-white leading-tight uppercase"
          >
            Let's build a smarter
            <span className="block text-[#f38020]">IT infrastructure.</span>
          </h2>

          <div data-aos="fade-up" data-aos-delay="300" className="mt-10">
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
