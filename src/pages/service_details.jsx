import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  Layers,
} from "lucide-react";
import { fetchServices, getImageUrl } from "../api";

export default function ServiceDetails() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  const stateService = location.state?.service;
  const isStateMatching = stateService && String(stateService.id) === String(id);

  const [service, setService] = useState(isStateMatching ? stateService : null);
  const [loading, setLoading] = useState(!isStateMatching);
  const [prevId, setPrevId] = useState(id);

  if (id !== prevId) {
    setPrevId(id);
    setService(isStateMatching ? stateService : null);
    setLoading(!isStateMatching);
  }

  useEffect(() => {
    if (!isStateMatching && id) {
      async function load() {
        try {
          const list = await fetchServices();
          const match = list.find((s) => String(s.id) === String(id));
          if (match) {
            setService(match);
          } else {
            setService(null);
          }
        } catch (e) {
          console.error(e);
          setService(null);
        } finally {
          setLoading(false);
        }
      }
      load();
    }
  }, [id, isStateMatching]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-[#0872b9]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0872b9]"></div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-[#0872b9] p-6">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Service Not Found</h2>
        <Link to="/services" className="text-[#f38020] font-semibold hover:underline">
          ← Back to Services
        </Link>
      </div>
    );
  }

  const displayPoints = [
    service.point1,
    service.point2,
    service.point3,
    service.point4,
    service.point5,
  ].filter(Boolean);

  const displayFeatures = [
    { title: service.subtitle1, desc: service.description1 },
    { title: service.subtitle2, desc: service.description2 },
    { title: service.subtitle3, desc: service.description3 },
    { title: service.subtitle4, desc: service.description4 },
    { title: service.subtitle5, desc: service.description5 },
    { title: service.subtitle6, desc: service.description6 },
  ].filter((f) => f.title && f.desc);

  return (
    <div className="bg-white overflow-hidden">
      {/* ================= INTRO & OVERVIEW SECTION ================= */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-[#0872b9]/5 via-white to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* LEFT SIDE: BANNER IMAGE */}
            <div className="lg:col-span-5" data-aos="fade-right">
              <div className="relative group">
                <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-tr from-[#0872b9]/25 to-[#f38020]/25 blur-xl opacity-70 group-hover:opacity-90 transition duration-500" />
                <div className="relative overflow-hidden rounded-[32px] border border-slate-100 shadow-2xl bg-white">
                  <img
                    src={getImageUrl(service.image) || "https://i.pinimg.com/736x/53/ad/5a/53ad5ae5b21d5437660a0914aa477e9a.jpg"}
                    alt={service.maintitle || "Service Image"}
                    className="w-full h-[320px] md:h-[420px] object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: DESCRIPTION & INFO */}
            <div className="lg:col-span-7 flex flex-col justify-center" data-aos="fade-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0872b9]/10 px-5 py-2 text-[#0872b9] text-sm font-bold tracking-[0.15em] w-fit mb-6">
                <ShieldCheck size={18} className="text-[#f38020]" />
                SERVICE OVERVIEW
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight mb-8">
                {service.maintitle || "Enterprise IT Services"}
              </h1>

              <p className="text-slate-600 text-lg md:text-xl leading-relaxed text-justify mb-4">
                {service.maindescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION (CARDS) ================= */}
      {displayFeatures.length > 0 && (
        <section className="py-24 bg-slate-50/60 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#f38020]/10 px-4 py-1.5 text-[#f38020] text-xs font-bold tracking-[0.2em] uppercase mb-4">
                <Layers size={14} />
                Core Capabilities
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                Our Solutions & Features
              </h2>
              <p className="text-slate-500 mt-4 text-lg">
                Explore the key pillars and custom functionalities we offer under this service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayFeatures.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group bg-white border border-slate-200/50 rounded-[28px] p-8 shadow-sm hover:shadow-2xl hover:border-[#0872b9]/20 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between"
                >
                  <div>
                    {/* Unique premium number bubble styling */}
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0872b9] to-[#0872b9]/80 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-[#0872b9]/25 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <h3 className="text-2xl font-bold text-slate-850 group-hover:text-[#0872b9] transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-slate-650 leading-relaxed text-justify text-sm md:text-base">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-8 w-12 h-[3px] bg-[#f38020] rounded-full group-hover:w-24 group-hover:bg-[#0872b9] transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= KEY POINTS SECTION (AT LAST) ================= */}
      {displayPoints.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0872b9]/10 px-4 py-1.5 text-[#0872b9] text-xs font-bold tracking-[0.2em] uppercase mb-4">
                <Sparkles size={14} />
                Key Highlights
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                Key Focus & Benefits
              </h2>
              <p className="text-slate-500 mt-4 text-lg">
                The primary values and standards we guarantee with our solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {displayPoints.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                  className="flex items-center gap-4 bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:bg-white hover:border-[#0872b9]/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0872b9]/10 flex items-center justify-center shrink-0">
                    <CheckCircle size={20} className="text-[#0872b9]" />
                  </div>
                  <p className="text-slate-800 text-base font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= CTA SECTION ================= */}
      <section className="py-24 bg-[#0872b9] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f38020]/25 blur-3xl rounded-full" />
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-[#0872b9]/30 blur-3xl rounded-full" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <p
            data-aos="fade-up"
            className="text-[#f38020] tracking-[4px] text-sm font-semibold mb-5 uppercase"
          >
            Ready to Transform Your IT?
          </p>

          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl md:text-5xl font-black text-white leading-tight"
          >
            Let's build a smarter
            <span className="block text-[#f38020] mt-2">IT infrastructure.</span>
          </h2>

          <div data-aos="fade-up" data-aos-delay="300" className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#f38020] px-8 py-3.5 text-white font-bold shadow-xl hover:scale-105 hover:bg-[#e07010] transition-all duration-300"
            >
              Contact Us Today
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


