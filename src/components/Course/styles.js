import { createStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export const styles = () => createStyles({
    card: {
        backgroundColor: grey[50],
        height: '284px',
        width: '246px',
        borderRadius: '4px',
    },
    imgCourse: {
        width: '246px',
    },
    content: {
        paddingLeft: '12px',
        paddingRight: '12px',
    },
    rating: {
        display: 'flex',
    },
    price: {
        display: 'flex',
    },
    chip: {
        backgroundColor: 'orange',
        height: '24px',
        width: '80px',
        borderRadius: '4px',
        padding: '2px',
    },
    cardBottom: {
        display: 'flex',
        justifyContent: 'space-between',
    }
});
