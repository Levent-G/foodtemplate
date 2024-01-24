import React from "react";
import LineComp from "../components/LineComp";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import CardComp from "../components/CardComp";
import { Box, Container, Grid, Tabs, Tab } from "@mui/material";
import TypographyComp from "../components/TypographyComp";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CategoryFoodPage = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const CustomTabs = styled(Tabs)(({ theme }) => ({
    borderBottom: `1px solid ${theme.palette.divider}`,
    "& .Mui-selected": {
      color: "#E1323E", // Aktif sekme rengi
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "#E1323E", // Çizgi rengi
    },
  }));
  return (
    <div className="mt-12">
       <TypographyComp
          variant="h6"
          component="h6"
          value="Recipe Category"
          weight="bold"
        />
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <CustomTabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Et " {...a11yProps(0)} />
            <Tab label="Tavuk" {...a11yProps(1)} />
            <Tab label="Salata" {...a11yProps(2)} />
          </CustomTabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Container>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={6}>
                {props?.foodCardCategory.map((item, index) => (
                  <Grid item xs={12} md={6} key={index}>
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
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Container>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={6}>
                {props?.foodCardCategory.map((item, index) => (
                  <Grid item xs={12} md={2} key={index}>
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
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Container>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={6}>
                {props?.foodCardCategory.map((item, index) => (
                  <Grid item xs={12} md={12} key={index}>
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
        </CustomTabPanel>
      </Box>
      <LineComp />
    </div>
  );
};

export default CategoryFoodPage;
