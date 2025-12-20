import {createContext, ReactNode, useContext, useState} from "react";
import React from "react";

export interface DrawerToggle {
    open: boolean;
    toggleOpen: (open: boolean) => void;
}

// Create context with undefined initial value
export const DrawerToggleContext = createContext<DrawerToggle | undefined>(undefined);

interface DrawerToggleProps {
    children: ReactNode;
}

export const DrawerToggleProvider = (props: DrawerToggleProps) => {
    // State lives INSIDE the provider
    const [open, setOpen] = useState(false);

    const value: DrawerToggle = {
        open,
        toggleOpen: setOpen,
    };

    return (
        <DrawerToggleContext.Provider value={value}>
            {props.children}
        </DrawerToggleContext.Provider>
    );
};

export const useDrawerToggleContext = () => {
    const context = useContext(DrawerToggleContext);
    if (context === undefined) {
        throw new Error('useDrawerToggleContext must be used within DrawerToggleProvider');
    }
    return context;
};
