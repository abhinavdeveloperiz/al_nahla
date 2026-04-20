import { useEffect, useState } from "react";

function Loader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
   
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 3500); 

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 bg-white flex items-center justify-center z-[9999] transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center" data-aos="zoom-in">
        <img
          src="https://assets-v2.lottiefiles.com/a/3f9cf38a-116d-11ee-b74f-03d8ed1ed29e/yvKlzf67SM.gif"
          alt="Al Nahla"
          className="w-80 h-80" 
        />
      </div>
    </div>
  );
}

export default Loader;