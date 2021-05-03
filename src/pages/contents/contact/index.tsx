import React from "react";
import styles from "./styles.module.scss";
import {useThemeContext} from "../../../context/ThemeProvider/theme.context";
import Grid from '@material-ui/core/Grid';
import {Divider} from "@material-ui/core";
import ContactForm from "./contact_form/contact_form";

const Contact = () => {
    const useTheme = useThemeContext();
    return (<div className={styles.content_wrapper} style={useTheme.content}>
        <h1> Get in Touch</h1>
        <Divider/>
        <div> Map here</div>
        <h2 className={styles.contact_wrapper}>Contact me</h2>
        <Grid container spacing={2}>
            <Grid item xs={3}>Address</Grid>
            <Grid item xs={3}>Email</Grid>
            <Grid item xs={3}>Phone</Grid>
            <Grid item xs={3}>Freelance</Grid>
        </Grid>

        <h2>Contact Form</h2>
        <ContactForm/>
    </div>);
};
export default Contact;
