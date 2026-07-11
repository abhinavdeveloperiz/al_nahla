import { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";
import { fetchTechnologies } from "../api";

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

  const [solutions, setSolutions] = useState(SOLUTIONS);

  useEffect(() => {
    async function load() {
      const data = await fetchTechnologies();
      if (data && data.length > 0) {
        setSolutions(
          data.map((t) => {
            const match = SOLUTIONS.find(
              (s) => s.title.toLowerCase() === t.maintitle.toLowerCase()
            );
            return {
              id: t.id,
              title: t.maintitle,
              desc: t.maindescription,
              icon: match ? match.icon : Workflow,
              raw: t,
            };
          })
        );
      }
    }
    load();
  }, []);

  return (
    <section className="bg-[#0872b9] text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mt-12 text-orange-400">
            Technologies & Solutions
          </h2>
          <p className="text-[#0872b9] mt-4 max-w-xl mx-auto">
            Delivering cutting-edge technology solutions to power modern
            enterprises.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-6">
          {solutions.map((item, i) => (
            <Link
              key={i}
              to={item.id ? `/technologies/details?id=${item.id}` : "/technologies/details"}
              state={{ technology: item.raw }}
              className="group bg-gray-800 hover:bg-gray-900 border border-[#0872b9] rounded-xl p-6 hover:bg-[#0872b9] transition duration-300"
              data-aos="fade-up"
            >
            

              {/* TITLE */}
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

              {/* DESC */}
              <p className="text-[#0872b9] text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* HOVER LINE */}
              <div className="mt-4 h-[2px] w-0 bg-[#f38020] group-hover:w-full transition-all duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

