import { createStyles } from "@material-ui/core/styles";
export const styles = ({ typography, spacing }) =>
  createStyles({
    alertText: {
      ...typography.body2,
      color: "white",
      letterSpacing: spacing(0.15),
      textAlign: 'center',
    },
    alertIconClose: {
      marginRight: "16px",
      color: 'white'
    },
  });
