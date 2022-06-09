import Navbar from "../Navbar/Navbar";
import { Grid, InputBase, IconButton, Card, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState, useRef } from "react";
import Product from "./Product";

const stack1 = [];
const stack2 = [];
const stack3 = [];
const stack4 = [];
const Homepage = () => {
  const [stateStack1, setStateStack1] = useState([]);
  const [stateStack2, setStateStack2] = useState([]);
  const [stateStack3, setStateStack3] = useState([]);
  const [stateStack4, setStateStack4] = useState([]);
  const [productSelected, setProductSelected] = useState(false);
  const textFieldRefSearch = useRef(null);

  useEffect(() => {
    fetch("http://localhost:9000/shopping/products")
      .then((res) => res.json())
      .then((data) => {
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
          stack2[i - stack1length] = data.result[i];
        }
        for (
          let i = stack2length + stack1length;
          i < stack3length + stack2length + stack1length;
          i++
        ) {
          stack3[i - (stack2length + stack1length)] = data.result[i];
        }
        for (
          let i = stack3length + stack2length + stack1length;
          i < stack4length + stack3length + stack2length + stack1length;
          i++
        ) {
          stack4[i - (stack3length + stack2length + stack1length)] =
            data.result[i];
        }
        for (let i = 0; i < stack1.length; i++) {
          stack1[i] = stack1[i];
        }
        for (let i = 0; i < stack2.length; i++) {
          stack2[i] = stack2[i];
        }
        for (let i = 0; i < stack3.length; i++) {
          stack3[i] = stack3[i];
        }
        for (let i = 0; i < stack4.length; i++) {
          stack4[i] = stack4[i];
        }
        setStateStack1(stack1);
        setStateStack2(stack2);
        setStateStack3(stack3);
        setStateStack4(stack4);
      });
  }, []);

  const search = () => {
    const searchedFor = [];
    const searchStack1 = [];
    const searchStack2 = [];
    const searchStack3 = [];
    const searchStack4 = [];
    for (let i = 0; i < stack1.length; i++) {
      if (stack1[i].name.includes(textFieldRefSearch.current.value)) {
        searchedFor.push(stack1[i]);
      }
    }
    for (let i = 0; i < stack2.length; i++) {
      if (stack2[i].name.includes(textFieldRefSearch.current.value)) {
        searchedFor.push(stack2[i]);
      }
    }
    for (let i = 0; i < stack3.length; i++) {
      if (stack3[i].name.includes(textFieldRefSearch.current.value)) {
        searchedFor.push(stack3[i]);
      }
    }
    for (let i = 0; i < stack4.length; i++) {
      if (stack4[i].name.includes(textFieldRefSearch.current.value)) {
        searchedFor.push(stack4[i]);
      }
    }
    let length = searchedFor.length;
    const stack4length = Math.floor(length / 4);
    length = length - stack4length;
    const stack3length = Math.floor(length / 3);
    length = length - stack3length;
    const stack2length = Math.floor(length / 2);
    length = length - stack2length;
    const stack1length = Math.floor(length / 1);
    length = length - stack1length;
    for (let i = 0; i < stack1length; i++) {
      searchStack1[i] = searchedFor[i];
    }
    for (let i = stack1length; i < stack2length + stack1length; i++) {
      searchStack2[i] = searchedFor[i];
    }
    for (
      let i = stack2length + stack1length;
      i < stack3length + stack2length + stack1length;
      i++
    ) {
      searchStack3[i] = searchedFor[i];
    }
    for (
      let i = stack3length + stack2length + stack1length;
      i < stack4length + stack3length + stack2length + stack1length;
      i++
    ) {
      searchStack4[i] = searchedFor[i];
    }
    setStateStack1(searchStack1);
    setStateStack2(searchStack2);
    setStateStack3(searchStack3);
    setStateStack4(searchStack4);
  };

  return (
    <>
      <Navbar ispage={[true, false, false]} />
      {!productSelected && (
        <Grid container justifyContent="center" marginTop="1rem">
          <Grid item xs={12}>
            <Card sx={{ width: "15%", marginLeft: "42.5%" }}>
              <InputBase
                sx={{ ml: 1, flex: 1, width: "81%" }}
                placeholder="Search Products"
                inputProps={{ "aria-label": "search products" }}
                inputRef={textFieldRefSearch}
              />
              <IconButton
                type="submit"
                sx={{ p: "10px" }}
                aria-label="search"
                onClick={search}
              >
                <SearchIcon />
              </IconButton>
            </Card>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Grid
              container
              spacing={2}
              sx={{ marginTop: "1rem", marginBottom: "15rem" }}
            >
              <Grid item xs={3}>
                <Stack spacing={2}>
                  {stateStack1.map((good) => (
                    <Product
                      key={good.id}
                      id={good.id}
                      name={good.name}
                      price={good.price}
                      img={good.img}
                      setSelected={setProductSelected}
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
                      setSelected={setProductSelected}
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
                      setSelected={setProductSelected}
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
                      setSelected={setProductSelected}
                    />
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      )}
      {productSelected && (
        <div>
          <h1>
            <strong>This is a really cool Product!</strong>
          </h1>
        </div>
      )}
    </>
  );
};

export default Homepage;
