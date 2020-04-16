import React from "react";
import { Button, Backdrop, AppBar, Box, Container } from "@material-ui/core";
import { withStyles, responsiveFontSizes } from "@material-ui/core/styles";
import ButtonAppBar from "../components/buttonAppBar";
import ItemGrid from "../components/itemGrid";
import HomeCta from "../components/homeCta";
import MissionStatement from "../components/missionStatment";

// Only need to use this pattern if we are going to make reusable
// notice the new component, WrapperBox - if we want to reuse then it
//needs to be  in /components, otherwise, just write a single page
// style like you did in `const style =...`
//
const WrapperBox = withStyles({
  root: {
    background: "#a4d8ef",
    width: "100%",
    height: "100%",
    display: "table",
    zIndex: "unset",
  },
})(Box);

const StyledBoxBlue = withStyles({
  root: {
    background: "#a4d8ef",
    width: "100%",
    minWidth: "100%",
    height: "600px",
    display: "block",
    textAlign: "center",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "0px",
    color: "white",
    fontSize: "60px",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
})(Box);

const StyledBoxWhite = withStyles({
  root: {
    background: "#FFFFFF",
    width: "100%",
    minWidth: "100%",
    maxHeight: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "0px",
    color: "white",
    fontSize: "60px",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
})(Container);

const HomeOptions = withStyles({
  root: {
    background: "#a4d8ef",
    width: "100%",
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "0px",
    color: "white",
    fontSize: "25px",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
})(Box);

const title = ["\t" + "Save", "Wearable Charity"];

const styles = {
  root: {
    flexGrow: 1,
    lineHeight: "20px",
  },
  br: {
    lineHeight: "20px",
  },
  typography: {
    flexGrow: 1,
    textAlign: "center",
    paddingBottom: "20px",
  },
};

const App = () => (
  <WrapperBox>
    <ButtonAppBar />
    <StyledBoxBlue>
      <img
        src="/Ellipse 47.png"
        style={{
          position: "relative",
          height: "100%",
          maxHeight: "100%",
          maxWidth: "auto",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          zIndex: "1",
        }}
      />
      <h2
        style={{
          whiteSpace: "pre-line",
          marginTop: "-420px",
          zIndex: "2",
          position: "relative",
        }}
      >
        {title.join("\n")}
      </h2>
    </StyledBoxBlue>
    <HomeOptions>
      <HomeCta />
    </HomeOptions>
    <StyledBoxWhite>
      <ItemGrid />
    </StyledBoxWhite>
    <MissionStatement />
  </WrapperBox>
);

export default withStyles(styles)(App);
// the HOC (higher-order-component) pattern works, but hooks are more widely accepted as better
// you end up with this:
/*
const styles (theme => ({root:{...}})) 
// or 
const styles = {root:...}
// then
const useStyles = makeStyles(styles)
// then in your component...
const MyComponent = (props) => {
  const classes = useStyles();

  return <Thing className={classes.root} />
}

*/
