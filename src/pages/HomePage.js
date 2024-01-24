import React from "react";
import foodbg from "../assets/foodbg.jpg";
import HeaderComp from "../components/HeaderComp";
import { Container, Box, Grid } from "@mui/material";
import "../assets/responsive.css";
import PageContent from "./PageContent";
const HomePage = () => {
  return (
    <div
      style={{ backgroundImage: `url(${foodbg})`, minHeight: '100vh' }}
      className="bg-cover bg-fixed bg-center bg-no-repeat  mr-14 pt-24 "
    >
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}></Grid>
            <Grid item xs={12} md={6}>
              <HeaderComp />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <PageContent/>
    </div>
  );
};

export default HomePage;
