import "./HairCategories.css";
import React, { useEffect, useState } from "react";
import LargeHairCartegories from "./LargeHairCartegories";
import MobileHairCategories from "./MobileHairCategories";

const HairCategories = () => {
  const [viewportWidth, setviewPortWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setviewPortWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, [viewportWidth]);
  return (
    <>
      {viewportWidth < 600 ? (
        <MobileHairCategories />
      ) : (
        <LargeHairCartegories />
      )}
    </>
  );
};

export default HairCategories;
