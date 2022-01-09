import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    margin: "0px 100px",
    padding: "0px",
    marginTop: "1rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    textDecoration: "none",
    listStyle: "none",
    border: "1px solid #DCDDDD",
    alignItems: "center",
  },
  image: {
    width: "13rem",
  },
  category: {
    border: "1px solid #DCDDDD",
    height: "100%",
  },

  text: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
  sign: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    listStyle: "none",
    justifyContent: "space-between",
    width: "400px",
  },
}));
