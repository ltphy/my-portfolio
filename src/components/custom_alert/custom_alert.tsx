import React, {ReactElement} from "react";
import MuiAlert, { AlertProps } from '@mui/material/Alert';

export const CustomAlert = (props: AlertProps): ReactElement => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
};