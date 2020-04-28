import React from "react";
import {
  Button,
  Backdrop,
  AppBar,
  Box,
  Container,
  Typography,
} from "@material-ui/core";
import { withStyles, responsiveFontSizes } from "@material-ui/core/styles";
import ButtonAppBar from "../components/buttonAppBar";
import ItemGrid from "../components/itemGrid";
import HomeCta from "../components/homeCta";
import Footer from "../components/footer";
import MissionStatement from "../components/missionStatment";
import Globe from "../components/video";
import Grid from "@material-ui/core/Grid";
import HomeGlobe from "../components/homeGlobe";
import { sizing, width } from '@material-ui/system';
// Only need to use this pattern if we are going to make reusable
// notice the new component, WrapperBox - if we want to reuse then it
//needs to be  in /components, otherwise, just write a single page
// style like you did in `const style =...`
//
const StyledBoxWhite = withStyles({
  root: {
    background: "#FFFFFF",
    width: "100%",
    minWidth: "100%",
    width: '100%',
    maxHeight: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "60px",
  },
})(Container);


const styles = {
  root: {
    flexGrow: 1,
    lineHeight: "20px",
    overflow: 'hidden',
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
  <div>
    <Container width={1} maxWidth={1} style={{ background: "#A4D8EF", overflow: 'hidden' }}>
      <Grid container>
        <Grid item xs={12}>
          <ButtonAppBar />
        </Grid>
        <Grid item xs={12}>
          <HomeGlobe/>
          <HomeCta />
        </Grid>
        <Grid item xs={12}>
          <StyledBoxWhite>
            <ItemGrid />
          </StyledBoxWhite>
        </Grid>
        <Grid item xs={12}>
          <MissionStatement />
          <Footer />
        </Grid>
      </Grid>
    </Container>
  </div>
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
