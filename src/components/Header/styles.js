import { createStyles } from "@material-ui/core/styles";
import { grey } from '@material-ui/core/colors';

export const styles = ({palette, typography, spacing}) =>
  createStyles({
    boxContainer: {
      height: '72px',
      backgroundColor: '#fff',
      alignItems: 'center',
      boxShadow: 3,
    },
    boxWrapper: {
      padding: "12px 36px",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    // logo
    logoInfo: {
      width: "140px",
      height: "42px",
      cursor: 'pointer',
    },
    // search Categories
    btnCategories: {
      alignItems: 'center',
      fontWeight: typography.fontWeightRegular,
      color: palette.grey[700],
    },
    // search
    search: {
      display: 'flex',
      border: "1px solid grey",
      borderRadius: "50px",
      paddingLeft: "20px",
      justifyContent: 'space-between',
    },
    inputRoot: {
      color: grey,
      height: "48px",
      letterSpacing: spacing(0.2),
    },
    inputInput: {
      ...typography.body2,
      letterSpacing: spacing(0.2),
    },
    searchIcon: {
      alignSelf: 'center',
      paddingLeft: "12px",
      paddingRight: "12px",
      color: palette.primary.main,
      cursor: 'pointer',
    },
    // buttons
    btnSignUp: {
      background: "linear-gradient(45deg, #FF512F 30%, #F50057 90%)",
      color: "#fff",
    }
  });