import React from "react";
import TypographyComp from "../components/TypographyComp";
import { Card, CardContent, CardMedia, CardActionArea } from "@mui/material";
import chef1 from "../assets/chef1.jpg";
import chef2 from "../assets/chef2.jpg";
import chef3 from "../assets/chef3.jpg";
import { Box, Container, Grid } from "@mui/material";
import LineComp from "../components/LineComp";
const PopulerChefPage = () => {
  return (
    <div className="bg-gray-100 p-6 mt-12">
      <TypographyComp
        variant="h6"
        component="h6"
        value="Populer Chef"
        weight="bold"
      />

      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  maxWidth: 245,
                  backgroundColor: "transparent !important",
                  boxShadow: "none",
                }}
                className="mt-12"
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="50"
                    image={chef1}
                    alt="green iguana"
                    sx={{ borderRadius: "50%", height: "250px" }}
                  />
                  <CardContent>
                    <TypographyComp
                      fontWeight="bold"
                      variant="h5"
                      component="div"
                      value="baslik"
                    />

                    <TypographyComp
                      variant="body2"
                      color="text.secondary"
                      value="bas Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarcticalik"
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  maxWidth: 245,
                  backgroundColor: "transparent !important",
                  boxShadow: "none",
                }}
                className="mt-12"
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="50"
                    image={chef2}
                    alt="green iguana"
                    sx={{ borderRadius: "50%", height: "250px" }}
                  />
                  <CardContent>
                    <TypographyComp
                      fontWeight="bold"
                      variant="h5"
                      component="div"
                      value="baslik"
                    />

                    <TypographyComp
                      variant="body2"
                      color="text.secondary"
                      value="bas Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarcticalik"
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  maxWidth: 245,
                  backgroundColor: "transparent !important",
                  boxShadow: "none",
                }}
                className="mt-12"
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="150"
                    image={chef3}
                    alt="green iguana"
                    sx={{ borderRadius: "50%", height: "250px" }}
                  />
                  <CardContent>
                    <TypographyComp
                      fontWeight="bold"
                      variant="h5"
                      component="div"
                      value="baslik"
                    />

                    <TypographyComp
                      variant="body2"
                      color="text.secondary"
                      value="bas Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarcticalik"
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <LineComp />
    </div>
  );
};

export default PopulerChefPage;
