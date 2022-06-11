import Navbar from "../Navbar/Navbar";
import { Grid,InputBase,IconButton,Card,Stack,Typography,Button,FormControl,InputLabel,Select,MenuItem,speedDialIconClasses} from "@mui/material";
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
const categorizedStack1 = [];
const categorizedStack2 = [];
const categorizedStack3 = [];
const categorizedStack4 = [];
let object = null;
let categorized = false;

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
    fetch("/shopping/productInfo?id=" + keys)
      .then((res) => res.json())
      .then((data) => {
        object = data;
        setRendering(object.name);
      });
  }, [keys]);

  useEffect(() => {
    fetch("/shopping/products")
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
    fetch("/shopping/like", change).then(
      fetch("/shopping/productInfo?id=" + keys)
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
    fetch("/shopping/delike", change).then(
      fetch("s/shopping/productInfo?id=" + keys)
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
    if (categorized) {
      for (let i = 0; i < categorizedStack1.length; i++) {
        if (categorizedStack1[i].name.includes(textFieldRefSearch.current.value)) {
          searchedFor.push(categorizedStack1[i]);
        }
      }
      for (let i = 0; i < categorizedStack2.length; i++) {
        if (categorizedStack2[i].name.includes(textFieldRefSearch.current.value)) {
          searchedFor.push(categorizedStack2[i]);
        }
      }
      for (let i = 0; i < categorizedStack3.length; i++) {
        if (categorizedStack3[i].name.includes(textFieldRefSearch.current.value)) {
          searchedFor.push(categorizedStack3[i]);
        }
      }
      for (let i = 0; i < categorizedStack4.length; i++) {
        if (categorizedStack4[i].name.includes(textFieldRefSearch.current.value)) {
          searchedFor.push(categorizedStack4[i]);
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
      return;
    }
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
    
    if(event.target.value === "all") {
        setStateStack1(stack1);
        setStateStack2(stack2);
        setStateStack3(stack3);
        setStateStack4(stack4);
        categorized = false;
        textFieldRefSearch.current.value = "";
        setCategory(event.target.value);
        return;
    }

    const catFor = [];
    for (let i = 0; i < stack1.length; i++) {
      if (stack1[i].category === (event.target.value)) {
        catFor.push(stack1[i]);
      }
    }
    for (let i = 0; i < stack2.length; i++) {
      if (stack2[i].category === (event.target.value)) {
        catFor.push(stack2[i]);
      }
    }
    for (let i = 0; i < stack3.length; i++) {
      if (stack3[i].category === (event.target.value)) {
        catFor.push(stack3[i]);
      }
    }
    for (let i = 0; i < stack4.length; i++) {
      if (stack4[i].category === (event.target.value)) {
        catFor.push(stack4[i]);
      }
    }
    let length = catFor.length;
    const stack4length = Math.floor(length / 4);
    length = length - stack4length;
    const stack3length = Math.floor(length / 3);
    length = length - stack3length;
    const stack2length = Math.floor(length / 2);
    length = length - stack2length;
    const stack1length = Math.floor(length / 1);
    length = length - stack1length;
    categorizedStack1.splice(0, categorizedStack1.length);
    categorizedStack2.splice(0, categorizedStack2.length);
    categorizedStack3.splice(0, categorizedStack3.length);
    categorizedStack4.splice(0, categorizedStack4.length);
    for (let i = 0; i < stack1length; i++) {
      categorizedStack1.push(catFor[i]);
    }
    for (let i = stack1length; i < stack2length + stack1length; i++) {
      categorizedStack2.push(catFor[i]);
    }
    for (
      let i = stack2length + stack1length;
      i < stack3length + stack2length + stack1length;
      i++
    ) {
      categorizedStack3.push(catFor[i]);
    }
    for (
      let i = stack3length + stack2length + stack1length;
      i < stack4length + stack3length + stack2length + stack1length;
      i++
    ) {
      categorizedStack4.push(catFor[i]);
    }
    categorized = true;
    textFieldRefSearch.current.value = "";
    setStateStack1(categorizedStack1);
    setStateStack2(categorizedStack2);
    setStateStack3(categorizedStack3);
    setStateStack4(categorizedStack4);
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
            <Card sx={{ width: "15%", marginLeft: "42.5%", backgroundcolor: "transparent" }}>
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
            <FormControl style={{ marginLeft: "10%",width: "80%", marginTop: "2rem"}}>
              <InputLabel>Category</InputLabel>
              <Select
                value={category}
                label="Category"
                onChange={handleChange}
              >
                <MenuItem value={'all'}>All Departments</MenuItem>
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
        	        <>	
                  <Grid container spacing={3}>	
                  <Grid item sx={6}>
                  <Card style={{backgroundColor:"white",maxHeight:"80vh",width:"50vh", marginLeft:"100px", marginTop:"25px" }}>	
                    <img src={object.img} style={{height:"700px",width:"400px"}}/>	
                  </Card>	
                  </Grid>
                  <Card style={{backgroundColor:"white",height:"400px",width:"500px", textalign:"right", marginTop:"100px", marginbottom:"200px", marginLeft:"300px", paddingLeft:"20px", paddingTop:"20px", paddingRight:"20px"}}>	
                    <Stack style={{backgroundcolor:"transparent"}}>	
                      <Typography style={{textAlign:"center", fontSize:"xx-large", fontstyle:"Times New Roman"}} variant="h1">{object.name}</Typography>	
                      <br></br>	
                      <Typography  style={{textAlign:"center"}}variant="p">{object.bio}</Typography>	
                      <br>	
                      </br>	
                      <Typography  style={{textAlign:"center", fontSize:"x-large"}} variant="h3">US: ${object.price}</Typography>	
                        <br></br>	
                      <Typography  style={{textAlign:"center"}} variant="h6">Likes:{object.likes}</Typography>	
                      <Typography  style={{textAlign:"center"}} variant="h6">
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
              <Typography style={{textAlign:"center"}} variant="h5">
                Shipping Cost: ${object.shippingCost}
              </Typography>
              <Typography style={{textAlign:"center"}} variant="h5">
                Estimated Delivery Time: {object.shippingTime}
              </Typography>
              <Button variant="contained" onClick={() => toCart(object.priceID, object.name, object.price)}>Add to Cart</Button>
              <Button onClick={backToShopping}>Go Back</Button>
            </Stack>
            </Card>
          </Grid>
        </>
      )}
    </>
  );
};

export default Homepage;