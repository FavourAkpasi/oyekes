import React from "react";
import "./HairPages.css";
import { superMegaArray } from "../../Data";
import { FavoriteBorderRounded } from "@mui/icons-material";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Servicebar from "../../components/Servicebar/Servicebar";
import Socials from "../../components/Socials/Socials";
import Footer from "../../components/Footer/Footer";
import ProductDetails from "../ProductDetails/ProductDetails";
import { useNavigate } from "react-router-dom";

const WaveyHair = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Navbar />
      <Announcement />
      <section className="products-container">
        {superMegaArray.map((item) => (
          <div
            className="product-card-container"
            key={item.id}
            onClick={() => navigate(`/ProductDetails/${item.id}`)}
          >
            <div className="product-card">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="product-item-icon">
              <FavoriteBorderRounded />
            </div>
            <div className="product-desc">
              <p>{item.name}</p>
              <h4>{item.desc.slice(0, 20)}...</h4>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </section>
      <Servicebar />
      <Socials />
      <Footer />
    </>
  );
};

export default WaveyHair;
