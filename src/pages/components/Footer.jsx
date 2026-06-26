import Logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white pb-16 md:pb-0 mx-4 rounded-t-3xl mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <img src={Logo} alt="Logo" className="w-36 mb-5" />

          <p className="text-blue-100 leading-7 mb-6">
            Al Nahla Solutions is a trusted ICT partner delivering innovative
            technology solutions across the UAE with a strong focus on digital
            transformation and enterprise excellence.
          </p>

          <h4 className="font-semibold text-white mb-3">Follow Us</h4>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#f38020] transition-all duration-300 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 17V9.5H5.84V17H8.34ZM7.09 8.47A1.45 1.45 0 1 0 7.09 5.57A1.45 1.45 0 0 0 7.09 8.47ZM18.16 17V12.88C18.16 10.67 16.98 9.25 15.06 9.25C14.14 9.25 13.39 9.75 12.88 10.46V9.5H10.38V17H12.88V12.81C12.88 11.71 13.47 11.05 14.37 11.05C15.25 11.05 15.66 11.67 15.66 12.81V17H18.16Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-xl mb-5">Quick Links</h3>

          <ul className="space-y-3">
            <li>
              <Link to="/" className="hover:text-[#f38020] transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-[#f38020] transition">
                About
              </Link>
            </li>

            <li>
              <Link to="/services" className="hover:text-[#f38020] transition">
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/technologies"
                className="hover:text-[#f38020] transition"
              >
                Technologies
              </Link>
            </li>

            <li>
              <Link to="/blog" className="hover:text-[#f38020] transition">
                Blog
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-[#f38020] transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-xl mb-5">Contact</h3>

          <p className="font-medium">Office No. 101, Edge Tower</p>

          <p>Al Manhal, Airport Road</p>

          <p className="mb-4">
            Abu Dhabi, United Arab Emirates
            <br />
            P.O. Box 7025
          </p>

          <a
            href="mailto:info@alnahlasolutions.ae"
            className="block hover:text-[#f38020] transition"
          >
            info@alnahlasolutions.ae
          </a>

          <a
            href="tel:+97125464650"
            className="block mt-4 hover:text-[#f38020] transition"
          >
            +971 02 5464650
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-blue-700">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-center">
          <p className="text-blue-100">
            © 2026 Al Nahla Solutions. All Rights Reserved.
          </p>

          <a
            href="https://www.inspirezesttechnologies.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f38020] transition"
          >
            Developed By{" "}
            <span className="font-semibold">
              InspireZest Technologies Pvt. Ltd.
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
