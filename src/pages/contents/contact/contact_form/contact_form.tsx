import React, {useEffect, useRef, useState} from 'react';
import useContactForm from '../../../../context/UseContactForm/useContactForm.context';
import {Button, CircularProgress, makeStyles} from "@material-ui/core";
import CustomTextField from "../../../../components/custom_text_field/custom_text_field";
import {Send} from '@material-ui/icons';
import Paper from "@material-ui/core/Paper";
import {green} from '@material-ui/core/colors';
import {serviceID, templateID, userID} from '../../../../constants/default_constants';
import emailjs from 'emailjs-com';
const useStyles = makeStyles((theme) => ({

    button: {
        margin: theme.spacing(1),
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        position: 'relative'
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

        } catch (error) {
            console.log(error.text);
        }
        setLoading(false);
    };

    const {control, onSubmit, formState} = useContactForm({sendEmail: sendEmail});
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
                        disabled={loading}
                        endIcon={<Send/>}
                    >
                        Send

                    </Button>
                    {loading && <CircularProgress size={20} className={classes.buttonProgress}/>}
                </div>
            </Paper>
        </form>

    </div>);
}
export default ContactForm;