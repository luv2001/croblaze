import React from "react";
import useStyles from "./styles";

const Product = ({ product }) => {
  const classes = useStyles();
  return (
    <div className={classes.product}>
      <div>{product.id}</div>
      <div>{product.product}</div>
      <div>{product.varient}</div>
      <div>{product.price}</div>
      <div>{product.quantity}</div>
      <div>{product.id}</div>
      <div>delete</div>
    </div>
  );
};

export default Product;
