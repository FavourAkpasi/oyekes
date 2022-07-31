import React, { useEffect, useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SideNav from "../SideNav/SideNav";
import { useNavigate } from "react-router-dom";

const MobileHeader = () => {
  useEffect(() => {
    const header = document.getElementById("header") as HTMLElement | null;
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (header != null) {
        if (prevScrollpos > currentScrollPos || 0) {
          header.style.top = "0";
        } else {
          header.style.top = "-5rem";
        }
        prevScrollpos = currentScrollPos;
      }
    };
  }, []);

  const navigate = useNavigate();
  const [viewportWidth, setviewPortWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setviewPortWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, [viewportWidth]);

  const [openSideNav, setOpenSideNav] = useState(false);
  return (
    <header className="header-container" id="header">
      <div className="header-wrapper mobile-header">
        <div className="header-left">
          {!openSideNav && (
            <MenuIcon
              id="menu_bar"
              onClick={() => setOpenSideNav(!openSideNav)}
            />
          )}

          <SideNav openSideNav={openSideNav} setOpenSideNav={setOpenSideNav} />
        </div>
        <div
          className="logo"
          style={{ margin: "0" }}
          onClick={() => navigate("/")}
        >
          OYEKES
        </div>
        <div className="header-right">
          <ShoppingCartIcon onClick={() => navigate("/")} />
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
