import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { styles } from "./styles";
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';

const useStyles = makeStyles(styles);

const TopCategories = () => {
  const classes = useStyles();
  return (
    <div className="root">
      <div className={classes.title}>
        <div>Top Categories</div>
      </div>

      <div className={classes.cardGroup}>
        <div className={classes.card}>
          <div className={classes.imgCategory}><InsertPhotoIcon color="disabled" /></div>
          <div className={classes.label}>Design</div>
        </div>
        <div className={classes.card}>
          <div className={classes.imgCategory}><InsertPhotoIcon color="disabled" /></div>
          <div className={classes.label}>Design</div>
        </div>
        <div className={classes.card}>
          <div className={classes.imgCategory}><InsertPhotoIcon color="disabled" /></div>
          <div className={classes.label}>Design</div>
        </div>
        <div className={classes.card}>
          <div className={classes.imgCategory}><InsertPhotoIcon color="disabled" /></div>
          <div className={classes.label}>Design</div>
        </div>
      </div>

      <div className={classes.cardGroup}>
        <div className={classes.card}>
          <div className={classes.imgCategory}><InsertPhotoIcon color="disabled" /></div>
          <div className={classes.label}>Design</div>
        </div>
        <div className={classes.card}>
          <div className={classes.imgCategory}><InsertPhotoIcon color="disabled" /></div>
          <div className={classes.label}>Design</div>
        </div>
        <div className={classes.card}>
          <div className={classes.imgCategory}><InsertPhotoIcon color="disabled" /></div>
          <div className={classes.label}>Design</div>
        </div>
        <div className={classes.card}>
          <div className={classes.imgCategory}><InsertPhotoIcon color="disabled" /></div>
          <div className={classes.label}>Design</div>
        </div>
      </div>

    </div>
  );
};

export default TopCategories;
