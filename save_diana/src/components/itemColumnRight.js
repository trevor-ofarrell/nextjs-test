import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button, Backdrop, AppBar, Box, Container, Typography } from '@material-ui/core';
import { withStyles, responsiveFontSizes } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2 ,
    color: 'black',
    fontSize: '20px',
    marginBottom: '50px',
    direction: 'column',
    justify: "space-around",
    alignItems: "center"
  },
  Paper: {
    padding: theme.spacing(10),
    textAlign: 'center',
    marginBottom: '50px',
    color: theme.palette.text.default,
    elevation: '0',
  },
}));

export default function ItemColumnRight() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid container spacing={6}>
          <Grid item sm={12}>
            <Paper elevation={0} style={{fontSize: '35px', fontWeight: 'bold'}}>
              <Typography variant="h4" component="h2" style={{fontWeight: 'bold'}}>Tapable shirt benefitting Bay Area Homeless Crisis</Typography>
            </Paper>
          </Grid>
          <Grid item sm={12}>
            <Paper elevation={0} style={{marginBottom: '20px'}}>
              <Typography variant="h5" component="p" style={{ lineHeight: '35px' }}>
              100% cotton, machine washable T-shirt, embedded NFC for tapable donations. 
              </Typography>
            </Paper>
          </Grid>
          <Grid item sm={12}>
            <Paper elevation={0} style={{fontSize: '18px'}}>
              <Typography variant="h6" component="p" style={{ lineHeight: '35px' }}>
              The Australlian bush fires have been estimated to kill 500 million animals at least 24 humans,
               and burnes 15 million acres to date. Thousands of people have been displaced and permanently lost their homes.
              </Typography>
            </Paper>
          </Grid>
          <Grid item sm={12}>
            <Button style={{ borderWidth: 2, borderColor: 'black', borderRadius: 35, borderStyle:'solid', width: '60%', height: '150%' }}>Select Size</Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}