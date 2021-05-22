import React, {ReactElement} from "react";
import MuiAlert from '@material-ui/lab/Alert';
import {AlertProps} from "@material-ui/lab/Alert/Alert";

export const CustomAlert = (props: AlertProps): ReactElement => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
};