import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServiceDetails() {
  return (
    <div className="bg-white text-[#0872b9]">
      {/* HERO */}
      <section className="relative h-[40vh] flex items-center justify-center bg-[#0872b9] text-white">
        <div className="absolute inset-0 bg-[#0872b9]/40" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Managed Services
          </h1>
          <p className="text-white max-w-xl mx-auto">
            Reliable, scalable IT management tailored for your business.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <img
            src="https://i.pinimg.com/736x/53/ad/5a/53ad5ae5b21d5437660a0914aa477e9a.jpg"
            alt="service"
            className="rounded-2xl shadow-lg"
          />

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#0872b9]">
              Service Overview
            </h2>

            <p className="text-[#0872b9] mb-6 leading-relaxed">
              Our Managed Services ensure your IT infrastructure is always
              optimized, secure, and running efficiently. We proactively
              monitor, maintain, and support your systems so you can focus on
              business growth.
            </p>

            <ul className="space-y-4">
              {[
                "24/7 Monitoring & Support",
                "Proactive Issue Resolution",
                "Security & Backup Management",
                "Performance Optimization",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-[#f38020]" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
