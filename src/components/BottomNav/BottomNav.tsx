import { Favorite, Home, Person, Search } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BottomNav.css";

const BottomNav = () => {
  const navigate = useNavigate();

  const [viewportWidth, setviewPortWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setviewPortWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, [viewportWidth]);

  return (
    <>
      {viewportWidth < 600 && (
        <nav className="bottom-nav-container">
          <Home onClick={() => navigate("/")} />
          <Search />
          <Favorite onClick={() => navigate("/")} />
          <Person onClick={() => navigate("/signin")} />
        </nav>
      )}
    </>
  );
};

export default BottomNav;
