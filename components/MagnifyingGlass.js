"use client";
import { useEffect, useState } from "react";

const MagnifyingGlass = () => {
  const [scale, setScale] = useState(1);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const newScale = 1 + scrollPosition / 1000;
    setScale(newScale);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden flex items-center justify-center">
      <div
        className="relative w-full h-full flex items-center justify-center"
        style={{ transform: `scale(${scale})` }}
      >
        <img src="/image.png" alt="Magnified" className="object-contain w-full h-full" />
      </div>
    </div>
  );
};

export default MagnifyingGlass;
