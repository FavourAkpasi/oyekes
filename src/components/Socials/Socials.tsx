import "./Socials.css";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Input } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

function Socials() {
  return (
    <div className="socials-container">
      <div className="socials-box">
        <div className="socials-item">
          <h3>CONNECT WITH US</h3>
        </div>
        <div className="socials-item">
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon />
          <WhatsAppIcon />
          <EmailIcon />
        </div>
      </div>
      <div className="socials-box">
        <div className="socials-item">
          <div className="newsletter-container">
            <h3>SUBSCRIBE TO OUR NEWSLETTER </h3>
            <div className="search-box">
              <Input fullWidth disableUnderline placeholder="Email" />
              <ArrowRightIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Socials;
