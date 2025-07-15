// App.jsx
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Info from "./Components/Info";
import Connect from "./Components/Connect";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"), // ✅ Scroll container
      smooth: true, // ✅ Enables smooth scrolling (like inertia)
      direction: "vertical", // ✅ Can be 'vertical' or 'horizontal'
      gestureDirection: "vertical", // ✅ Direction for touchpad/mouse gestures
      smoothMobile: false, // ✅ Enable smooth scroll on mobile (off by default)
      multiplier: 2, // ✅ Scroll speed multiplier (higher = faster)
      reloadOnContextChange: true, // ✅ Useful when switching orientations/resizing
      getDirection: true, // ✅ Add `data-scroll-direction="up/down"` to container
      getSpeed: true, // ✅ Adds `data-scroll-speed` for tracking scroll speed
      inertia: 2, // ✅ How much inertia to apply (1 = normal)
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <>
      <div data-scroll-container ref={scrollRef}>
        <Hero />
        <About />
        <Banner text="🚧 WORK IN PROGRESS" speed={8} direction="horizontal" />
        <Info />
        <Banner text="|  LETS CONNECT   " speed={-8} direction="horizontal" />
        <Connect />
      </div>
    </>
  );
}

export default App;
