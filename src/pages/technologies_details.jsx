import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  ShieldCheck,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { fetchTechnologies } from "../api";

export default function TechnologiesDetails() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  const stateTechnology = location.state?.technology;
  const isStateMatching = stateTechnology && String(stateTechnology.id) === String(id);

  const [technology, setTechnology] = useState(isStateMatching ? stateTechnology : null);
  const [loading, setLoading] = useState(!isStateMatching);
  const [prevId, setPrevId] = useState(id);

  if (id !== prevId) {
    setPrevId(id);
    setTechnology(isStateMatching ? stateTechnology : null);
    setLoading(!isStateMatching);
  }

  useEffect(() => {
    if (!isStateMatching && id) {
      async function load() {
        try {
          const list = await fetchTechnologies();
          const match = list.find((t) => String(t.id) === String(id));
          if (match) {
            setTechnology(match);
          } else {
            setTechnology(null);
          }
        } catch (e) {
          console.error(e);
          setTechnology(null);
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

  if (!technology) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-[#0872b9] p-6">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Technology Solution Not Found</h2>
        <Link to="/technologies" className="text-[#f38020] font-semibold hover:underline">
          ← Back to Technologies
        </Link>
      </div>
    );
  }

  const displayPoints = [
    technology.point1,
    technology.point2,
    technology.point3,
    technology.point4,
    technology.point5,
  ].filter(Boolean);

  const displayFeatures = [
    { title: technology.subtitle1, description: technology.description1 },
    { title: technology.subtitle2, description: technology.description2 },
    { title: technology.subtitle3, description: technology.description3 },
    { title: technology.subtitle4, description: technology.description4 },
    { title: technology.subtitle5, description: technology.description5 },
    { title: technology.subtitle6, description: technology.description6 },
  ].filter((f) => f.title && f.description);

  return (
    <div className="bg-white overflow-hidden">
      <section className="relative h-[30vh] md:h-[50vh] flex items-center text-white">
        <div className="absolute inset-0 bg-[#0872b9]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {technology.maintitle || "Technology Solution"}
          </h1>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* LEFT */}
            <div>
              <div
                data-aos="fade-right"
                className="inline-flex items-center gap-2 rounded-full bg-[#f38020]/10 px-5 py-2 text-[#0872b9] text-sm font-semibold tracking-[0.18em]"
              >
                <ShieldCheck size={18} className="text-[#f38020]" />
                Solutions Focus
              </div>

              <h2
                data-aos="fade-right"
                data-aos-delay="100"
                className="mt-8 text-4xl md:text-5xl font-black text-slate-900 leading-tight"
              >
                {technology.maintitle}
              </h2>

              <p
                data-aos="fade-right"
                data-aos-delay="200"
                className="mt-8 text-slate-600 text-lg leading-relaxed text-justify"
              >
                {technology.maindescription}
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

            {/* RIGHT */}
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
                          {item.description}
                        </p>

                        <div className="mt-6 w-12 h-[3px] bg-[#0872b9]/20 rounded-full group-hover:w-20 group-hover:bg-[#f38020] transition-all duration-500" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-[#0872b9] relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f38020]/20 blur-3xl rounded-full" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <p
            data-aos="fade-up"
            className="text-[#f38020] text-sm tracking-[4px] text-sm font-semibold mb-5"
          >
            Ready to Transform Your Business?
          </p>

          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-2xl md:text-4xl font-black text-white leading-tight"
          >
            Secure your business
            <span className="block text-[#f38020]">
              against modern cyber threats.
            </span>
          </h2>

          <div data-aos="fade-up" data-aos-delay="300" className="mt-6">
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


