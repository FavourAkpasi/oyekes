import React from "react";
import Announcement from "../../components/Announcement/Announcement";
import BottomNav from "../../components/BottomNav/BottomNav";
import FabricsCategories from "../../components/FabricCategories/FabricsCategories";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Servicebar from "../../components/Servicebar/Servicebar";
import Slider from "../../components/Slider/Slider";
import Socials from "../../components/Socials/Socials";

const Fabrics = () => {
  return (
    <>
      <Header />
      <Navbar />
      <BottomNav />
      <Announcement />
      <Slider />
      <FabricsCategories />
      <Servicebar />
      <Socials />
      <Footer />
    </>
  );
};

export default Fabrics;
