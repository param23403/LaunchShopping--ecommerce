import { Card, Typography } from "@mui/material";

function Product(props) {
  return (
    <div>
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
    </div>
  );
}

export default Product;
