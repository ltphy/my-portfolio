import React from 'react';
import useContactForm from '../../../../context/UseContactForm/useContactForm.context';
import Grid from '@material-ui/core/Grid';
import {Input, makeStyles, Button, Icon} from "@material-ui/core";
import CustomTextField from "../../../../components/custom_text_field/custom_text_field";
import {Send} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const ContactForm = () => {
    const {control, onSubmit, formState} = useContactForm();
    const classes = useStyles();
    return (<div>
        <form onSubmit={onSubmit} name={'send'}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <CustomTextField control={control} name={'name'} label={'Name'} errors={formState.errors}/>

                </Grid>
                <Grid item xs={6}>
                    <CustomTextField control={control} name={'email'} label={'Email'} errors={formState.errors}/>
                </Grid>
                <Grid>
                    <CustomTextField control={control} name={'message'} label={'Message'} errors={formState.errors}/>
                </Grid>
            </Grid>
            <Button
                type="submit"
                name='send'
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<Send/>}
            >
                Send
            </Button>
        </form>


    </div>);
}
export default ContactForm;