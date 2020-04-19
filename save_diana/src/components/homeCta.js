import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 2 ,
      color: 'white',
      fontSize: '20px',
      display: 'flex',
      marginBottom: '50px',
      direction: 'column',
      justify: "space-around",
      alignItems: "center",
      justifyContent: "center",
      maxWidth: '50%',
      textAlign: 'center'
    },
    Paper: {
      padding: theme.spacing(10),
      textAlign: 'center',
      marginBottom: '50px',
      color: theme.palette.text.default,
      elevation: '0',
    },
}));
  

export default function homeCta() { 
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container spacing={10} style={{ marginTop: '60px', marginBottom: '-55px' }}>
                <Grid item xs={6}>
                    <a href="" style={{marginLeft: "50px", textDecoration: 'none', color: 'white'}}>Mission Statement</a>
                </Grid>
                <Grid item xs={6}>
                    <a href="" style={{marginLeft: "50px", textDecoration: 'none', color: 'white'}}>Click to Shop</a>
                </Grid>
                <Grid item xs={6} style={{ textAlign: 'center' }}>
                    <div style={{ position: 'absolute', width: '60px', height: '0px', top: '840px', borderWidth: '0px', borderColor: 'black', borderStyle:'solid', transform: 'rotate(90deg)' }} />
                </Grid>
                <Grid item xs={6} style={{ textAlign: 'center' }}>
                    <div style={{ position: 'absolute', width: '60px', height: '0px', top: '840px', borderWidth: '0px', borderColor: 'black', borderStyle:'solid', transform: 'rotate(90deg)' }} />
                </Grid>
            </Grid>
        </div>
    )
}