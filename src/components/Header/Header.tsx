import "./Header.css";
import React, { useEffect, useState } from "react";
import MobileHeader from "./MobileHeader";
import LargeHeader from "./LargeHeader";

const Header = () => {
  const [viewportWidth, setviewPortWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setviewPortWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, [viewportWidth]);

  return <div>{viewportWidth < 600 ? <MobileHeader /> : <LargeHeader />}</div>;
};

export default Header;
