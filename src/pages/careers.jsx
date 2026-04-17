import { Link } from "react-router-dom";

export default function Careers() {
  return (
    <div className="overflow-hidden">
      <section
        className="relative h-[30vh] md:h-[50vh] flex items-center text-white"
        style={{
          backgroundImage:
            "url('https://wallpapers.com/images/hd/information-technology-artificial-intelligence-3lmq7rank0v68rhk.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">
            Careers
          </h1>
          <p className="text-slate-300 max-w-xl">
            <Link to="/" className="text-amber-400 hover:underline">
              Home
            </Link>{" "}
            / Careers
          </p>
        </div>
      </section>
    </div>
  );
}
