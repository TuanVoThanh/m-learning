import { createStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

export const styles = () =>
  createStyles({
    root: {
    //   backgroundColor: grey[50],
      height: "100px",
    },
    container: {
    //   backgroundColor: grey[100],
      height: "100px",
      display: "flex",
      justifyContent: 'space-around',
    },
    contentWrapper: {
    //   backgroundColor: grey[200],
      height: "100px",
      width: "376px",
      marginLeft: '8px',
      marginRight: '8px',
    },
    content: {
    //   backgroundColor: grey[300],
      height: "100px",
      paddingLeft: "48px",
      paddingRight: '12px',
      display: "flex",
    },
    icon: {
      backgroundColor: grey[400],
      width: "42px",
      height: "42px",
      alignSelf: "center",
      borderRadius: "50%",
      border: "1px solid #000",
    },
    iconProps: {
      width: "24px",
      height: "24px",
      margin: "9px",
    },
    text: {
      paddingTop: '28px',
      paddingBottom: '28px',
      marginLeft: "12px",
    },
  });
