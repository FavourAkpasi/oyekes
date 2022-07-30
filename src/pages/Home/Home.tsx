import React from "react";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Servicebar from "../../components/Servicebar/Servicebar";
import Slider from "../../components/Slider/Slider";
import Socials from "../../components/Socials/Socials";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Announcement />
      <Slider />
      <Servicebar />
      <Socials />
      <Footer />
    </div>
  );
};

export default Home;
