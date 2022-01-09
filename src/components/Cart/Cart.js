import Divider from "@mui/material/Divider";
import React from "react";
import CartItem from "./CartItem/CartItem";
import cart from "../../assets/cart.png";
import useStyles from "./styles";

const Cart = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.cart_heading}>
        <div>MY SHOPPING CART</div>
        <div>
          <img src={cart} alt="cart_image" className={classes.image} />
        </div>
      </div>
      <div className={classes.divider}>
        <Divider variant="middle" />
      </div>

      <CartItem />
      <div className={classes.footer}>
        <div>Croblaze Agritech Pvt Ltd - All rights reserved</div>
      </div>
    </div>
  );
};

export default Cart;
