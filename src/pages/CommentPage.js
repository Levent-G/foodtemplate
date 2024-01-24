import React from "react";
import TypographyComp from "../components/TypographyComp";
import { Container } from "@mui/material";
import RatingComp from "../components/RatingComp";


const CommentPage = () => {
  return (
    <div style={{ textAlign: 'center' }} className="mt-12">
              
    <Container>
      <img
        src="https://foxcoders.com/demo/mezban/assets/images/testimonial/icon/01.jpg"
        alt=""
        className="mb-12 ml-auto mr-auto"
      />
      <TypographyComp variant="h7" component="h7" value=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum doloremque harum modi cumque sed cupiditate repellat blanditiis fugit atque quaerat a impedit molestias magni fuga, dolore consectetur eaque veniam." />
      <div className="mt-12 mb-12 ml-auto mr-auto">
        <TypographyComp variant="h6" component="h6" value="Comment1" weight="bold" />
        <TypographyComp variant="p" component="p" value=" Lorem ipsum" />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="ml-16">
          <RatingComp value={5} />
        </div>
      </div>
    </Container>

 
  </div>
  );
};

export default CommentPage;
