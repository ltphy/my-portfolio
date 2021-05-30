import React from "react";
import styles from "./styles.module.scss";
import {useThemeContext} from "../../../context/ThemeProvider/theme.context";
import Grid from '@material-ui/core/Grid';
import {Divider, Paper} from "@material-ui/core";
import ContactForm from "./contact_form/contact_form";
import ContactLinks from "./contact_links";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {withRouter} from "react-router";
import {PhoneAndroid, WorkOutline} from "@material-ui/icons";

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
        fontWeight: 'bold'
    },
    titleWrapper: {
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

const Contact = () => {

    const theme = useThemeContext();
    const classes = useStyles();
    const changeDate = () => {

    };
    return (<div className={classes.contentWrapper}>
        <div className={classes.titleWrapper}>
            <div>
                <PhoneAndroid fontSize="large"/>
            </div>
            <h1 className={classes.title}> Get in Touch</h1>
        </div>

        <h3 className={classes.title}>Contact me</h3>
        <Grid container spacing={4}>
            <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <b>
                        Email
                    </b>

                    <div>
                        phylieng97@gmail.com
                    </div>
                </Paper>

            </Grid>

            <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <b>
                        Phone
                    </b>

                    <div>
                        Not available
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <b> Freelance
                    </b>
                    <div>
                        Not available
                    </div>
                </Paper>
            </Grid>
        </Grid>
        <div className={classes.contactForm}>
            <h3 className={classes.title}>Send me message</h3>
            <ContactForm/>
        </div>


        <ContactLinks/>
        <div>

        </div>
    </div>);
};
export default withRouter(Contact);
