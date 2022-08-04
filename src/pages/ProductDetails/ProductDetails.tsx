import React from "react";
import "./ProductDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import { superMegaArray } from "../../Data";
import styled from "styled-components";
import { Button } from "@mui/material";
import {
  Add,
  ArrowBackIos,
  Remove,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Servicebar from "../../components/Servicebar/Servicebar";
import Socials from "../../components/Socials/Socials";
import Footer from "../../components/Footer/Footer";

const FilterContainer = styled.div`
  margin: 1.5rem 0;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 1.2rem;
  font-weight: 200;
`;
const FilterSize = styled.select`
  margin-left: 0.5rem;
  padding: 0.5rem;
`;
const FilterSizeOption = styled.option`
  padding: 0.5rem;
`;

type Product = {
  id: string;
  name: string;
  image: string;
  desc: string;
  price: string;
  class: string;
  category: string;
};

const ProductDetails = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  //   const productId = params.productId;

  const product: Product | undefined = superMegaArray.find(
    (item) => item.id === productId
  );

  return (
    <>
      <Header />
      <Navbar />
      <Announcement />
      <section className="product-details-container">
        <div className="product-details-image">
          <img src={product?.image} alt={product?.name} />
        </div>
        <div className="product-details-desc">
          <h2>{product?.name}</h2>
          <p>{product?.desc}</p>
          <h3>{product?.price}</h3>
          <FilterContainer>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>Single</FilterSizeOption>
                <FilterSizeOption>Double</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <div className="product-quantity">
            <Button color="inherit" size="small" variant="outlined">
              <Add />
            </Button>
            <span>2</span>
            <Button color="inherit" size="small" variant="outlined">
              <Remove />
            </Button>
          </div>
          <Button color="success" size="large" variant="contained">
            ADD TO BAG
            <ShoppingBagOutlined />
          </Button>
          <Button
            color="success"
            size="large"
            variant="outlined"
            onClick={() => navigate(-1)}
          >
            <ArrowBackIos />
            SHOP MORE
          </Button>
        </div>
      </section>
      <Servicebar />
      <Socials />
      <Footer />
    </>
  );
};

export default ProductDetails;
