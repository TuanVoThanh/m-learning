import { createStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const margin = "0 auto";
const width = "1292px";
const paddingLeft = '120px';
const paddingRight = '120px';
export const styles = () =>
  createStyles({
    root: {
      backgroundColor: grey[100], //clg
      height: "538px",
      marginTop: "116px",
    },
    videoWrapper: {
    //   backgroundColor: grey[300], //clg
      width,
      height: "360px",
      margin,
      display: "flex",
      justifyContent: "space-between",
    },
    /* Video */
    videoInnerWrapper: {
    //   backgroundColor: grey[500], //clg
      width: "640px",
      height: "360px",
    },
    videoGroup: {
    //   backgroundColor: grey[700], //clg
      width: "478px",
      height: "270px",
      margin,
      transform: "translateY(45px)",
      position: "relative",
    },
    video: {
      backgroundColor: grey[900], //clg
      width: "478px",
      height: "270px",
    },
    button: {
      // backgroundColor: grey[100],
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      border: "1px solid #fff",
      position: "absolute",
      top: "110px",
      left: "214px",
    },
    /* Content */
    contentWrapper: {
    //   backgroundColor: grey[500], //clg
      width: "640px",
      height: "360px",
    },
    content: {
        textAlign: 'center',
    },
    headline: {
        marginTop: '100px',
        paddingLeft,
        paddingRight,
    },
    text: {
        paddingLeft,
        paddingRight,
    },
  });
