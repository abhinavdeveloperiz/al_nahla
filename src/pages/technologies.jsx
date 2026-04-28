import {
  ShieldCheck,
  Network,
  Server,
  Code2,
  MonitorSpeaker,
  Workflow,
  CloudCog,
  Laptop,
} from "lucide-react";

export default function Technologies() {
  const SOLUTIONS = [
    {
      title: "Digital Transformation",
      desc: "Modernize business workflows using advanced digital technologies.",
      icon: Workflow,
    },
    {
      title: "Cyber Security",
      desc: "Threat protection, monitoring, and compliance solutions.",
      icon: ShieldCheck,
    },
    {
      title: "Network Solutions",
      desc: "Enterprise-grade network design and infrastructure management.",
      icon: Network,
    },
    {
      title: "Enterprise Solutions",
      desc: "Scalable platforms supporting complex business operations.",
      icon: Laptop,
    },
    {
      title: "Infrastructure Solutions",
      desc: "Robust IT infrastructure planning and deployment.",
      icon: Server,
    },
    {
      title: "Audio Visual Solutions",
      desc: "Advanced AV systems for corporate environments.",
      icon: MonitorSpeaker,
    },
    {
      title: "Software Solutions",
      desc: "Custom-built applications tailored to business needs.",
      icon: Code2,
    },
    {
      title: "Collaboration",
      desc: "Tools enabling seamless communication and teamwork.",
      icon: CloudCog,
    },
  ];

  return (
    <section className="bg-slate-950 text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mt-12">
            Technologies & Solutions
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Delivering cutting-edge technology solutions to power modern
            enterprises.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-6">
          {SOLUTIONS.map((item, i) => (
            <div
              key={i}
              className="group border border-slate-800 rounded-xl p-6 hover:bg-slate-900 transition duration-300"
              data-aos="fade-up"
            >
              {/* ICON */}
              <div className="mb-4">
                <item.icon className="w-10 h-10 text-amber-400 group-hover:scale-110 transition" />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

              {/* DESC */}
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* HOVER LINE */}
              <div className="mt-4 h-[2px] w-0 bg-amber-400 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
