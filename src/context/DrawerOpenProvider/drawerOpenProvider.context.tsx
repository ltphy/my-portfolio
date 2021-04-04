import React, {useContext} from "react";
import {lightTheme, Theme} from "../../constants/theme_mode";

export interface DrawerToggle {
    open: boolean;
    toggleOpen: (open: boolean) => void;
}

// init drwer toggle context
export const DrawerToggleContext: React.Context<DrawerToggle> = React.createContext<DrawerToggle>({
    open: false,
    toggleOpen: (open) => {
    }
});

interface DrawerToggleProps {
    children: any;
    drawerToggle: DrawerToggle;
}

export const DrawerToggleProvider = (props: DrawerToggleProps) => {
    return (
        <DrawerToggleContext.Provider value={props.drawerToggle}>
            {props.children}
        </DrawerToggleContext.Provider>
    );
};

export const useDrawerToggleContext = () => {
    return useContext<DrawerToggle>(DrawerToggleContext);
};

