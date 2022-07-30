import { MailOutline, Phone, Room } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const navigate = useNavigate();
  return (
    <div className="footer-container">
      <div className="footer-left">
        <div className="logo" onClick={() => navigate("/")}>
          OYEKES
        </div>
        <div className="header-left-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            corrupti iure, neque molestiae sapiente omnis quod reiciendis
            pariatur! Ducimus asperiores ad earum quam magni repellendus quo
            molestias eum, repudiandae dolores?
          </p>
        </div>
      </div>
      <div className="footer-center link">
        <div className="footer-center-title">
          <h4>©2022 OYEKES</h4>
        </div>
        <div className="footer-center-items">
          <p>Work with Us </p>
          <p>Invest in Our Dream</p>
          <p>Privacy & Cookies</p>
          <p>Ts&Cs</p>
          <p>Accessability</p>
          <p>My Account</p>
          <p>FAQs</p>
        </div>
      </div>
      <div className="footer-right link">
        <div className="footer-right-items">
          <p>
            <Room /> Shop 5, Showcase Complex, 119 Country Home road, Benin
            City. Edo. Nigeria
          </p>
          <p>
            <Room /> Shop 1, Material Complex, 205 2nd Ugbor road, Benin City.
            Edo. Nigeria
          </p>
          <p>
            <Phone /> +234 801 234 5678
          </p>
          <p>
            <MailOutline /> contact@oyekes.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
