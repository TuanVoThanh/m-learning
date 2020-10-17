import { createStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export const styles = () => createStyles({
    root: {
        backgroundColor: grey[100], //clg
        height: '260px',
        marginTop: '48px',
    },
    container: {
        // backgroundColor: grey[200], //clg
        height: '260px',
        width: '1440px',
        margin: '0 auto',
    },
    columnGroup: {
        // backgroundColor: grey[300], //clg
        height: '260px',
        width: '1292px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
    },
    column: {
        // backgroundColor: grey[400], //clg
        height: '260px',
        width: '400px',
    },
    rowGroup: {
        // backgroundColor: grey[500], //clg
        height: '240px',
        width: '400px',
        marginTop: '10px',
    },
    row: {
        // backgroundColor: grey[600], //clg
        height: '80px',
        width: '400px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    /* Column Middle */
    textGroup: {
        textAlign: 'center',
        paddingTop: '42px',
    },
    button: {
        paddingTop: '28px',
    },

})