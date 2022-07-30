import { Facebook, Google } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import React from "react";
import "./SignUp.css";
import Footer from "../../components/Footer/Footer";
import Socials from "../../components/Socials/Socials";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="auth">
        <div className="logo" onClick={() => navigate("/")}>
          OYEKES
        </div>
        <div className="auth-container">
          <div className="auth-container-box">
            <div className="auth-option">
              <span onClick={() => navigate("/signin")}>LOGIN</span>
            </div>
            <div className="vertical-line"></div>
            <div className="auth-option sign-up">
              <span onClick={() => navigate("/signup")}>JOIN</span>
            </div>
          </div>

          <form action="">
            <br />
            <span className="other-option"> JOIN OYEKES WITH ... </span>
            <br />
            <Button
              variant="outlined"
              startIcon={<Google color="error" />}
              color="inherit"
              size="large"
            >
              GOOGLE
            </Button>
            <br />
            <Button
              variant="outlined"
              startIcon={<Facebook color="primary" />}
              color="inherit"
              size="large"
            >
              FACEBOOK
            </Button>
            <br />
            <span className="other-option-text">
              Speed up the Registration process and No extra passwords to
              remember - no brain fail. Don't worry, we'd never share any of
              your data or post anything on your behalf. you can trust us 😊
            </span>
            <br />
            <span className="other-option"> OR JOIN OYEKES WITH EMAIL</span>
            <br />

            <TextField required id="outlined-required" label="Name" />
            <br />
            <TextField required id="outlined-required" label="Email" />
            <br />
            <TextField required id="outlined-required" label="Password" />
            <br />
            <TextField
              required
              id="outlined-required"
              label="Confirm Password"
            />
            <br />
            <span className="terms-conditions">
              By Clicking on the button below, you agree to{" "}
              <span className="terms" onClick={() => navigate("/Terms")}>
                Oyekes Terms & Conditions
              </span>
            </span>
            <br />
            <Button
              sx={{
                padding: "0.8rem",
                fontWeight: "bold",
                color: "#111",
                backgroundColor: "pink",
                letterSpacing: "0.1rem",
              }}
              color="inherit"
              size="large"
            >
              JOIN OYEKES
            </Button>
            <br />
            <span
              className="forgot-password "
              onClick={() => navigate("/signin")}
            >
              already have an Account?
            </span>
          </form>
        </div>
      </section>
      <Socials />
      <Footer />
    </>
  );
};

export default SignUp;
