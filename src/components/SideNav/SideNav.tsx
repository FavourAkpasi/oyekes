import "./SideNav.css";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

type SideNavProps = {
  openSideNav: boolean;
  setOpenSideNav: Function;
};

function SideNav({ openSideNav, setOpenSideNav }: SideNavProps) {
  return (
    <div className="side_nav" style={{ width: `${openSideNav ? "60%" : "0"}` }}>
      <ul>
        <li onClick={() => setOpenSideNav(!openSideNav)}>
          <Link to="/hair">HAIR</Link>
        </li>
        <li onClick={() => setOpenSideNav(!openSideNav)}>
          <Link to="/fabrics">FABRICS</Link>
        </li>
        <li onClick={() => setOpenSideNav(!openSideNav)}>
          <Link to="/">FEATURED</Link>
        </li>
        <li onClick={() => setOpenSideNav(!openSideNav)}>
          <Link to="/signin">ACCOUNT</Link>
        </li>
        <li onClick={() => setOpenSideNav(!openSideNav)}>
          <Link to="/">ABOUT US</Link>
        </li>
        <li onClick={() => setOpenSideNav(!openSideNav)}>
          <Link to="/">CONTACT US</Link>
        </li>
        <li onClick={() => setOpenSideNav(!openSideNav)}>
          <Link to="/">BOOK A SESSION</Link>
        </li>
      </ul>
      {openSideNav && (
        <button id="close_btn" onClick={() => setOpenSideNav(!openSideNav)}>
          <CloseIcon />
        </button>
      )}
    </div>
  );
}

export default SideNav;
