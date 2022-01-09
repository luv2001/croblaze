import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  image: {
    width: "80px",
    height: "80px",
  },

  divider: {
    marginTop: "2rem",
  },

  cart_heading: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "200px",
    paddingTop: "2rem",
    fontSize: "1.75rem",
    fontFamily: "Roboto",
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D9D8D8",
  },
}));
