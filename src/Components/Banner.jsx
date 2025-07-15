import React from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";


const ScrollingBanner = ({ text = "⚠️ SCROLLING BANNER ⚠️", speed = 4, repeat = 30 }) => {
  const repeatedText = Array(repeat).fill(text).join(" ");

  return (
    <section
      className="relative w-full bg-black py-4 overflow-hidden z-20"
      data-scroll-section
    >
      <div
        className={`inline-block whitespace-nowrap font-bold text-xl text-white px-4`}
        style={{
          minWidth: "300vw",
          transform: "translateX(25vw)", // Optional offset to avoid jump at start
        }}
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed={speed}
      >
        {repeatedText}
      </div>
    </section>
  );
};

export default ScrollingBanner;
