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

export default function Services() {
  const SERVICES = [
    {
      title: "Managed Services",
      desc: "Full IT support & monitoring",
      image:
        "https://th.bing.com/th/id/R.2e353704568d8461df59e69b19de19cf?rik=HuUdGsaaVgdiCQ&riu=http%3a%2f%2f22centurydesign.com%2fwp-content%2fuploads%2f2022%2f08%2fAdobeStock_494839224-scaled.jpeg&ehk=4TJuZI1j42CSF%2fkX2erak1Lv0oKY63lr%2bX53ddKkwEA%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      title: "IT Consultancy",
      desc: "Strategic IT planning",
      image:
        "https://i.pinimg.com/736x/53/ad/5a/53ad5ae5b21d5437660a0914aa477e9a.jpg",
    },
    {
      title: "Professional Services",
      desc: "Deployment & integration",
      image:
        "https://cdn.sanity.io/images/tlr8oxjg/production/acaceb27f1c52bce9db7527d89fbd95299df7421-1456x816.png?w=1080&q=100&fit=clip&auto=format",
    },
    {
      title: "Solution Architecture",
      desc: "Future-ready systems",
      image:
        "https://i.pcmag.com/imagery/roundups/05jgY5MYN5mNQUsxoGLX5Iu-1.fit_lim.size_400x250.v1607029548.jpg",
    },
    {
      title: "Staff Augmentation",
      desc: "On-demand engineers",
      image:
        "https://community.cisco.com/t5/image/serverpage/image-id/243146i87E00DDB923C90E7/image-size/medium?v=v2&px=400",
    },
    {
      title: "Annual Maintenance",
      desc: "Guaranteed uptime",
      image:
        "https://www.cmarix.com/blog/wp-content/uploads/2022/08/benefits-BaaS-brings-to-your-business.jpg",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* HERO (KEEP SAME) */}
      <section
        className="relative h-[30vh] md:h-[50vh] flex items-center text-white"
        style={{
          backgroundImage:
            "url('https://wallpapers.com/images/hd/information-technology-artificial-intelligence-3lmq7rank0v68rhk.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">
            Services
          </h1>
          <p className="text-slate-300 max-w-xl">
            <Link to="/" className="text-amber-400 hover:underline">
              Home
            </Link>{" "}
            / Services
          </p>
        </div>
      </section>

      {/* SERVICES - IMAGE CARDS */}
      <section id="services" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase">
              Our Services
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto">
              How we deliver enterprise-grade IT solutions across UAE.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                className="group relative rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-sm mt-2">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
