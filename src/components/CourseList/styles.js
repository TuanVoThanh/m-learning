import { createStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export const styles = () => createStyles({
    textGroup: {
        marginTop: '48px',
        display: 'block',
    },

    cardGroup: {
        // backgroundColor: grey[200],
        height: '284px',
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '28px',
        marginBottom: '28px',
    },
});
