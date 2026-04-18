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

export default function Careers() {
  const JOBS = [
    {
      title: "Frontend Developer",
      location: "Abu Dhabi",
      type: "Full Time",
      desc: "Build modern UI using React, Tailwind and scalable architecture.",
    },
    {
      title: "Network Engineer",
      location: "Dubai",
      type: "Full Time",
      desc: "Manage enterprise network infrastructure and security systems.",
    },
    {
      title: "IT Support Engineer",
      location: "Abu Dhabi",
      type: "Full Time",
      desc: "Provide technical support and maintenance for client systems.",
    },
    {
      title: "Project Manager",
      location: "Remote",
      type: "Full Time",
      desc: "Lead IT projects with strong delivery and client coordination.",
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
            Careers
          </h1>
          <p className="text-slate-300 max-w-xl">
            <Link to="/" className="text-amber-400 hover:underline">
              Home
            </Link>{" "}
            / Careers
          </p>
        </div>
      </section>

      {/* WHY JOIN - PREMIUM WITH BUBBLES */}
      <section className="relative bg-slate-900 py-20 md:py-28 overflow-hidden">
        {/* FLOATING BUBBLES */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <span
              key={i}
              className="absolute block rounded-full bg-white/5 backdrop-blur-md animate-bubble"
              style={{
                width: `${Math.random() * 60 + 20}px`,
                height: `${Math.random() * 60 + 20}px`,
                left: `${Math.random() * 100}%`,
                bottom: `-80px`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          {/* HEADING */}
          <div className="text-center mb-14 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white uppercase tracking-wide">
              Why Join Us
            </h2>
            <p className="text-slate-400 mt-3 md:mt-4 max-w-xl mx-auto text-sm md:text-base">
              Build your career with innovation, growth, and real-world impact.
            </p>
            <div className="w-16 md:w-20 h-[2px] bg-amber-400 mx-auto mt-5 md:mt-6" />
          </div>

          {/* GRID */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {/* CARD */}
            <div className="group relative p-[1px] rounded-xl md:rounded-2xl bg-gradient-to-br from-amber-400/40 via-transparent to-transparent">
              <div className="bg-slate-900/80 backdrop-blur-xl rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-10 h-full border border-white/10 hover:border-amber-400/40 transition duration-500">
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-lg md:rounded-xl bg-amber-400/10 mb-4 md:mb-6 group-hover:scale-110 transition">
                  <Users2 size={24} className="md:hidden text-amber-400" />
                  <Users2
                    size={32}
                    className="hidden md:block text-amber-400"
                  />
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">
                  Great Team Culture
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  Collaborate with skilled professionals in a supportive,
                  innovation-driven environment.
                </p>

                <div className="mt-4 md:mt-6 w-0 group-hover:w-12 h-[2px] bg-amber-400 transition-all duration-500" />
              </div>
            </div>

            {/* CARD */}
            <div className="group relative p-[1px] rounded-xl md:rounded-2xl bg-gradient-to-br from-amber-400/40 via-transparent to-transparent">
              <div className="bg-slate-900/80 backdrop-blur-xl rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-10 h-full border border-white/10 hover:border-amber-400/40 transition duration-500">
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-lg md:rounded-xl bg-amber-400/10 mb-4 md:mb-6 group-hover:scale-110 transition">
                  <TrendingUp size={24} className="md:hidden text-amber-400" />
                  <TrendingUp
                    size={32}
                    className="hidden md:block text-amber-400"
                  />
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">
                  Career Growth
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  Certifications, mentorship, and fast-track growth
                  opportunities.
                </p>

                <div className="mt-4 md:mt-6 w-0 group-hover:w-12 h-[2px] bg-amber-400 transition-all duration-500" />
              </div>
            </div>

            {/* CARD */}
            <div className="group relative p-[1px] rounded-xl md:rounded-2xl bg-gradient-to-br from-amber-400/40 via-transparent to-transparent">
              <div className="bg-slate-900/80 backdrop-blur-xl rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-10 h-full border border-white/10 hover:border-amber-400/40 transition duration-500">
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-lg md:rounded-xl bg-amber-400/10 mb-4 md:mb-6 group-hover:scale-110 transition">
                  <Award size={24} className="md:hidden text-amber-400" />
                  <Award size={32} className="hidden md:block text-amber-400" />
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">
                  High Impact Work
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  Work on enterprise projects that create real business impact.
                </p>

                <div className="mt-4 md:mt-6 w-0 group-hover:w-12 h-[2px] bg-amber-400 transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>

        {/* BUBBLE ANIMATION STYLE */}
        <style jsx>{`
          @keyframes bubble {
            0% {
              transform: translateY(0) scale(1);
              opacity: 0;
            }
            30% {
              opacity: 1;
            }
            100% {
              transform: translateY(-120vh) scale(1.2);
              opacity: 0;
            }
          }

          .animate-bubble {
            animation-name: bubble;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
        `}</style>
      </section>

      {/* JOB LISTINGS */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase">
              Open Positions
            </h2>
          </div>

          <div className="space-y-6">
            {JOBS.map((job, i) => (
              <div
                key={i}
                className="border border-slate-200 shadow-md rounded-xl p-6 hover:shadow-xl transition"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {job.title}
                    </h3>

                    <div className="flex flex-wrap gap-4 text-sm text-slate-500 mt-2">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} /> {job.type}
                      </span>
                    </div>

                    <p className="text-slate-600 mt-3 text-sm">{job.desc}</p>
                  </div>

                  <button className="flex items-center gap-2 px-6 py-3 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-500 transition">
                    Apply <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-amber-400 to-amber-500 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-black mb-6">
            Start Your Journey With Us
          </h2>

          <Link
            to="/contact"
            className="px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition"
          >
            Contact HR
          </Link>
        </div>
      </section>
    </div>
  );
}
