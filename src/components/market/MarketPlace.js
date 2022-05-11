import React from "react";
import Products from "./Products";
import PopularProducts from "./PopularProducts";
import { Box, Grid } from "@mui/material";

// Returns a default market place.
const MarketPlace = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  return (
    // market - general
    <Grid container spacing={0.1}>
      <div >
        <div className="market-general">
          <Grid item xs={8}>
            <Products />
          </Grid>
          <Grid item xs={4}>
            <PopularProducts />
          </Grid>
        </div>
      </div>
    </Grid>
  );
};
export default MarketPlace;
