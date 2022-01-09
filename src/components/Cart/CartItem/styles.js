import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    paddingTop: "3rem",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "0px 100px",
  },
  white: {
    color: "white",
  },
  bottomtext: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  bottombuttons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));
