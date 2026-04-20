import { useEffect } from "react";
import AOS from "aos";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="overflow-hidden">
      {/* HERO (Same style as Home) */}
      <section
        className="relative h-[30vh] md:h-[50vh] flex items-center text-white"
        style={{
          backgroundImage:
            "url('https://as2.ftcdn.net/v2/jpg/06/21/38/09/1000_F_621380970_R7J1LVl5jj0opdCWhU8QTGo8KU56G03x.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">
            Contact Us
          </h1>
          <p className="text-slate-300 max-w-xl">
            <Link to="/" className="text-amber-400 hover:underline">
              Home
            </Link>{" "}
            / Contact Us
          </p>
        </div>
      </section>

      {/* MAIN SECTION - 1 ROW */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* LEFT - FORM */}
          <div data-aos="fade-right">
            <h2 className="text-2xl font-bold mb-6 text-slate-900 uppercase">
              Send a Message
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border rounded-xl focus:border-amber-400 outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border rounded-xl focus:border-amber-400 outline-none"
              />
              <input
                type="text"
                placeholder="Company"
                className="w-full px-4 py-3 border rounded-xl focus:border-amber-400 outline-none"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-3 border rounded-xl focus:border-amber-400 outline-none"
              />

              <button className="px-6 py-3 bg-amber-400 text-black font-semibold rounded-xl hover:bg-amber-500 transition flex items-center gap-2">
                Send Message <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* RIGHT - ADDRESS */}
          <div
            data-aos="fade-left"
            className="bg-slate-50 p-8 rounded-2xl shadow-md"
          >
            <h2 className="text-2xl font-bold mb-6 text-slate-900 uppercase">
              Contact Details
            </h2>

            <div className="space-y-6 text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="text-amber-500" />
                <div>
                  <p className="font-semibold">Abu Dhabi HQ</p>
                  <p className="text-sm text-slate-500">
                    Al Nahla Solutions, Abu Dhabi, UAE
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="text-amber-500" />
                <div>
                  <p className="font-semibold">Dubai Office</p>
                  <p className="text-sm text-slate-500">
                    Dubai Business Center, UAE
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="text-amber-500" />
                <p>+971 50 000 0000</p>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="text-amber-500" />
                <p>info@alnahla.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAPS SECTION */}
      <section className="bg-slate-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold uppercase text-slate-900">
              Our Locations
            </h2>
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
