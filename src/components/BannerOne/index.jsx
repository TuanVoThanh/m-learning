import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { styles } from "./styles";
import {
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles(styles);

const BannerOne = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.columnGroup}>
          <div className={classes.column}>
            <div className={classes.rowGroup}>
              <div className={classes.row}>
                <div className="icon">Icon</div>
                <div className="icon"></div>
                <div className="icon">Icon</div>
                <div className="icon"></div>
              </div>
              <div className={classes.row}>
                <div className="icon"></div>
                <div className="icon">Icon</div>
                <div className="icon"></div>
                <div className="icon">Icon</div>
              </div>
              <div className={classes.row}>
                <div className="icon">Icon</div>
                <div className="icon"></div>
                <div className="icon">Icon</div>
                <div className="icon"></div>
              </div>
            </div>
          </div>
          <div className={classes.column}>
            <div className={classes.textGroup}>
              <Typography>Get personal learning recommendations</Typography>
              <Typography>Answer a few questions for your top picks</Typography>
              <div className={classes.button}>Get Started</div>
            </div>
          </div>
          <div className={classes.column}>
            <div className={classes.rowGroup}>
              <div className={classes.row}>
                <div className="icon"></div>
                <div className="icon">Icon</div>
                <div className="icon"></div>
                <div className="icon">Icon</div>
              </div>
              <div className={classes.row}>
                <div className="icon">Icon</div>
                <div className="icon"></div>
                <div className="icon">Icon</div>
                <div className="icon"></div>
              </div>
              <div className={classes.row}>
                <div className="icon"></div>
                <div className="icon">Icon</div>
                <div className="icon"></div>
                <div className="icon">Icon</div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerOne;
