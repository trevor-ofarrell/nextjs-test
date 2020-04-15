import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonAppBar from '../components/buttonAppBar';
import { withStyles, responsiveFontSizes } from '@material-ui/core/styles';
import { Button, Backdrop, AppBar, Box, Container } from '@material-ui/core';
import SimpleCard from '../components/userInfo'
import Feed from '../components/feed'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Followers from '../components/followers'
import UserInfo from '../components/userInfo';
import Post from '../components/posts'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: '80%'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={10} style={{ maxHeight: '100%', height: '100%' }}>
         <Paper  elevation={0}>
         <Grid container spacing={0} >
          <Grid item xs={6} elevation={0} style={{ marginLeft: '20px', marginTop: '15px' }}>
            <UserInfo />
          </Grid>
         </Grid>
        </Paper>
        </Grid>
        <Grid item xs={2} style={{ maxHeight: '100%', height: '100%' }}>
          <Card elevation={0} style={{ textAlign: 'center' }}>
            <MonetizationOnIcon fontSize="large" style={{ marginTop: '50px', marginBottom: '20px' }}/>
            <Typography variant="h3" component="h2" style={{ paddingBottom: '20px', fontWeight: 'bold' }}>
                500$
            </Typography>
            <Typography variant="h6" comnponent='h3' style={{ paddingBottom: '26px'}}>
              Money Raised
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Post />
        </Grid>
      </Grid>
    </div>
  );
}