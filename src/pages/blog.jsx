import { useEffect } from "react";
import AOS from "aos";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Blog() {
  const POSTS = [
    {
      title: "Future of Enterprise IT in UAE",
      desc: "Explore how digital transformation is reshaping businesses across UAE.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      date: "March 2026",
    },
    {
      title: "Cyber Security Trends 2026",
      desc: "Key security practices every organization must adopt this year.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      date: "February 2026",
    },
    {
      title: "Cloud Infrastructure Best Practices",
      desc: "Scalable and secure cloud strategies for modern enterprises.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      date: "January 2026",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* HERO (Same style as Home) */}
      <section
        className="relative h-[30vh] md:h-[50vh] flex items-center text-white"
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/thumbnails/036/782/214/small_2x/ai-generated-digital-twin-ai-simulation-technology-ai-generated-photo.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">
            Blogs
          </h1>
          <p className="text-slate-300 max-w-xl">
            <Link to="/" className="text-amber-400 hover:underline">
              Home
            </Link>{" "}
            / Blog
          </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold uppercase text-slate-900">
              Latest Articles
            </h2>
            <p className="text-slate-500 mt-4">
              Stay updated with industry insights and innovations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {POSTS.map((post, i) => (
              <div
                key={i}
              
                className="group rounded-2xl overflow-hidden shadow-lg bg-white"
              >
                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <span className="text-xs text-amber-500 font-semibold">
                    <span className="text-gray-600">Posted On:</span>{" "}
                    {post.date}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 mt-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                    {post.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION (Match Home) */}
      <section className="bg-gradient-to-r from-amber-400 to-amber-500 py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-black mb-4">
            Want Expert IT Insights?
          </h2>
          <p className="text-black/80 mb-6">
            Follow our blog for the latest updates in enterprise technology.
          </p>

          <a
            href="/contact"
            className="px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
