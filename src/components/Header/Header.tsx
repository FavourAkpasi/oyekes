import "./Header.css";
import React, { useEffect, useState } from "react";
import MobileHeader from "./MobileHeader";
import LargeHeader from "./LargeHeader";

const Header = () => {
  const header = document.getElementById("header") as HTMLElement | null;
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
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

  return <div>{viewportWidth < 600 ? <MobileHeader /> : <LargeHeader />}</div>;
};

export default Header;
