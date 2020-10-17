import React from "react";
import { styles } from "./styles";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function TransitionAlert() {
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();
  const { alertIconClose, alertText } = classes;
  return (
    <Collapse in={open}>
      <Alert
        action={
          <IconButton
            className={alertIconClose}
            size="small"
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon />
          </IconButton>
        }
      >
        <Typography className={alertText}>
          New student deal | Sign up now to get courses for as low as $12.99
          each. New users only!
        </Typography>
      </Alert>
    </Collapse>
  );
}
