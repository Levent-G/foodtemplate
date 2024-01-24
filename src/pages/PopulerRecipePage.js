import React from "react";
import TypographyComp from "../components/TypographyComp";
import CardComp from "../components/CardComp";

import { Box, Container, Grid } from "@mui/material";
import LineComp from "../components/LineComp";
const PopulerRecipePage = (props) => {
  
  return (
    <div >
      <Container>
        <TypographyComp
          variant="h6"
          component="h6"
          value="Most Populer"
          weight="bold"
        />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={6}>
            {props?.foodCardApi.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <CardComp
                  display="flex"
                  img={item.img}
                  baslik={item.cardBaslik}
                  content={item.cardContent}
                  rating={item.rating}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <LineComp/>
    </div>
  );
};

export default PopulerRecipePage;
