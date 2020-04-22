import React from "react";
import { Button, Backdrop, AppBar, Box, Container } from "@material-ui/core";
import { withStyles, responsiveFontSizes } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Globe from './video'


const StyledBoxBlueBottom = withStyles({
  root: {
    background: "#9dd8f4",
    width: "100%",
    minWidth: "100%",
    height: "800px",
    display: "block",
    textAlign: "center",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "0px",
    color: "white",
    fontSize: "60px",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontWeight: 'bold'
  },
})(Container);

export default function MissionStatement() {
  return (
    <StyledBoxBlueBottom
      id="statement"
      style={{ paddingBottom: "6em", paddingTop: "3em" }}
    >
      <Container
        style={{
          display: "inline-block",
          paddingTop: "-1500px",
          maxWidth: "75%",
          zIndex: "2",
          position: "relative",
          textAlign: "center",
          lineHeight: "30px",
          whiteSpace: "pre-line",
        }}
      >
        <Typography variant="h2" component="h2" style={{ fontWeight: 'bold', paddingBottom: '60px' }}>
          MISSION
        </Typography>
        <br />
        <Typography variant="h5" component="h2">
          WHAT IF WE COULD USE THE FORGOTTEN MOMENTS OF OUR DAY TO HELP SAVE OUR
          WORLD?
        </Typography>
        <br />
        <Typography variant="h5" component="p">
          {" "}
          IF THE SECONDS WE SPENT WAITING AND SCROLLING, WE COULD USE TO SAVE
          LIVES.
        </Typography>
        <br />
        <Typography variant="h5" component="p">
          WHAT IF WE COULD DO THIS BY JUST GETTING DRESSED.{" "}
        </Typography>
        <br />
        <Typography variant="h5" component="p">
          SAVE ASKS THAT YOU ACKNOWLEDGE THE UNSETTLING TRUTH THAT OUR PLANET
          NEEDS HELP TO TAKE THE FIRST STEP. FOR IF SOMETHING IS TO BE SAVED, IT
          MUST FIRST BE SEEN.
        </Typography>
      </Container>
    </StyledBoxBlueBottom>
  );
}
