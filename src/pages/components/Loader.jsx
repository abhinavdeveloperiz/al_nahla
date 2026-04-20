// components/Loader.jsx
import { useEffect, useState } from "react";

function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-[9999]">
      <div className="flex flex-col items-center">
        {/* LOGO */}
        <img
          src="https://assets-v2.lottiefiles.com/a/3f9cf38a-116d-11ee-b74f-03d8ed1ed29e/yvKlzf67SM.gif"
          alt="Al Nahla"
          className="w-80 h-80 animate-pulse"
        />

    
      </div>

   
    </div>
  );
}

export default Loader;
