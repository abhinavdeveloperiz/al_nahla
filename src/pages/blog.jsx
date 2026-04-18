import { Construction } from "lucide-react";

function Blog() {
    return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 text-slate-900 px-4">
      <div className="text-center max-w-md">
        
        {/* ICON */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-amber-100">
            <Construction className="text-amber-500" size={32} />
          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Blog Page
        </h1>

        {/* STATUS */}
        <p className="text-lg font-medium text-amber-600 mb-2">
          Under Development
        </p>

        {/* DESCRIPTION */}
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          We're currently working on this page. It will be available soon with
          full contact details and support options.
        </p>

        {/* OPTIONAL LINE */}
        <div className="w-16 h-[2px] bg-amber-400 mx-auto mt-6" />
      </div>
    </div>
  );
}
export default Blog