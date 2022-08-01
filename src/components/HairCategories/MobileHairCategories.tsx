import { Button } from "@mui/material";
import React from "react";
import { hairCategory } from "../../Data.js";

const MobileHairCategories = () => {
  return (
    <>
      <div className="mobile-category-wrapper">
        {hairCategory.slice(0, hairCategory.length).map((item) => (
          <div className="mobile-category-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="info">
              <h3>{item.name}</h3>
              <Button
                sx={{ padding: "1rem", fontWeight: "bold", color: "#fff" }}
                color="inherit"
                size="large"
                variant="outlined"
              >
                SHOP NOW
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="not-sure">
        <h2>Not sure what you are looking for?</h2>
        <Button
          color="inherit"
          size="large"
          variant="contained"
          // onClick={() => navigate(`/${allProductsRoute}`)}
        >
          BROWSE ALL HAIR
        </Button>
      </div>
    </>
  );
};

export default MobileHairCategories;
