import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Users2,
  TrendingUp,
  Award,
} from "lucide-react";
import { fetchServices, getImageUrl } from "../api";

export default function Services() {
  const DUMMY_SERVICES = [
    {
      title: "Managed Services",
      desc: "Full IT support & monitoring for your enterprise. We provide proactive monitoring, system maintenance, and end-to-end technical assistance to keep your operations running smoothly without interruption.",
      image:
        "https://th.bing.com/th/id/R.2e353704568d8461df59e69b19de19cf?rik=HuUdGsaaVgdiCQ&riu=http%3a%2f%2f22centurydesign.com%2fwp-content%2fuploads%2f2022%2f08%2fAdobeStock_494839224-scaled.jpeg&ehk=4TJuZI1j42CSF%2fkX2erak1Lv0oKY63lr%2bX53ddKkwEA%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      title: "IT Consultancy",
      desc: "Strategic IT planning and expert advisory services tailored to your business goals. We evaluate your current IT infrastructure and design a clear roadmap for digital transformation and operational efficiency.",
      image:
        "https://i.pinimg.com/736x/53/ad/5a/53ad5ae5b21d5437660a0914aa477e9a.jpg",
    },
    {
      title: "Professional Services",
      desc: "Deployment & integration solutions executed with meticulous project management. Our team ensures seamless rollout, custom configuration, and minimal downtime for critical enterprise systems.",
      image:
        "https://cdn.sanity.io/images/tlr8oxjg/production/acaceb27f1c52bce9db7527d89fbd95299df7421-1456x816.png?w=1080&q=100&fit=clip&auto=format",
    },
    {
      title: "Solution Architecture",
      desc: "Future-ready systems designed by experienced architects. We build resilient, scalable network architectures and cloud infrastructures optimized for performance and enterprise security.",
      image:
        "https://i.pcmag.com/imagery/roundups/05jgY5MYN5mNQUsxoGLX5Iu-1.fit_lim.size_400x250.v1607029548.jpg",
    },
    {
      title: "Staff Augmentation",
      desc: "On-demand engineers and technical talent to scale your workforce. Access specialized skills quickly for long-term projects or immediate technical challenges with flexible staffing models.",
      image:
        "https://community.cisco.com/t5/image/serverpage/image-id/243146i87E00DDB923C90E7/image-size/medium?v=v2&px=400",
    },
    {
      title: "Annual Maintenance",
      desc: "Guaranteed uptime through proactive servicing, regular system health checks, predictive analysis, and rapid emergency support to ensure your business operations remain disruption-free year-round.",
      image:
        "https://www.cmarix.com/blog/wp-content/uploads/2022/08/benefits-BaaS-brings-to-your-business.jpg",
    },
  ];

  const [services, setServices] = useState(DUMMY_SERVICES);
  const [expandedServices, setExpandedServices] = useState({});

  const toggleReadMore = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedServices((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    async function load() {
      const data = await fetchServices();
      if (data && data.length > 0) {
        setServices(
          data.map((s) => ({
            id: s.id,
            title: s.maintitle,
            desc: s.maindescription,
            image: getImageUrl(s.image),
            raw: s,
          })),
        );
      }
    }
    load();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* SERVICES - IMAGE CARDS */}
      <section id="services" className="bg-white py-24 mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0872b9]">
              Our Services
            </h2>
            <p className="text-[#0872b9] mt-4 max-w-xl mx-auto">
              How we deliver enterprise-grade IT solutions across UAE.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const serviceKey = service.id ?? i;
              const isExpanded = !!expandedServices[serviceKey];
              const isLongDesc = service.desc && service.desc.length > 80;
              const detailsLink = service.id
                ? `/services/details?id=${service.id}`
                : "/services/details";

              return (
                <div
                  key={serviceKey}
                  data-aos="zoom-in"
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between border border-slate-100"
                >
                  <div>
                    {/* IMAGE */}
                    <Link
                      to={detailsLink}
                      state={{ service: service.raw }}
                      className="block overflow-hidden"
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-64 w-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    </Link>

                    {/* CONTENT BELOW */}
                    <div className="p-6">
                      <Link
                        to={detailsLink}
                        state={{ service: service.raw }}
                        className="block"
                      >
                        <h3
                          className="text-[#0872b9] text-xl font-semibold text-justify hover:text-[#f38020] transition-colors"
                          style={{ textAlign: "justify" }}
                        >
                          {service.title}
                        </h3>
                      </Link>

                      <p
                        className={`text-slate-600 text-sm mt-2 text-justify transition-all duration-300 ${
                          isExpanded ? "line-clamp-none" : "line-clamp-3"
                        }`}
                      >
                        {service.desc}
                      </p>

                      {isLongDesc && (
                        <button
                          type="button"
                          onClick={(e) => toggleReadMore(serviceKey, e)}
                          className="text-[#0872b9] text-xs font-semibold mt-2 hover:underline focus:outline-none cursor-pointer inline-flex items-center gap-1"
                        >
                          {isExpanded ? "Read Less ↑" : "Read More ↓"}
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-0">
                    <Link
                      to={detailsLink}
                      state={{ service: service.raw }}
                      className="text-[#f38020] text-sm font-medium hover:underline inline-flex items-center gap-1"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
