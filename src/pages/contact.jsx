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
      {/* GET IN TOUCH FORM */}
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

          <div className="flex justify-center px-4">
            <div
              className="w-full max-w-2xl rounded-[32px] bg-white/90 p-6 md:p-8 shadow-xl border border-slate-200"
              data-aos="fade-right"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[#0872b9] mb-6 text-center">
                Send a Message
              </h3>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:border-[#f38020] focus:ring-2 focus:ring-[#f38020]/20 outline-none transition"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:border-[#f38020] focus:ring-2 focus:ring-[#f38020]/20 outline-none transition"
                />

                <input
                  type="text"
                  placeholder="Company"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:border-[#f38020] focus:ring-2 focus:ring-[#f38020]/20 outline-none transition"
                />

                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:border-[#f38020] focus:ring-2 focus:ring-[#f38020]/20 outline-none resize-none transition"
                />

                <button className="w-full py-3 bg-[#f38020] text-[#0872b9] font-semibold rounded-xl hover:bg-[#e57418] transition-all duration-300 flex items-center justify-center gap-2">
                  Send Message
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-[40px] bg-white/80 p-8 mt-24 md:p-14 lg:p-16 shadow-2xl"
            data-aos="fade-left"
          >
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-blue-500/20"></div>
            <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-yellow-500/40"></div>

            <div className="relative grid lg:grid-cols-2 gap-14 items-center">
              {/* Left Side */}
              <div>
                <span className="inline-block uppercase tracking-[4px] text-black/70 text-sm font-semibold mb-4">
                  Visit Our Office
                </span>

                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                  Let's Connect
                </h2>

                <div className="w-24 h-1 bg-[#f38020] rounded-full mb-8"></div>

                <p className="text-black/80 text-lg leading-8 mb-10">
                  Visit our Abu Dhabi office to discuss your business
                  requirements and technology solutions with our experienced
                  team.
                </p>

                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                    <MapPin size={30} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4">
                      Office Address
                    </h3>

                    <p className="text-black/90 leading-8">
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
              </div>

              {/* Right Side */}
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 hover:bg-white/15 transition">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#f38020] flex items-center justify-center">
                      <Mail size={26} />
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-2">
                        Email Address
                      </h4>

                      <a
                        href="mailto:info@alnahlasolutions.ae"
                        className="block text-black/90 hover:text-[#f38020] transition"
                      >
                        info@alnahlasolutions.ae
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 hover:bg-white/15 transition">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#f38020] flex items-center justify-center">
                      <Phone size={26} />
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-2">
                        Phone Number
                      </h4>

                      <a
                        href="tel:+97125464650"
                        className="text-black/90 hover:text-[#f38020] transition text-lg"
                      >
                        +971 2 546 4650
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section className="bg-blue-500 py-24 relative overflow-hidden borde border-y border-white">
        {/* Background Shapes */}
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-white/50"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-yellow-500/70"></div>

        <div className="relative max-w-7xl mx-auto px-6 ">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 rounded-full bg-white/10 text-white tracking-[4px] font-semibold uppercase text-sm">
              Careers
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-white mt-5">
              Join Our Team
            </h2>

            <p className="text-blue-100 max-w-3xl mx-auto mt-5 leading-8 text-lg">
              Build your future with Al Nahla Solutions. Work alongside talented
              professionals, solve real-world business challenges, and
              contribute to innovative ICT solutions across the UAE and Oman.
            </p>
          </div>

          <div
            data-aos="zoom-in"
            className="bg-white rounded-[36px] shadow-2xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2">
              {/* Left */}
              <div className="p-10 md:p-14">
                <div className="inline-flex w-20 h-20 rounded-3xl bg-[#0872b9] items-center justify-center text-white mb-8">
                  <Briefcase size={38} />
                </div>

                <h3 className="text-4xl font-bold text-[#0872b9] mb-6">
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
                      <div className="w-10 h-10 rounded-xl bg-[#f38020]/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle size={22} className="text-[#f38020]" />
                      </div>

                      <p className="text-gray-700 leading-7">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="bg-gradient-to-br from-[#0872b9] to-blue-600 p-10 md:p-14 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-white mb-6">
                  Ready to Start Your Career?
                </h3>

                <p className="text-blue-100 leading-8 mb-10">
                  We are always looking for passionate professionals who love
                  technology, innovation, and delivering exceptional digital
                  solutions.
                </p>

                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <Mail size={24} className="text-white" />
                    </div>

                    <div>
                      <p className="text-blue-200 text-sm">Send your resume</p>

                      <a
                        href="mailto:info@alnahlasolutions.ae"
                        className="text-white font-semibold hover:text-[#f38020] transition"
                      >
                        info@alnahlasolutions.ae
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <Phone size={24} className="text-white" />
                    </div>

                    <div>
                      <p className="text-blue-200 text-sm">Contact Us</p>

                      <a
                        href="tel:+97125464650"
                        className="text-white font-semibold hover:text-[#f38020] transition"
                      >
                        +971 2 546 4650
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href="mailto:info@alnahlasolutions.ae"
                  className="mt-10 inline-flex items-center justify-center gap-3 bg-[#f38020] hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
                >
                  Apply Now
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAPS SECTION */}
      <section className="bg-blue-500 py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">Our Location</h2>
            <p className="text-blue-100 mt-3">Visit our Abu Dhabi office.</p>
          </div>

          {/* Google Map */}
          <div className="overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3461.4985283208857!2d54.379687499999996!3d24.4599375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e67f76bdf7907%3A0x339cf423c26970a8!2sAl%20Nahla%20Solutions%20Information%20Technology!5e1!3m2!1sen!2sin!4v1782495477780!5m2!1sen!2sin"
              className="w-full h-[450px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Al Nahla Solutions Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
