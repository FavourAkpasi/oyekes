import React from "react";
import Announcement from "../../components/Announcement/Announcement";
import BottomNav from "../../components/BottomNav/BottomNav";
import Footer from "../../components/Footer/Footer";
import HairCategories from "../../components/HairCategories/HairCategories";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Servicebar from "../../components/Servicebar/Servicebar";
import Socials from "../../components/Socials/Socials";

const Hair = () => {
  return (
    <>
      <Header />
      <Navbar />
      <BottomNav />
      <Announcement />
      <HairCategories />
      <Servicebar />
      <Socials />
      <Footer />
    </>
  );
};

export default Hair;
