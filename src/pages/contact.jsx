import { ArrowRight } from "lucide-react";

const SERVICES = [
  { title: "Managed Services" },
  { title: "IT Consultancy" },
  { title: "Professional Services" },
  { title: "Solution Architecture" },
  { title: "Staff Augmentation" },
  { title: "Annual Maintenance" },
];

function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`py-20 px-6 md:px-12 lg:px-20 ${className}`}>
      {children}
    </section>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <div className="h-px w-12 bg-amber-400" />
      <span className="text-amber-500 text-xs font-semibold uppercase tracking-widest">
        {children}
      </span>
    </div>
  );
}

function SectionHeading({ children }) {
  return (
    <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-slate-900">
      {children}
    </h2>
  );
}

function Contact() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Section id="contact" className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>Contact</SectionLabel>
          <SectionHeading>Start a Conversation</SectionHeading>
          <p className="text-slate-500 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Whether you're evaluating a new programme, looking for a managed
            services partner, or seeking expert IT advisory — we'd like to hear
            from you.
          </p>

          <div className="border border-slate-200 p-10 bg-slate-50 text-left shadow-inner shadow-slate-200/50 rounded-3xl">
            <h3 className="font-bold text-slate-800 text-lg mb-6">
              Inquiry Form
            </h3>
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              {[
                {
                  label: "Full Name *",
                  type: "text",
                  placeholder: "Ahmed Al Rashidi",
                },
                {
                  label: "Organisation *",
                  type: "text",
                  placeholder: "Company name",
                },
                {
                  label: "Email Address *",
                  type: "email",
                  placeholder: "ahmed@company.ae",
                },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 border border-slate-300 focus:border-amber-400 focus:outline-none text-slate-700 bg-white transition-colors text-sm rounded-xl"
                  />
                </div>
              ))}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  Service Interest
                </label>
                <select className="w-full px-4 py-3 border border-slate-300 focus:border-amber-400 focus:outline-none text-slate-600 bg-white transition-colors text-sm rounded-xl">
                  <option value="">Select a service…</option>
                  {SERVICES.map((service) => (
                    <option key={service.title} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your project or requirements…"
                className="w-full px-4 py-3 border border-slate-300 focus:border-amber-400 focus:outline-none text-slate-700 bg-white transition-colors text-sm resize-none rounded-2xl"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <p className="text-slate-400 text-xs">
                * Required fields. We respond within 1 business day.
              </p>
              <button
                className="inline-flex items-center gap-2 px-10 py-4 font-bold text-sm uppercase tracking-wider rounded-full transition-all duration-200"
                style={{ background: "#fbbf24", color: "#0a0f1e" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#f59e0b")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#fbbf24")
                }
              >
                Send Inquiry <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-slate-400 text-sm">
              Existing client?{" "}
              <a
                href="#"
                className="text-amber-600 font-semibold hover:text-amber-700 underline underline-offset-2"
              >
                Access the Support Portal →
              </a>
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Contact;
