import React from "react";
import { Button, Backdrop, AppBar, Box, Container } from "@material-ui/core";
import { withStyles, responsiveFontSizes } from "@material-ui/core/styles";
import ButtonAppBar from "../components/buttonAppBar";
import ItemGrid from "../components/itemGrid";
import HomeCta from "../components/homeCta";
import Footer from '../components/footer';
import MissionStatement from "../components/missionStatment";
import Globe from '../components/video'

// Only need to use this pattern if we are going to make reusable
// notice the new component, WrapperBox - if we want to reuse then it
//needs to be  in /components, otherwise, just write a single page
// style like you did in `const style =...`
//
const WrapperBox = withStyles({
  root: {
    background: "#9dd8f4",
    width: "100%",
    height: "100%",
    display: "table",
    overflowY: 'hidden',
    zIndex: "unset",
  },
})(Container);

const StyledBoxBlue = withStyles({
  root: {
    background: "#9dd8f4",
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
    overflowY: 'hidden',
    fontSize: "60px",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
})(Container);

const StyledBoxWhite = withStyles({
  root: {
    background: "#FFFFFF",
    width: "100%",
    minWidth: "100%",
    maxHeight: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflowY: 'hidden',
    marginLeft: "0px",
    color: "white",
    fontSize: "60px",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
})(Container);

const HomeOptions = withStyles({
  root: {
    background: "#9dd8f4",
    width: "100%", width: "100%",
    minWidth: "100%",
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "0px",
    color: "white",
    fontSize: "25px",
    fontFamily: "Arial, Helvetica, sans-serif",
    overflowY: 'hidden'

  },
})(Box);

const title = ["\t" + "Save", "Wearable Charity"];

const styles = {
  root: {
    flexGrow: 1,
    lineHeight: "20px",
    overflowY: 'hidden'
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
  <WrapperBox maxWidth="fixed">
    <ButtonAppBar />
    <StyledBoxBlue maxWidth="fixed">
    <Globe style={{overflowY: 'hidden'}} />
      <h2
        style={{
          whiteSpace: "pre-line",
          marginTop: "-550px",
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
    <Footer />
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
