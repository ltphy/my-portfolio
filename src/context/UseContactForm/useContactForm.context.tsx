import {useCallback, useMemo} from "react";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

interface ContactInterface {
    name: string;
    email: string;
    message: string;
}

const useContactForm = () => {
    const validationSchema = useMemo(() => {
        return yup.object({
            name: yup.string().required('Name is required'),
            email: yup.string().email().required('email is required'),
            message: yup.string().required('Message is required'),
        });
    }, []);

    const {register, handleSubmit, } = useForm<ContactInterface>({resolver: yupResolver(validationSchema)});

    const onSubmit = useCallback((formValues) => {
        console.log(formValues);
    }, []);

    return {register, onSubmit: handleSubmit(onSubmit)}


};

export default useContactForm;