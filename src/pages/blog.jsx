import { useEffect, useState } from "react";
import AOS from "aos";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { fetchBlogs, getImageUrl } from "../api";

export default function Blog() {
  const DUMMY_POSTS = [
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

  const [posts, setPosts] = useState(DUMMY_POSTS);

  useEffect(() => {
    async function load() {
      const data = await fetchBlogs();
      if (data && data.length > 0) {
        setPosts(
          data.map((post) => {
            let formattedDate = "Recent";
            if (post.created_at) {
              try {
                formattedDate = new Date(post.created_at).toLocaleDateString(
                  "en-US",
                  {
                    month: "long",
                    year: "numeric",
                  }
                );
              } catch (e) {
                console.error("Error parsing date:", e);
              }
            }
            return {
              title: post.title,
              desc: post.description,
              image: getImageUrl(post.image),
              date: formattedDate,
            };
          })
        );
      }
    }
    load();
  }, []);

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
        <div className="absolute inset-0 bg-[#0872b9]/70" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blogs</h1>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0872b9]">
              Latest Articles
            </h2>
            <p className="text-[#0872b9] mt-4">
              Stay updated with industry insights and innovations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, i) => (
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
                  <span className="text-xs text-[#f38020] font-semibold">
                    <span className="text-[#0872b9]">Posted On:</span>{" "}
                    {post.date}
                  </span>

                  <h3 className="text-xl font-bold text-[#0872b9] mt-2">
                    {post.title}
                  </h3>

                  <p className="text-[#0872b9] text-sm mt-3 leading-relaxed">
                    {post.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION (Match Home) */}
      <section className="bg-gradient-to-r from-[#f38020] to-[#f38020] py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0872b9] mb-4">
            Want Expert IT Insights?
          </h2>
          <p className="text-[#0872b9]/80 mb-6">
            Follow our blog for the latest updates in enterprise technology.
          </p>

          <a
            href="/contact"
            className="px-6 py-3 bg-[#0872b9] text-white rounded-lg font-semibold hover:bg-[#0872b9] transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}

