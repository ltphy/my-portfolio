import {ReactElement, useCallback, useMemo} from "react";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import emailjs from 'emailjs-com';
import {serviceID, templateID, userID} from "../../constants/default_constants";

interface ContactInterface {
    name: string;
    email: string;
    message: string;
}
interface useContactFormProps {
    sendEmail: (formValues: any) => void;
}
const useContactForm = ({sendEmail}: useContactFormProps) => {
    const validationSchema = useMemo(() => {
        return yup.object({
            name: yup.string().required('Name is required').default(''),
            email: yup.string().email().required('Email is required').default(''),
            message: yup.string().required('Message is required').default(''),
        });
    }, []);
    const {handleSubmit, formState, control} = useForm<ContactInterface>({
        resolver: yupResolver(validationSchema), defaultValues: validationSchema.cast({})
    });

    const onSubmit = useCallback(async (formValues) => {
        await sendEmail(formValues);
    }, []);

    return {control, onSubmit: handleSubmit(onSubmit), formState};


};

export default useContactForm;