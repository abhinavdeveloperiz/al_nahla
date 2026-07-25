import {
  FaWhatsapp,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function FloatingContactButtons() {
  const actions = [
    {
      label: "Call",
      href: "tel:+97125464650",
      icon: FaPhoneAlt,
      color: "bg-[#0872b9] hover:bg-[#06629a]",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/97125464650",
      icon: FaWhatsapp,
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/",
      icon: FaLinkedinIn,
      color: "bg-blue-700 hover:bg-blue-800",
    },
    {
      label: "Email",
      href: "mailto:info@alnahlasolutions.ae",
      icon: FaEnvelope,
      color: "bg-red-500 hover:bg-red-600",
    },
  ];

  return (
    <div className="fixed bottom-24 md:bottom-4 right-4 z-[1000] flex flex-col gap-3">
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <a
            key={action.label}
            href={action.href}
            target="_blank"
            rel="noreferrer"
            aria-label={action.label}
            className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-all mb-4 duration-300 hover:scale-110 ${action.color}`}
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
}
