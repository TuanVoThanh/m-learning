import { createStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export const styles = () => createStyles({
    title: {
        paddingTop: '20px',
    },
    cardGroup: {
        marginTop: '28px',
        marginBottom: '28px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    contentWrapper: {
        backgroundColor: grey[100],
        height: '232px',
        display: 'flex',
    },
    content: {
        // backgroundColor: grey[200],
        width: '634px',
        marginLeft: '132px',
        marginRight: '132px',
        display: 'block',
        paddingTop: '36px',
    },
    imgExpoloring: {
        height: '180px',
        width: '180px',
        alignSelf: 'center',
    },
    button: {
        marginTop: '16px',
    }
});
