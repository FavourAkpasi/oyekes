import "./SideNav.css";
import CloseIcon from "@mui/icons-material/Close";

type SideNavProps = {
  openSideNav: boolean;
  setOpenSideNav: Function;
};

function SideNav({ openSideNav, setOpenSideNav }: SideNavProps) {
  return (
    <div className="side_nav" style={{ width: `${openSideNav ? "60%" : "0"}` }}>
      <ul>
        <li onClick={() => setOpenSideNav(!openSideNav)}>
          <a href="/hair">HAIR</a>
        </li>
        <li onClick={() => setOpenSideNav(!openSideNav)}>
          <a href="/fabrics">FABRICS</a>
        </li>
        <li onClick={() => setOpenSideNav(!openSideNav)}>
          <a href="/collections">FEATURED</a>
        </li>
        <li onClick={() => setOpenSideNav(!openSideNav)}>
          <a href="/signup">ACCOUNT</a>
        </li>
        <li onClick={() => setOpenSideNav(!openSideNav)}>
          <a href="/soon">ABOUT US</a>
        </li>
        <li onClick={() => setOpenSideNav(!openSideNav)}>
          <a href="/soon">CONTACT US</a>
        </li>
        <li onClick={() => setOpenSideNav(!openSideNav)}>
          <a href="/soon">BOOK A SESSION</a>
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
