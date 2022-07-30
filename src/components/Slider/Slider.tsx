import React, { useEffect, useState } from "react";
import MobileSlider from "./MobileSlider";
import LargeSlider from "./LargeSlider";

const Slider = () => {
  const header = document.getElementById("header") as HTMLElement | null;
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (header != null) {
      if (prevScrollpos > currentScrollPos) {
        header.style.top = "0";
      } else {
        header.style.top = "-5rem";
      }
      prevScrollpos = currentScrollPos;
    }
  };

  const [viewportWidth, setviewPortWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setviewPortWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, [viewportWidth]);

  return <div>{viewportWidth < 600 ? <MobileSlider /> : <LargeSlider />}</div>;
};

export default Slider;
