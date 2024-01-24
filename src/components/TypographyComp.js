import React from "react";
import { Typography } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme({
  typography: {
    fontFamily: 'Shadows Into Light',
    h7: {
      fontSize: '15px', // h1 için özel font boyutu
      fontFamily: 'IBM Plex Serif',
    },
    h6:{
      fontSize:"26px"
    },
    p:{
      fontSize:"12px",
      fontFamily: 'IBM Plex Serif',
    }
  },
});
const TypographyComp = (props) => {
  
  return (
    <div>
       <ThemeProvider theme={theme}>
       <Typography variant={props.variant} component={props.component} fontWeight={props.weight} color={props.color}>
        {props.value}
      </Typography>
       </ThemeProvider>
     
    </div>
  );
};

export default TypographyComp;
