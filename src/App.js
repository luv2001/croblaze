import React from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Navbar from "./components/Navabr/Navbar";
import useStyles from "./styles";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Navbar />
      <Cart />
    </div>
  );
}

export default App;
