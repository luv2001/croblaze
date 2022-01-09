import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    margin: "0px 100px",
    paddingTop: "1rem",
    padding: "0px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: "3%",
  },
  image: {
    width: "13rem",
  },
  text: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
}));
