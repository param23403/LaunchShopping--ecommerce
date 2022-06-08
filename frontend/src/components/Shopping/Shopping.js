import Navbar from "../Navbar/Navbar";
import {
  Grid,
  InputBase,
  IconButton,
  Card,
  Typography,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";
import Product from "./Product";

const Homepage = () => {
  const [stateStack1, setStateStack1] = useState([]);
  const [stateStack2, setStateStack2] = useState([]);
  const [stateStack3, setStateStack3] = useState([]);
  const [stateStack4, setStateStack4] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/shopping/products")
      .then((res) => res.json())
      .then((data) => {
        const stack1 = [];
        const stack2 = [];
        const stack3 = [];
        const stack4 = [];
        let length = data.result.length;
        const stack4length = Math.floor(length / 4);
        length = length - stack4length;
        const stack3length = Math.floor(length / 3);
        length = length - stack3length;
        const stack2length = Math.floor(length / 2);
        length = length - stack2length;
        const stack1length = Math.floor(length / 1);
        length = length - stack1length;

        for (let i = 0; i < stack1length; i++) {
          stack1[i] = data.result[i];
        }
        for (let i = stack1length; i < stack2length + stack1length; i++) {
          stack2[i] = data.result[i];
        }
        for (
          let i = stack2length + stack1length;
          i < stack3length + stack2length + stack1length;
          i++
        ) {
          stack3[i] = data.result[i];
        }
        for (
          let i = stack3length + stack2length + stack1length;
          i < stack4length + stack3length + stack2length + stack1length;
          i++
        ) {
          stack4[i] = data.result[i];
        }
        setStateStack1(stack1);
        setStateStack2(stack2);
        setStateStack3(stack3);
        setStateStack4(stack4);
      });
  }, []);

  return (
    <>
      <Navbar ispage={[true, false, false]} />
      <Grid container justifyContent="center" marginTop="1rem">
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
          <Grid container spacing={2} sx={{ marginTop: "1rem", marginBottom: "15rem" }}>
            <Grid item xs={3}>
              <Stack spacing={2}>
                {stateStack1.map((good) => (
                  <Product
                    key={good.id}
                    id={good.id}
                    name={good.name}
                    price={good.price}
                    img={good.img}
                  />
                ))}
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack spacing={2}>
                {stateStack2.map((good) => (
                  <Product
                    key={good.id}
                    id={good.id}
                    name={good.name}
                    price={good.price}
                    img={good.img}
                  />
                ))}
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack spacing={2}>
                {stateStack3.map((good) => (
                  <Product
                    key={good.id}
                    id={good.id}
                    name={good.name}
                    price={good.price}
                    img={good.img}
                  />
                ))}
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack spacing={2}>
                {stateStack4.map((good) => (
                  <Product
                    key={good.id}
                    id={good.id}
                    name={good.name}
                    price={good.price}
                    img={good.img}
                  />
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </>
  );
};

export default Homepage;
