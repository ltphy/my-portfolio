import React from "react";
import styles from "./styles.module.scss";
import {useThemeContext} from "../../../context/ThemeProvider/theme.context";
import Grid from '@material-ui/core/Grid';
import {Divider, Paper} from "@material-ui/core";
import ContactForm from "./contact_form/contact_form";
import ContactLinks from "./contact_links";
import makeStyles from "@material-ui/core/styles/makeStyles";

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
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        color: "white"
    },
    title: {
        fontWeight: 'bold'
    }
}));

const Contact = () => {

    const theme = useThemeContext();
    const classes = useStyles();
    return (<div className={classes.contentWrapper}>
        <h1 className={classes.title}> Get in Touch</h1>
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
    </div>);
};
export default Contact;
