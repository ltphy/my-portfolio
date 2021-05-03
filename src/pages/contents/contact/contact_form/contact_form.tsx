import React from 'react';
import useContactForm from '../../../../context/UseContactForm/useContactForm.context';
import Grid from '@material-ui/core/Grid';
import {Input, makeStyles, Button, Icon} from "@material-ui/core";
import CustomTextField from "../../../../components/custom_text_field/custom_text_field";
import {CenterFocusStrong, Send} from '@material-ui/icons';
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({

    button: {
        margin: theme.spacing(1),
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
    },
    paper: {
        padding: theme.spacing(1),
    }
}));

const ContactForm = () => {
    const {control, onSubmit, formState} = useContactForm();
    const classes = useStyles();
    return (<div>
        <form onSubmit={onSubmit} name={'send'}>
            <Paper elevation={4} className={classes.paper}>


                <CustomTextField control={control} name={'name'} label={'Name'} errors={formState.errors}/>

                <CustomTextField control={control} name={'email'} label={'Email'} errors={formState.errors}/>

                <CustomTextField control={control} name={'message'} label={'Message'} multiline
                                 errors={formState.errors} rows={5}/>
                <div className={classes.button}>
                    <Button
                        type="submit"
                        size={'large'}
                        name='send'
                        variant="contained"
                        color="primary"
                        endIcon={<Send/>}
                    >
                        Send
                    </Button>

                </div>
            </Paper>

        </form>


    </div>);
}
export default ContactForm;