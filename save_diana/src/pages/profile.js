import React from "react";

import {
  //   Button,
  //   Backdrop,
  //   AppBar,
  Box,
  Container,
  //   Typography,
} from "@material-ui/core";
import { withStyles, responsiveFontSizes } from "@material-ui/core/styles";

import ProfileNavBar from "../components/profileNavBar";
// import GridTest from "../components/itemGrid";
import UserGrid from "../components/userGrid";
import Footer from '../components/footer';


const WrapperBox = withStyles({
  root: {
    background: "#a4d8ef",
    width: "100%",
    maxHeight: "100%",
    minHeight: "100%",
    display: "table",
    zIndex: "unset",
  },
})(Container);

const StyledBoxBlue = withStyles({
  root: {
    background: "#a4d8ef",
    width: "100%",
    minWidth: "100%",
    maxHeight: "100%",
    minHeight: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "0px",
    color: "white",
    fontSize: "60px",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
})(Container);

export default function Profile() {
  return (
    <WrapperBox maxWidth="fixed">
      <ProfileNavBar />
      <StyledBoxBlue style={{ paddingTop: "30px", paddingBottom: "50px" }}>
        <UserGrid />
      </StyledBoxBlue>
      <Footer />
    </WrapperBox>
  );
}
