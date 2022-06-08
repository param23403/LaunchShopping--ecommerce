import { Card, Typography } from "@mui/material";

function Product(props) {
  return (
    <div>
      <Card>
        <img
          src={props.img
          }
          alt=""
          style={{ margin: "auto", width: "100%", objectFit: "cover" }}
        />
        <Typography variant="p">{props.name}</Typography>
        <br />
        <Typography variant="p">
          <strong>US${props.price}</strong>
        </Typography>
      </Card>
    </div>
  );
}

export default Product;
