import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Server,
  ArrowRight,
  Layers,
  Globe,
  Sparkles,
} from "lucide-react";

export default function TechnologiesDetails() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Secure Architecture",
      description:
        "Designing resilient, enterprise-grade systems with security built in at every layer.",
    },
    {
      icon: Server,
      title: "Reliable Infrastructure",
      description:
        "Optimized cloud and on-premise solutions for high availability and performance.",
    },
    {
      icon: Globe,
      title: "Global Connectivity",
      description:
        "Seamless networking and integration across regional offices and hybrid environments.",
    },
    {
      icon: Layers,
      title: "Modern Stack",
      description:
        "Leveraging best-in-class platforms and tools to accelerate digital transformation.",
    },
  ];

  return (
    <div className="bg-white text-[#0872b9] overflow-hidden">
      <section className="relative min-h-[55vh] md:h-[60vh] flex items-center pt-20 md:pt-0">
        <div className="absolute inset-0 bg-[#0872b9]/80" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#f38020]">
            Technologies & Solutions
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Technology Strategy for Enterprise Growth
          </h1>
          <p className="max-w-2xl leading-relaxed text-[#f6f6f6] text-sm md:text-base">
            Delivering secure, scalable, and future-ready technology frameworks
            that power digital transformation across UAE and beyond.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/technologies"
              className="inline-flex items-center gap-2 rounded-full bg-[#f38020] px-6 py-3 text-[#0872b9] font-semibold shadow-lg hover:bg-[#ffaa50] transition"
            >
              Back to Technologies
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#f38020]/10 px-4 py-2 text-[#0872b9] text-sm font-semibold uppercase tracking-[0.18em]">
              <Sparkles size={18} className="text-[#f38020]" />
              Technology Focus
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Building intelligent infrastructure for modern enterprises.
            </h2>
            <p className="text-[#334155] leading-relaxed text-base md:text-lg">
              At Al Nahla, we blend innovation with operational excellence. Our
              technology solutions are tailored to help businesses reduce risk,
              accelerate delivery, and unlock measurable value from IT
              investments.
            </p>
            <div className="space-y-5">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Why choose our technology services?
                </h3>
                <p className="text-[#334155] leading-relaxed">
                  From strategy to implementation, we support your digital
                  roadmap with secure architectures, performance-driven
                  platforms, and unified enterprise services.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Scalable cloud solutions",
                  "Integrated network management",
                  "Cybersecurity and compliance",
                  "Custom enterprise applications",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-3xl border border-[#f38020]/30 bg-[#f38020]/5 p-5"
                  >
                    <p className="text-sm text-[#0872b9]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[32px] overflow-hidden shadow-2xl shadow-[#0872b9]/10 ring-1 ring-[#0872b9]/5">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
              alt="Technology solutions"
              className="w-full h-full object-cover min-h-[420px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
