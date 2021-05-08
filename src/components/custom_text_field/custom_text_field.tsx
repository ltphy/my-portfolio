import React from 'react';
import {fade, makeStyles, TextField} from "@material-ui/core";
import {Control, Controller} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";
import {Warning} from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
    root: {
        border: '1px solid #e2e2e1',
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: '#fcfcfc',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        marginBottom: theme.spacing(1),
        '&:hover': {
            backgroundColor: '#fff'
        },
        '&$focused': {
            backgroundColor: '#fff',
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: theme.palette.primary.main
        }

    },
    error_message: {
        color: '#F20505',
    }

}));

interface CustomTextFieldProps {
    name: string;
    control: Control<Record<string, any>>;
    label: string;
    defaultValue?: string;
    errors?: any;
    multiline?: boolean;
    rows?: number;
}

const CustomTextField = (props: CustomTextFieldProps) => {

    const redditStyles = useStyle();
    return (<div>
        <Controller name={props.name}
                    control={props.control}
                    defaultValue={props.defaultValue || ''}
                    render={({field: {onChange, onBlur, value}}) => {
                        return (<TextField onChange={onChange}
                                           onBlur={onBlur}
                                           value={value}
                                           label={props.label}
                                           multiline={props.multiline}
                                           fullWidth
                                           variant={'filled'}
                                           rows={props.rows}
                                           InputProps={{classes: {root: redditStyles.root}, disableUnderline: true}}
                        />);
                    }}/>
        <div className={redditStyles.error_message}>
            {props.errors[props.name] != null ?
                <>
                    <Warning fontSize={'small'}/>
                    <ErrorMessage errors={props.errors} name={props.name}/>
                </>
                : <></>}
        </div>

    </div>);
};
export default CustomTextField;