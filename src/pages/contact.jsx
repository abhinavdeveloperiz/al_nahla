import { useEffect } from "react";
import AOS from "aos";
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  Briefcase,
} from "lucide-react";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="overflow-hidden">
      {/* GET IN TOUCH SECTION */}
      <section className="bg-blue-500 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-24">
              Get in Touch
            </h2>
            <p className="mt-4 text-slate-100 leading-relaxed">
              We are here to help your business grow with reliable, scalable,
              and secure IT solutions. Reach out to us for inquiries,
              partnerships, or support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12 items-stretch">
            {/* Left Column: Let's Connect */}
            <div
              className="w-full rounded-[32px] bg-white/90 p-8 md:p-10 shadow-xl border border-slate-200 flex flex-col justify-between"
              data-aos="fade-right"
            >
              <div>
                <h3 className="text-3xl font-bold text-[#0872b9] mb-4">
                  Let's Connect
                </h3>
                <div className="w-20 h-1 bg-[#f38020] rounded-full mb-8"></div>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#0872b9]/10 flex items-center justify-center text-[#0872b9] flex-shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-1">
                        Office Address
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        Office No. 101, Edge Tower
                        <br />
                        Al Manhal, Airport Road
                        <br />
                        Abu Dhabi, United Arab Emirates
                        <br />
                        P.O. Box 7025
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#0872b9]/10 flex items-center justify-center text-[#0872b9] flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-1">
                        Email Address
                      </h4>
                      <a
                        href="mailto:info@alnahlasolutions.ae"
                        className="text-gray-600 hover:text-[#f38020] transition text-sm md:text-base break-all"
                      >
                        info@alnahlasolutions.ae
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#0872b9]/10 flex items-center justify-center text-[#0872b9] flex-shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-1">
                        Phone Number
                      </h4>
                      <a
                        href="tel:+97125464650"
                        className="text-gray-600 hover:text-[#f38020] transition text-sm md:text-base font-semibold"
                      >
                        +971 2 546 4650
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Send a Message Form */}
            <div
              className="w-full rounded-[32px] bg-white/90 p-8 md:p-10 shadow-xl border border-slate-200"
              data-aos="fade-left"
            >
              <h3 className="text-3xl font-bold text-[#0872b9] mb-4">
                Send a Message
              </h3>
              <div className="w-20 h-1 bg-[#f38020] rounded-full mb-8"></div>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:border-[#f38020] focus:ring-2 focus:ring-[#f38020]/20 outline-none transition text-sm md:text-base"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:border-[#f38020] focus:ring-2 focus:ring-[#f38020]/20 outline-none transition text-sm md:text-base"
                />

                <input
                  type="text"
                  placeholder="Company"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:border-[#f38020] focus:ring-2 focus:ring-[#f38020]/20 outline-none transition text-sm md:text-base"
                />

                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:border-[#f38020] focus:ring-2 focus:ring-[#f38020]/20 outline-none resize-none transition text-sm md:text-base"
                />

                <button className="w-full py-3 bg-[#f38020] text-[#0872b9] font-semibold rounded-xl hover:bg-[#e57418] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-sm md:text-base">
                  Send Message
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAPS SECTION */}
      <section className="w-full h-[450px] md:h-[600px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3461.4985283208857!2d54.379687499999996!3d24.4599375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e67f76bdf7907%3A0x339cf423c26970a8!2sAl%20Nahla%20Solutions%20Information%20Technology!5e1!3m2!1sen!2sin!4v1782495477780!5m2!1sen!2sin"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Al Nahla Solutions Location"
        />
      </section>

      {/* CAREERS */}
      <section className="bg-blue-500 py-24 relative border-y border-white/20">
        <div className="relative max-w-6xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 rounded-full bg-white/10 text-white tracking-[4px] font-semibold uppercase text-sm">
              Careers
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-white mt-5">
              Join Our Team
            </h2>

            <p className="text-blue-100 max-w-3xl mx-auto mt-5 leading-relaxed text-lg">
              Build your future with Al Nahla Solutions. Work alongside talented
              professionals, solve real-world business challenges, and
              contribute to innovative ICT solutions across the UAE and Oman.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mt-12 text-white">
            {/* Left side: Why Join Us? */}
            <div data-aos="fade-right">
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 text-white">
                <Briefcase size={28} className="text-[#f38020]" />
                Why Join Us?
              </h3>

              <div className="space-y-6">
                {[
                  "Work on innovative enterprise IT projects.",
                  "Competitive salary and employee benefits.",
                  "Professional training and certification support.",
                  "Healthy work-life balance and inclusive culture.",
                  "International exposure across UAE and Oman.",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle size={16} className="text-[#f38020]" />
                    </div>
                    <p className="text-blue-100 leading-relaxed text-base md:text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Ready to Start Your Career? */}
            <div data-aos="fade-left" className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6 text-white">
                Ready to Start Your Career?
              </h3>

              <p className="text-blue-100 leading-relaxed mb-8 text-base md:text-lg">
                We are always looking for passionate professionals who love
                technology, innovation, and delivering exceptional digital
                solutions.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs">Send your resume</p>
                    <a
                      href="mailto:info@alnahlasolutions.ae"
                      className="text-white font-semibold hover:text-[#f38020] transition text-sm md:text-base"
                    >
                      info@alnahlasolutions.ae
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs">Contact Us</p>
                    <a
                      href="tel:+97125464650"
                      className="text-white font-semibold hover:text-[#f38020] transition text-sm md:text-base"
                    >
                      +971 2 546 4650
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="mailto:info@alnahlasolutions.ae"
                  className="inline-flex items-center justify-center gap-3 bg-[#f38020] hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 text-sm md:text-base"
                >
                  Apply Now
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
