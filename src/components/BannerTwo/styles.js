import { createStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const width = "1292px";
const height = "320px";
const paddingLeft = "120px";
const paddingRight = "120px";
const margin = '0 auto';

export const styles = () =>
  createStyles({
    root: {
      backgroundColor: grey[100], //clg
      height,
      marginTop: "116px",
    },
    container: {
    //   backgroundColor: grey[300], //clg
      width,
      height,
      margin: "0 auto",
      display: 'flex',
      justifyContent: 'space-between',
    },
    contentWrapper: {
    //   backgroundColor: grey[400], //clg
      width: "640px",
      height,
    },
    content: {
      textAlign: "center",
    },
    title: {
      paddingTop: "74px",
      paddingLeft,
      paddingRight,
    },
    text: {
        paddingLeft,
        paddingRight,
    },
    button: {
        paddingTop: '28px',
        paddingLeft,
        paddingRight,
    },
    imgWrapper: {
        // backgroundColor: grey[400], //clg
        width: "640px",
        height,
    },
    imgInstructor: {
        // backgroundColor: grey[500], //clg
        width: "376px",
        height,
        transform: 'scaleY(1.3)',
        margin,
    },
  });
