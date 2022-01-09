import * as React from "react";
import useStyles from "./styles";
import "./dropdown.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const classes = useStyles();
  const name = "Namaste Madhusudan !";
  return (
    <div className={classes.root}>
      <div className={classes.category}>
        <DropdownButton id="dropdown-basic-button" title="Category">
          <Dropdown.Item href="#/action-1">
            <strong>Fruits</strong>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">
            <strong>Vegetables</strong>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3">
            <strong>Exotics</strong>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3">
            <strong>Combo Products</strong>
          </Dropdown.Item>
        </DropdownButton>
      </div>

      <div className={classes.sign}>
        <div>Log in</div>
        <div>Sign Up</div>
        <div>
          <DropdownButton
            id="dropdown-basic-button"
            title="Namaste Madhusudan !"
          >
            <Dropdown.Item href="#/action-1">
              <strong>My Profile</strong>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              <strong>My Orders</strong>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">Log Out</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
