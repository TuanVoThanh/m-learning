import React from "react";
import { styles } from "./styles";
// @material-ui/core
import {
  Box,
  Button,
  CardMedia,
  Grid,
  InputBase,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import logo from "../../assets/img/m-learning_logo.svg";

const useStyles = makeStyles(styles);

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.boxContainer} boxShadow={3}>
      <Box className={classes.boxWrapper}>
        {/* Logo */}
        <CardMedia className={classes.logoInfo} image={logo} href="#" />
        {/* Categories */}
        <Button
          className={classes.btnCategories}
          startIcon={<FormatListBulletedIcon />}
        >
          Categories
        </Button>
        {/* Search */}
        <Grid item xs={12} sm={6} xl={8} className={classes.search}>
          <InputBase
            placeholder="Search for anything"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
        </Grid>
        {/* Shopping Cart */}
        <IconButton className={classes.shoppingCartIcon}>
          <ShoppingCartIcon />
        </IconButton>
        {/* Buttons */}
        <Button variant="outlined" color="primary">
          Log In
        </Button>
        <Button variant="contained" className={classes.btnSignUp}>
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
