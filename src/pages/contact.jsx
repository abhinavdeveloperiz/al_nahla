import { useEffect } from "react";
import AOS from "aos";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

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
          <div className="grid grid-cols-1 gap-10">
            <div
              className="rounded-[32px] bg-white p-10 shadow-xl border border-slate-200"
              data-aos="fade-right"
            >
              <h3 className="text-3xl font-bold text-[#0872b9] mb-6">
                Send a Message
              </h3>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border rounded-xl focus:border-[#f38020] outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border rounded-xl focus:border-[#f38020] outline-none"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full px-4 py-3 border rounded-xl focus:border-[#f38020] outline-none"
                />
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border rounded-xl focus:border-[#f38020] outline-none"
                />

                <button className="w-full px-6 py-3 bg-[#f38020] text-[#0872b9] font-semibold rounded-xl hover:bg-[#f38020] transition flex items-center justify-center gap-2">
                  Send Message <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
          <div
            className="bg-blue-500 rounded-[40px] p-8 md:p-16 text-white"
            data-aos="fade-left"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* LEFT SIDE - OFFICE ADDRESS */}
              <div>
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <MapPin size={32} strokeWidth={2.2} />
                  </div>

                  <div>
                    <span className="uppercase tracking-[3px] text-white/70 text-sm font-medium">
                      Visit Us
                    </span>

                    <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                      Our Office
                    </h3>

                    <div className="w-20 h-1 bg-[#f38020] rounded-full mb-6"></div>

                    <p className="text-white/90 leading-8 text-lg">
                      Office No. 101, Edge Tower
                      <br />
                      Al Manhal - Airport Road
                      <br />
                      Abu Dhabi, UAE
                      <br />
                      PO Box - 7025
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE - CONTACT DETAILS */}
              <div className="space-y-10">
                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={28} strokeWidth={2.2} />
                  </div>

                  <div>
                    <h4 className="text-2xl font-semibold mb-3">
                      Email Address
                    </h4>

                    <a
                      href="mailto:info@alnahlasolutions.ae"
                      className="block text-white/90 hover:text-white transition"
                    >
                      info@alnahlasolutions.ae
                    </a>

                    <a
                      href="mailto:sales@alnahlasolutions.ae"
                      className="block text-white/90 hover:text-white transition mt-1"
                    >
                      sales@alnahlasolutions.ae
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={28} strokeWidth={2.2} />
                  </div>

                  <div>
                    <h4 className="text-2xl font-semibold mb-3">Call Us</h4>

                    <a
                      href="tel:+971581905435"
                      className="text-white/90 hover:text-white transition text-lg"
                    >
                      +971 58 1905435
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAPS SECTION */}
      <section className="bg-blue-500 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Our Locations</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* ABU DHABI MAP */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                title="Abu Dhabi"
                src="https://maps.google.com/maps?q=Abu%20Dhabi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[350px] border-0"
                loading="lazy"
              />
            </div>

            {/* DUBAI MAP */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                title="Dubai"
                src="https://maps.google.com/maps?q=Dubai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[350px] border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
