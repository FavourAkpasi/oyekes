import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { hairCategory } from "../../Data.js";

const MobileHairCategories = () => {
  return (
    <>
      <section className="main-desc">
        <h2>OYEKES Hair</h2>
        <p>
          With a history stretching back over 5 years, the brand’s Hair Quality
          have become key for Fashion Enthusiast Nationwide and it has an
          increasing growing Customerbase. For that fresh, Sleek, and
          comfortable Feel, filter through Oyekes Hair we have everything you
          need from human hair to peruvian and brasillain hair. Inspired by
          street culture and retro styles, Oyekes Originals brings those fresh,
          archive-inspired Hair Types we all know and love. Scroll through the
          OYEKES Hair Categories to check out our favourites – if you’re not
          already.
        </p>
      </section>
      <section className="mobile-category-wrapper">
        {hairCategory.slice(0, hairCategory.length).map((item) => (
          <div className="mobile-category-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="info">
              <h3>{item.name}</h3>
              <Link to={item.name.replace(/\s/g, "").toLowerCase()}>
                <Button
                  sx={{ padding: "1rem", fontWeight: "bold", color: "#fff" }}
                  color="inherit"
                  size="large"
                  variant="outlined"
                >
                  SHOP NOW
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </section>
      <div className="not-sure mobile">
        <h2>Not sure what you are looking for? you can</h2>
        <Button
          color="inherit"
          variant="outlined"
          // onClick={() => navigate(`/${allProductsRoute}`)}
        >
          BROWSE ALL HAIR
        </Button>
      </div>
    </>
  );
};

export default MobileHairCategories;
