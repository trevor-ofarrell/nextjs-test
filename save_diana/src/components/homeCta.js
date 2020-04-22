import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import { Button, Backdrop, AppBar, Box, Container } from "@material-ui/core";
import dynamic from 'next/dynamic';
import { ScrollTo, ScrollArea } from "react-scroll-to";
import MissionStatement from './missionStatment'

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
      textAlign: 'center',
      paddingRight: '80px'
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
        <Container className={classes.root}>
            <Grid container spacing={0} style={{ marginTop: '60px', marginBottom: '-55px' }}>
                <Grid item xs={6}>
                    <a href="#mishstate" style={{marginLeft: "60px", marginBottom: '10px' , textDecoration: 'none', color: 'white'}}>MISSION STATMENT</a>
                </Grid>
                <Grid item xs={6}>
                    <a href="#shop" style={{marginLeft: "60px", textDecoration: 'none', color: 'white'}}>CLICK TO SHOP</a>
                </Grid>
                <Grid item xs={3}>
                    <div/>
                </Grid>
                <Grid item xs={3} style={{ textAlign: 'center', paddingTop: '30px'}}>
                    <div style={{ position: 'absolute', width: '60px', height: '0px', top: '840px', borderWidth: '1px', borderColor: 'white', borderStyle:'solid', transform: 'rotate(90deg)' }} />
                </Grid>
                <Grid item xs={3}>
                    <div/>
                </Grid>
                <Grid item xs={3} style={{ textAlign: 'center', paddingTop: '30px' }}>
                    <div style={{ position: 'absolute', width: '60px', height: '0px', top: '840px', borderWidth: '1px', borderColor: 'whitea', borderStyle:'solid', transform: 'rotate(90deg)' }} />
                </Grid>
            </Grid>
        </Container>
    )
}