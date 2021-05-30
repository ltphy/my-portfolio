import makeStyles from "@material-ui/core/styles/makeStyles";
import React from 'react';
import {WorkOutline} from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({

    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        '& b': {
            color: theme.palette.text.primary,
        }
    },
    contactForm: {
        marginTop: '2rem',
    },
    contentWrapper: {
        padding: '80px',
    },
    title: {
        textAlign: 'center',
        '& > *': {
            fontWeight: 'bold',
            textTransform: 'uppercase',

            '&:first-child': {
                fontSize: '3rem',
            },
            '&:not(:first-child)': {
                marginBottom: '12px',
                padding: '5px 8px',
            }
        }
    },


}));
const Portfolio = () => {
    const classes = useStyles();
    return (<div className={classes.contentWrapper}>
        <div className={classes.title}>
            <div>
                <WorkOutline fontSize="large"/>
            </div>
            <h1>Portfolio</h1>
        </div>
        <div>

        </div>

    </div>);
};
export default Portfolio;