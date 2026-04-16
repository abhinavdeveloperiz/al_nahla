import Logo from "../../assets/logo/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pb-16 md:pb-0 mx-4 rounded-t-3xl mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <img src={Logo} alt="Logo" className="w-32" />
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Careers</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-gray-400">Trivandrum, Kerala</p>
          <p className="text-gray-400">email@example.com</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-400 border-t border-gray-700 py-4 pb-12">
        © 2026 All rights reserved <br />
        <a
          href="https://www.inspirezesttechnologies.com/"
          target="_blank"
          className="text-gray-400"
        >
          Developed By{" "}
          <span className="text-white hover:text-blue-600">
            InspireZest Technologies Pvt Ltd
          </span>
        </a>
      </div>
    </footer>
  );
}
