import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";



function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}`;
}

export default function RatingComp(props) {
 

  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Rating
        name="hover-feedback"
        value={props.value}
        precision={0.5}
        getLabelText={getLabelText}
      
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
    </Box>
  );
}
