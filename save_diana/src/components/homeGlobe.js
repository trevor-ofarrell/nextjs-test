import React from "react";
import { Button, Backdrop, AppBar, Box, Container, Typography } from "@material-ui/core";
import { withStyles, responsiveFontSizes } from "@material-ui/core/styles";
import Globe from '../components/video'
import HomeCta from "../components/homeCta";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";



const StyledBoxBlue = withStyles({
    root: {
      background: "#A4D8EF",
      width: "100%",
      minWidth: "100%",
      height: "650px",
      display: "block",
      textAlign: "center",
      position: "relative",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "0px",
      color: "white",
      overflow: 'hidden',
      fontSize: "60px",
      fontFamily: "Archivo Black, sans-serif",
    },
})(Container);

const HomeOptions = withStyles({
root: {
    background: "#A4D8EF",
    width: "100%",
    minWidth: "100%",
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "0px",
    color: "white",
    fontSize: "25px",
    fontFamily: "Archivo Black, sans-serif",
    overflow: 'hidden'

    },
})(Box);

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 2 ,
        fontFamily: 'Archivo Black, sans-serif',
    },
}));

export default function homeGlobe() {
    const classes = useStyles()

    return(
        <Container className={classes.root} style={{overflow: 'hidden', marginTop: '-20px'}}>
            <StyledBoxBlue>
                <Grid container>
                    <Grid item xs={12}>
                    <Globe style={{overflow: 'hidden'}} />
                    <Typography id="hometitle" variant="h1" component="h1"
                            style={{
                                whiteSpace: "pre-line",
                                marginTop: "-475px",
                                zIndex: "2",
                                position: "relative",
                        
                            }}
                        >
                            WAVE
                        </Typography>
                        <Typography id="hometitle2" variant="h1" component="h1"
                            style={{
                                position: "relative",
                            }}
                        >
                            WEARABLE CHANGE
                        </Typography>                       
                    </Grid>
                </Grid>
            </StyledBoxBlue>
        </Container>
    )

}