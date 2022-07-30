import React, { useEffect, useState } from "react";
import MobileSlider from "./MobileSlider";
import LargeSlider from "./LargeSlider";

const Slider = () => {
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
