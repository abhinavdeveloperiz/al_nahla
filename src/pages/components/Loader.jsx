import { useEffect, useState } from "react";

function Loader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fake progress animation
    let value = 0;
    const interval = setInterval(() => {
      value += Math.random() * 15;
      if (value >= 100) value = 100;
      setProgress(value);
    }, 200);

    // Start exit animation
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2800);

    // Remove loader
    const removeTimer = setTimeout(() => {
      setVisible(false);
      clearInterval(interval);
    }, 4000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      clearInterval(interval);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 bg-white flex items-center justify-center z-[9999]
      transition-all duration-1000 ease-in-out
      ${fadeOut ? "opacity-0 scale-110 blur-sm" : "opacity-100 scale-100"}`}
    >
      <div className="flex flex-col items-center">

        {/* LOGO */}
        <img
          src="https://assets-v2.lottiefiles.com/a/3f9cf38a-116d-11ee-b74f-03d8ed1ed29e/yvKlzf67SM.gif"
          alt="Al Nahla"
          className="w-72 h-72 animate-[float_3s_ease-in-out_infinite]"
        />

        {/* BRAND TEXT */}
        <h1 className="mt-4 text-xl font-bold tracking-wide text-slate-900 animate-fadeIn">
          Al Nahla
        </h1>

        {/* PROGRESS BAR */}
        <div className="w-48 h-[3px] bg-slate-200 mt-6 overflow-hidden rounded">
          <div
            className="h-full bg-amber-400 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* PERCENT */}
        <p className="text-xs text-slate-400 mt-2">
          {Math.floor(progress)}%
        </p>
      </div>

      {/* CUSTOM ANIMATIONS */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}

export default Loader;