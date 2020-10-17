import { createStyles } from "@material-ui/core/styles";
import { grey } from '@material-ui/core/colors';
export const styles = () => createStyles({
    title: {
        marginTop: '48px',
        textAlign: 'center',
    },
    cardGroup: {
        backgroundColor: grey[50], //clg 
        width: '1030px',
        margin: '24px auto 0',
        display: 'flex',
        justifyContent: 'space-between',
    },
    card: {
        backgroundColor: grey[100], //clg 
        height: '234px',
        width: '246px',
    },
    imgCategory: {
        backgroundColor: grey[200], //clg 
        width: '246px',
        height: '184px',
    },
    label: {
        textAlign: 'center',
        marginTop: '14px',
    },
    
});
