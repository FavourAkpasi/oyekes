import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Input } from "@mui/material";
import Badge from "@mui/material/Badge";
import FaceIcon from "@mui/icons-material/Face";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LargeHeader = () => {
  useEffect(() => {
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
  }, [window.onscroll]);

  const navigate = useNavigate();
  return (
    <header className="header-container" id="header">
      <div className="header-wrapper">
        <div className="header-left">
          <div className="logo" onClick={() => navigate("/")}>
            OYEKES
          </div>
          <div className="header-text" onClick={() => navigate("/hair")}>
            HAIR
          </div>
          <div className="header-text" onClick={() => navigate("/fabrics")}>
            FABRICS
          </div>
        </div>
        <div className="header-center">
          <div className="search-box">
            <Input fullWidth disableUnderline placeholder="Search the Store" />
            <SearchIcon cursor="pointer" />
          </div>
        </div>
        <div className="header-right">
          <Badge>
            <FaceIcon cursor="pointer" onClick={() => navigate("/login")} />
          </Badge>
          <Badge color="error" badgeContent={1}>
            <FavoriteRoundedIcon cursor="pointer" />
          </Badge>
          <Badge color="error" badgeContent={1}>
            <LocalMallRoundedIcon cursor="pointer" />
          </Badge>
        </div>
      </div>
    </header>
  );
};

export default LargeHeader;
