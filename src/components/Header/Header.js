import React from "react";
import logo from "../../assets/logo.png";
import useStyles from "./styles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import { Typography } from "@material-ui/core";

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <img className={classes.image} src={logo} alt="logo" />
      </div>
      <div>
        <Typography className={classes.text}>
          <WhatsAppIcon />
          +91 9410060815
        </Typography>
        <Typography className={classes.text}>
          <EmailIcon />
          support@croblaze.com
        </Typography>
      </div>
    </div>
  );
};

export default Header;
