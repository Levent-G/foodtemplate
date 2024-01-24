import React from "react";
import { Container } from "@mui/material";
import TypographyComp from "../components/TypographyComp";
const HeaderComp = () => {
  return (
    <div className="bg-gray-800 bg-opacity-55 p-8 text-white header">
      <Container>
        <TypographyComp variant="h3" component="h3" value=" h1. Heading" />
        <TypographyComp
          variant="h7"
          component="h7"
          value=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum doloremque harum modi cumque sed cupiditate repellat blanditiis fugit atque quaerat a impedit molestias magni fuga, dolore consectetur eaque veniam.
"
        />
      </Container>
    </div>
  );
};

export default HeaderComp;
