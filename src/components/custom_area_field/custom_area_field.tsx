import React from 'react';
import {fade, makeStyles, TextField} from "@material-ui/core";
import {Control, Controller} from "react-hook-form";

const useStyle = makeStyles((theme) => ({
    root: {
        border: '1px solid #e2e2e1',
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: '#fcfcfc',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:hover': {
            backgroundColor: '#fff'
        },
        '&$focused': {
            backgroundColor: '#fff',
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: theme.palette.primary.main
        }

    },
    focused: {},

}));

interface CustomTextFieldProps {
    name: string;
    control: Control<Record<string, any>>;
    label: string;
}

const CustomTextField = (props: CustomTextFieldProps) => {

    const redditStyles = useStyle();

    return (
        <Controller name={props.name}
                    control={props.control}
                    render={({field: {onChange, onBlur, value}}) => {
                        return (<TextField onChange={onChange}
                                           onBlur={onBlur}
                                           label={props.label}
                                           variant={'filled'}
                                           value={value}
                                           InputProps={{classes: redditStyles, disableUnderline: true}}
                        />);
                    }}/>
    );
};
export default CustomTextField;
