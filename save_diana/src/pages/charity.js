import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles, responsiveFontSizes } from "@material-ui/core/styles";
import { Button, Backdrop, AppBar, Box, Container } from "@material-ui/core";
import CharityNavBar from "../components/charityNavBar";
import GridTest from "../components/itemGrid";
import UserGrid from "../components/userGrid";
import CharityGrid from "../components/charityGrid";
import Footer from '../components/footer';


const WrapperBox = withStyles({
  root: {
    background: "#a4d8ef",
    width: "100%",
    height: "100%",
    display: "table",
    zIndex: "unset",
  },
})(Container);

const StyledBoxBlue = withStyles({
  root: {
    background: "#a4d8ef",
    width: "100%",
    minWidth: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "0px",
    color: "white",
    fontSize: "60px",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
})(Container);

export default function Charity() {
  
  return (

    <WrapperBox maxWidth="fixed">
      <CharityNavBar maxWidth="fixed"/>
      <StyledBoxBlue style={{ paddingTop: "30px", paddingBottom: "50px" }} maxWidth="fixed">
        <CharityGrid />
      </StyledBoxBlue>
      <Footer />
    </WrapperBox>
 
 );

}