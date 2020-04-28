import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Link from 'next/link';
import { Box, Container, Typography } from "@material-ui/core";


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  IconButton: {
    marginLeft: -1,
    marginRight: 20,
  },
};

const useStyles = makeStyles(theme => ({
  customHoverFocus: {
    color: 'white',
    "&:hover, &.Mui-focusVisible": { backgroundColor: "white" }
  }
}));


function ButtonAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const menuId = 'primary-search-account-menu';

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      id={menuId}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      onMouseLeave={handleMenuClose}
      
    >
      <MenuItem afterClick={handleMenuClose}>
        <Link href="#shop" >
            <a  style={{textDecoration: 'none', color: 'black'}}>
              <Typography variant="h6" component="h6" style={{width: '170px'}}>Shop</Typography>
            </a>
        </Link>
      </MenuItem>
      <MenuItem>
      <Link href="#statement">
            <a style={{textDecoration: 'none', color: 'black'}}>
              <Typography variant="h6" component="h6">Mission Statement</Typography>
            </a>
        </Link>
      </MenuItem>
    </Menu>
  );

  return (
      <div className={classes.root}>
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            <IconButton className={classes.customHoverFocus} 
              edge="end"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              style={{ marginLeft: 'auto' }}>
              <MenuIcon fontSize="large"></MenuIcon>  
            </IconButton>
          </Toolbar>
        </AppBar>
        {renderMenu}
      </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);