import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Button, Backdrop, AppBar, Box, Container} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 2 ,
      color: 'white',
      fontSize: '20px',
      display: 'flex',
      marginBottom: '50px',
      direction: 'column',
      justify: "space-around",
      maxWidth: '70%',
      textAlign: 'center',
      paddingRight: '80px',
      zIndex: '6',
    },
}));
  

export default function homeCta() { 
    const classes = useStyles()

    return (
        <Container className={classes.root} >
            <Grid container spacing={0} style={{ marginTop: '20px', marginBottom: '55px' }}>
                <Grid item xs={6} style={{paddingLeft: "50px"}}>
                    <a href="#statement" style={{marginLeft: "60px", marginBottom: '10px' , textDecoration: 'none', color: 'white' }}>
                        <Typography variant="h6" component="h5">
                            MISSION STATEMENT
                        </Typography >
                    </a>
                </Grid>
                <Grid item xs={6} style={{paddingLeft: "50px"}}>
                    <a href="#shop" style={{marginLeft: "90px", textDecoration: 'none', color: 'white'}}>
                        <Typography variant="h6" component="h5">
                            CLICK TO SHOP
                        </Typography >
                    </a>
                </Grid>
                <Grid item xs={3}>
                    <div/>
                </Grid>
                <Grid item xs={3} style={{ textAlign: 'center', paddingTop: '30px', marginLeft: '-40px'}}>
                    <div style={{ position: 'absolute', width: '140px', height: '0px', top: '880px', borderWidth: '1px', borderColor: 'white', borderStyle:'solid', transform: 'rotate(90deg)' }} />
                </Grid>
                <Grid item xs={3}>
                    <div/>
                </Grid>
                <Grid item xs={3} style={{ textAlign: 'center', paddingTop: '30px' }}>
                    <div style={{ position: 'absolute', width: '140px', height: '0px', top: '880px', borderWidth: '1px', borderColor: 'white', borderStyle:'solid', transform: 'rotate(90deg)' }} />
                </Grid>
            </Grid>
        </Container>
    )
}