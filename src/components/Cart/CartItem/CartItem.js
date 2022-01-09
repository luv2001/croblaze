import React from "react";
import Container from "@mui/material/Container";
import useStyles from "./styles";
import Divider from "@mui/material/Divider";
import Product from "./Product/Product";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const CartItem = () => {
  const classes = useStyles();
  const products = [
    {
      id: 1,
      product: "banana",
      varient: "2 Kgs",
      price: "500 Rs",
      quantity: 1,
    },
    {
      id: 2,
      product: "banana",
      varient: "2 Kgs",
      price: "500 Rs",
      quantity: 1,
    },
    {
      id: 3,
      product: "banana",
      varient: "2 Kgs",
      price: "500 Rs",
      quantity: 1,
    },
    {
      id: 4,
      product: "banana",
      varient: "2 Kgs",
      price: "500 Rs",
      quantity: 1,
    },
    {
      id: 5,
      product: "banana",
      varient: "2 Kgs",
      price: "500 Rs",
      quantity: 1,
    },
    {
      id: 6,
      product: "banana",
      varient: "2 Kgs",
      price: "500 Rs",
      quantity: 1,
    },
  ];

  return (
    <Container className={classes.root}>
      <div className={classes.header}>
        <div>S.No.</div>
        <div>Products</div>
        <div>Varient</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Sub Total</div>
        <div className={classes.white}>delete</div>
      </div>
      <Divider />
      {products.map((product) => {
        return <Product product={product} />;
      })}
      <div className={classes.header}>
        <div className={classes.white}>S.No.</div>
        <div className={classes.white}>Products</div>
        <div className={classes.white}>Varient</div>
        <div className={classes.white}>Price</div>
        <div>
          <strong>Total</strong>
        </div>
        <strong>10000000 Rs</strong>
        <div className={classes.white}>delete</div>
      </div>
      <div className={classes.bottomtext}>
        <div>Free delivery on orders above ₹ 250</div>
      </div>
      <div className={classes.bottombuttons}>
        <Button variant="outlined" color="success">
          Continue Shop
        </Button>
        <Button variant="contained" color="success">
          Checkout
        </Button>
      </div>
    </Container>
  );
};

export default CartItem;
