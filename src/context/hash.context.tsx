import React, {useContext, useRef} from 'react';

export const HashContext: React.Context<string> = React.createContext<string>("");

interface hashContextProps {
    children: any;
    hashValue: string;
}

export const HashContextProvider = (props: hashContextProps) => {
    return (
        <HashContext.Provider value={props.hashValue}>
            {props.children}
        </HashContext.Provider>
    );
};

export const useHashRoute = () => {
    return useContext<string>(HashContext);
};
