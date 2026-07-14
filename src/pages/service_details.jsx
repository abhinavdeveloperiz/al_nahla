import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  CheckCircle,
  ArrowRight,
  ShieldCheck,
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
      <section
        className="relative h-[30vh] md:h-[50vh] flex items-center text-white"
        style={{
          backgroundImage: `url("${getImageUrl(service.image) || "https://i.pinimg.com/736x/53/ad/5a/53ad5ae5b21d5437660a0914aa477e9a.jpg"}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0872b9]/70" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {service.maintitle || "Enterprise IT Services"}
          </h1>
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
                className="inline-flex items-center gap-2 rounded-full bg-[#f38020]/10 px-5 py-2 text-[#0872b9] text-sm font-semibold tracking-[0.18em]"
              >
                <ShieldCheck size={18} className="text-[#f38020]" />
                Service Overview
              </div>

              <h2
                data-aos="fade-right"
                data-aos-delay="100"
                className="mt-8 text-4xl md:text-5xl font-black text-slate-900 leading-tight"
              >
                {service.maintitle || "Proactive IT management"}
              </h2>

              <p
                data-aos="fade-right"
                data-aos-delay="200"
                className="mt-8 text-slate-600 text-lg leading-relaxed text-justify"
              >
                {service.maindescription}
              </p>

              {/* FEATURES */}
              {displayPoints.length > 0 && (
                <div className="mt-10 space-y-5">
                  {displayPoints.map((item, index) => (
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
              )}
            </div>

            {/* RIGHT SIDE */}
            {displayFeatures.length > 0 && (
              <div className="space-y-6">
                {displayFeatures.map((item, index) => (
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
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-24 bg-[#0872b9] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f38020]/20 blur-3xl rounded-full" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <p
            data-aos="fade-up"
            className="text-[#f38020] tracking-[4px] text-sm font-semibold mb-5"
          >
            Ready to Transform Your IT?
          </p>

          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-2xl md:text-4xl font-black text-white leading-tight"
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


