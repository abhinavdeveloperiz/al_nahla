import Logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0872b9] text-white pb-16 md:pb-0 mx-4 rounded-t-3xl mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <img src={Logo} alt="Logo" className="w-32" />
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2 text-white">
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
          <h3 className="font-semibold mb-3 text-white">Contact</h3>
          <p className="text-white">Dubai</p>
          <p className="text-white">email@example.com</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-white border-t border-[#0d4d7e] py-4 pb-12">
        © 2026 All rights reserved <br />
        <a
          href="https://www.inspirezesttechnologies.com/"
          target="_blank"
          className="text-white hover:text-[#f38020] transition"
        >
          Developed By{" "}
          <span className="font-semibold">
            InspireZest Technologies Pvt Ltd
          </span>
        </a>
      </div>
    </footer>
  );
}
