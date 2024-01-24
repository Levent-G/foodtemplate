import React from "react";
import TypographyComp from "../components/TypographyComp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Footer = () => {
  return (
    <div className="text-center justify-center items-center bg-[#E1323E] text-white p-5 mt-12 ">
      <TypographyComp
        variant="h6"
        component="h6"
        value="FOOD TEMPLATE"
        weight="bold"
        color="white"
      />
  
      <FacebookIcon className="m-5"/>
      <InstagramIcon className="m-5"/>
      <WhatsAppIcon className="m-5"/>
      
    
    </div>
  );
};

export default Footer;
