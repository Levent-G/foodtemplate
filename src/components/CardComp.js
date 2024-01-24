import React from "react";
import { Card, CardContent, CardMedia, Box } from "@mui/material";
import TypographyComp from "../components/TypographyComp";
import RatingComp from "./RatingComp";

const CardComp = (props) => {
  return (
    <div>
      <Card
        sx={{ display: "flex", boxShadow: "none !important" }}
        className="mt-12"
      >
        <CardMedia
          component="img"
          sx={{ maxWidth: 150, maxHeight: 150 }}
          image={props.img}
          alt="Live from space album cover"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <TypographyComp component="div" variant="h6" value={props.baslik} />

            <TypographyComp
              variant="h7"
              color="text.secondary"
              component="div"
              value={props.content}
            />
            <RatingComp value={props.rating}/>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
};

export default CardComp;
