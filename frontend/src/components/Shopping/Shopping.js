import Navbar from "../Navbar/Navbar";
import {
  Grid,
  InputBase,
  IconButton,
  Card,
  Stack,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState, useRef } from "react";
import Product from "./Product";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { display } from "@mui/system";

const stack1 = [];
const stack2 = [];
const stack3 = [];
const stack4 = [];
let object = null;

const Homepage = () => {
  const [stateStack1, setStateStack1] = useState([]);
  const [stateStack2, setStateStack2] = useState([]);
  const [stateStack3, setStateStack3] = useState([]);
  const [stateStack4, setStateStack4] = useState([]);
  const [productSelected, setProductSelected] = useState(false);
  const [keys, setKeys] = useState();
  const [liked, setLiked] = useState(false);
  const [rendering, setRendering] = useState("");
  const textFieldRefSearch = useRef(null);
  const [category, setCategory] = useState('');

  useEffect(() => {
    fetch("http://localhost:9000/shopping/productInfo?id=" + keys)
      .then((res) => res.json())
      .then((data) => {
        object = data;
        setRendering(object.name);
      });
  }, [keys]);

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

  const like = () => {
    const change = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: object.id }),
    };
    fetch("http://localhost:9000/shopping/like", change).then(
      fetch("http://localhost:9000/shopping/productInfo?id=" + keys)
        .then((res) => res.json())
        .then((datas) => {
          object.likes++;
          setLiked(true);
        })
    );
  };

  const delike = () => {
    const change = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: object.id }),
    };
    fetch("http://localhost:9000/shopping/delike", change).then(
      fetch("http://localhost:9000/shopping/productInfo?id=" + keys)
        .then((res) => res.json())
        .then((datas) => {
          object.likes--;
          setLiked(false);
        })
    );
  };

  const backToShopping = () => {
    setProductSelected(false);
  };

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

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const toCart = (priceID, price, name) => {
    if (!localStorage.getItem('priceIDs')) {
      localStorage.setItem('priceIDs', String(priceID));
    }
    else {
      let existing = localStorage.getItem('priceIDs');
      existing = existing ? existing.split(',') : [];
      existing.push(String(priceID));
      localStorage.setItem('priceIDs', existing.toString());
    }
    //now add price of item here
    if (!localStorage.getItem('price')) {
      localStorage.setItem('price', String(price));
    }
    else {
      let existing = localStorage.getItem('price');
      existing = existing ? existing.split(',') : [];
      existing.push(String(price));
      localStorage.setItem('price', existing.toString());
    }
    //add item name here
    if (!localStorage.getItem('name')) {
      localStorage.setItem('name', String(name));
    }
    else {
      let existing = localStorage.getItem('name');
      existing = existing ? existing.split(',') : [];
      existing.push(String(name));
      localStorage.setItem('name', existing.toString());
    }
    window.alert("Successfully added to cart.");
  }

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
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                value={category}
                label="Category"
                onChange={handleChange}
              >
                <MenuItem value={'men pants'}>Men's Pants</MenuItem>
                <MenuItem value={'dress'}>Women's Dress</MenuItem>
                <MenuItem value={'men shorts'}>Men's Shorts</MenuItem>
                <MenuItem value={'men shirt'}>Men's Shirts</MenuItem>
              </Select>
            </FormControl>
          </Grid>
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
                      setKeys={setKeys}
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
                      setKeys={setKeys}
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
                      setKeys={setKeys}
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
                      setKeys={setKeys}
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
        <Grid container>
          <Grid item>
            <img src={object.img}/>
          </Grid>
          <Grid item>
            <Stack>
              <Typography variant="h6">{object.name}</Typography>
              <Typography variant="h3">US: ${object.price}</Typography>
              <Typography variant="h6">Likes:{object.likes}</Typography>
              <Typography variant="h6">
                Do you like this product?
                {!liked && (
                  <IconButton
                    type="submit"
                    sx={{ p: "10px" }}
                    aria-label="like"
                    onClick={like}
                  >
                    <ThumbUpOffAltIcon />
                  </IconButton>
                )}
                {liked && (
                  <IconButton
                    type="submit"
                    sx={{ p: "10px" }}
                    aria-label="like"
                    onClick={delike}
                  >
                    <ThumbUpIcon />
                  </IconButton>
                )}
              </Typography>
              <Typography variant="p">{object.bio}</Typography>
              <Button onClick={() => toCart(object.priceID, object.name, object.price)}>Add to Cart</Button>
              <Button>Buy Now</Button>
              <Typography variant="h5">
                Shipping Cost: ${object.shippingCost}
              </Typography>
              <Typography variant="h5">
                Estimated Delivery Time: {object.shippingTime}
              </Typography>
              <Button onClick={backToShopping}>Go Back</Button>
            </Stack>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Homepage;