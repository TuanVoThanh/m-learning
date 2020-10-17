
import { createStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
export const styles = () => createStyles({
    divider: {
        backgroundColor: grey[300],
        height: '1px',
        width: '1032px',
        margin: '0 auto',
        marginTop: '48px',      
    },
    title: {
        textAlign: 'center',
        marginTop: '48px',
    },
    logoGroup: {
        backgroundColor: grey[400],
        height: '32px',
        display: 'flex',
        justifyContent: 'center',
    },
    logo: {
        backgroundColor: grey[500],
        height: '32px',
        margin: '0 20px',
        alignItems: 'center',
    }
})