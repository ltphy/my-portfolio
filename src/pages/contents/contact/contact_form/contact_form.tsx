import React from 'react';
import useContactForm from '../../../../context/UseContactForm/useContactForm.context';
import Grid from '@material-ui/core/Grid';
import {Input, makeStyles} from "@material-ui/core";

const ContactForm = () => {
    const {register, onSubmit} = useContactForm();
    return (<div>
        <form onSubmit={onSubmit}>
            <Grid container spacing = {2}>
                <Grid item xs={6}>
                    <Input name={'name'}/>
                </Grid>
                <Grid item xs={6}>
                    <Input name={'email'}/>
                </Grid>
                <Grid>
                    <Input name={'message'}/>
                </Grid>
            </Grid>

        </form>
    </div>);
}
export default ContactForm;