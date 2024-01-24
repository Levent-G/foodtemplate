import React from "react";
import { styled } from "@mui/system";
import LunchDiningIcon from "@mui/icons-material/LunchDining";

const FlexContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const LineContainer = styled("div")`
  flex-grow: 1;
  height: 2px;
  background-color:#e0e0e0;

  margin: 0 10px; /* Çizgiler arasındaki boşluğu ayarlayabilirsiniz */
`;
const LineComp = () => {
  return (
    <div className="mt-12">
      <FlexContainer>
        <LineContainer />
        <LunchDiningIcon sx={{color:"#E1323E"}} />
        <LineContainer />
      </FlexContainer>
    </div>
  );
};

export default LineComp;
