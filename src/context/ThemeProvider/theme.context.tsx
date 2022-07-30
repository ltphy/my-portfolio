import React, {Context, useContext} from 'react';
import {lightTheme, Theme} from "../../constants/theme_mode";

export const ThemeContext: React.Context<Theme> = React.createContext<Theme>(lightTheme);

interface ThemeContextProps {
    children: any;
    theme: Theme;
}

export const ThemeProvider = (props: ThemeContextProps) => {
    return (
        <ThemeContext.Provider value={props.theme}>
            {props.children}
        </ThemeContext.Provider>
    );

};
export const useThemeContext = () => {
    return useContext<Theme>(ThemeContext);
};




