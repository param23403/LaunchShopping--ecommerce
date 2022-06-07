import Navbar from "../Navbar/Navbar";
import { Grid, InputBase, IconButton, Card, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import jacket from "./jacket.png";

const Homepage = () => {
  return (
    <>
      <Navbar ispage={[true, false, false]} />
      <Grid container justifyContent="center" marginTop="1%">
        <Grid item xs={12}>
          <Card sx={{ width: "15%", marginLeft: "42.5%" }}>
            <InputBase
              sx={{ ml: 1, flex: 1, width: "81%" }}
              placeholder="Search Products"
              inputProps={{ "aria-label": "search products" }}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Card>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Grid container justifyContent={"center"}>
            <Grid item xs={3}>
              <Card margin="1%">
                <img src={jacket} alt='jacket' height="402px" width="302px" margin="auto"/>
                <Typography variant="p">
                  Designer Solid Brown Front Jacket
                </Typography>
                <Typography variant="p"><strong>US$59.99</strong></Typography>
              </Card>
            </Grid>
            <Grid item xs={3}>
            <Card>
                <img src={jacket} alt='jacket' height="402px" width="302px" margin="auto"/>
                <Typography variant="p">
                  Designer Solid Brown Front Drop Straight Jacket
                </Typography>
                <Typography variant="p"><strong>US$59.99</strong></Typography>
              </Card>
            </Grid>
            <Grid item xs={3}>
            <Card>
                <img src={jacket} alt='jacket' height="402px" width="302px" margin="auto"/>
                <Typography variant="p">
                  Designer Solid Brown Front Drop Straight Jacket
                </Typography>
                <Typography variant="p"><strong>US$59.99</strong></Typography>
              </Card>
            </Grid>
            <Grid item xs={3}>
            <Card>
                <img src={jacket} alt='jacket' height="402px" width="302px" margin="auto"/>
                <Typography variant="p">
                  Designer Solid Brown Front Drop Straight Jacket
                </Typography>
                <Typography variant="p"><strong>US$59.99</strong></Typography>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </>
  );
};

export default Homepage;
