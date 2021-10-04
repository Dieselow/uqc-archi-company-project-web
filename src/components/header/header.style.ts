import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(thme =>
({
    box: {
        padding : 5,
        display: 'flex',
        flexDirection: 'row',
        margin: 0,
        backgroundColor: '#7289da',
    },
    link: {
        backgroundColor : 'white',
        margin : 5,
        color: 'black',
        padding: 5,
        fontFamily: 'Monaco',
        borderRadius:10,
    }
})
);

