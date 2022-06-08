import { Card, Typography } from "@mui/material";

function Product(props) {

    const update = () => {
        props.setSelected(true);
    }

  return (
    <button onClick={update}>
      <Card>
        <img
          src={props.img
          }
          alt=""
          style={{ margin: "auto", width: "100%", objectFit: "cover" }} m={2}
        />
        <Typography style={{fontFamily: "open sans", justifyContent: "center"}} variant="p">{props.name}</Typography>
        <br />
        <br />
        <Typography variant="p">
          <strong>US: ${props.price}</strong>
        </Typography>
      </Card>
    </button>
  );
}

export default Product;
