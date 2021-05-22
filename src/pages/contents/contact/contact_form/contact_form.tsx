import React, {useEffect, useRef, useState} from 'react';
import useContactForm from '../../../../context/UseContactForm/useContactForm.context';
import {Button, CircularProgress, makeStyles, Snackbar} from "@material-ui/core";
import CustomTextField from "../../../../components/custom_text_field/custom_text_field";
import {Send} from '@material-ui/icons';
import Paper from "@material-ui/core/Paper";
import {green} from '@material-ui/core/colors';
import {serviceID, templateID, userID} from '../../../../constants/default_constants';
import emailjs from 'emailjs-com';
import {CustomAlert} from "../../../../components/custom_alert/custom_alert";

const useStyles = makeStyles((theme) => ({

    buttonWrapper: {
        margin: theme.spacing(1),
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    sendButton: {
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        color: "white"
    },
    paper: {
        padding: theme.spacing(1),
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        right: '50%',
        marginTop: -12,
        marginLeft: -12
    }
}));

const ContactForm = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const timeOut = useRef<NodeJS.Timeout>();
    const [successAlert, setSuccessAlert] = useState<boolean>(false);
    const [errorAlert, setErrorAlert] = useState<boolean>(false);
    useEffect(() => {

        return () => {
            if (timeOut.current) {
                clearTimeout(timeOut.current);
            }

        };
    }, []);
    const sendEmail = async (formValues: any) => {
        console.log(formValues);
        setLoading(true);
        emailjs.init(userID);
        try {
            const value = await emailjs.send(serviceID, templateID, formValues);
            setSuccessAlert(true);

        } catch (error) {
            setErrorAlert(true);
            console.log(error.text);
        }
        setLoading(false);
    };

    const {control, onSubmit, formState} = useContactForm({sendEmail: sendEmail});
    const classes = useStyles();
    const closeAlert = ()=>{
        if(successAlert) {
            setSuccessAlert(false);
        }
        if(errorAlert) {
            setErrorAlert(false);
        }
    };

    return (<div>
        <form onSubmit={onSubmit} name={'send'}>
            <Paper elevation={4} className={classes.paper}>


                <CustomTextField control={control} name={'name'} label={'Name'} errors={formState.errors}/>

                <CustomTextField control={control} name={'email'} label={'Email'} errors={formState.errors}/>

                <CustomTextField control={control} name={'message'} label={'Message'} multiline
                                 errors={formState.errors} rows={5}/>
                <div className={classes.buttonWrapper}>
                    <Button
                        className={classes.sendButton}
                        type="submit"
                        size={'large'}
                        name='send'
                        variant="contained"
                        disabled={loading}
                        endIcon={<Send/>}
                    >
                        Send

                    </Button>
                    {loading && <CircularProgress size={20} className={classes.buttonProgress}/>}
                </div>
            </Paper>
        </form>
        <Snackbar open={successAlert} autoHideDuration={6000} onClose={closeAlert}>

        <CustomAlert severity='success' onClose={closeAlert}>Email sent successfully!</CustomAlert>
           </Snackbar>
        <Snackbar  open={errorAlert} autoHideDuration={6000} onClose={closeAlert}>
            <CustomAlert  severity='error' onClose={closeAlert}>Failed to send email!</CustomAlert>
        </Snackbar>

    </div>);
}
export default ContactForm;