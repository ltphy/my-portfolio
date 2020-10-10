import React, {useContext, useRef} from 'react';

export interface HashValue {
    hashName: string;
}

const defaultHashValue: HashValue = {hashName: ""};
export const HashContext: React.Context<HashValue> = React.createContext<HashValue>(defaultHashValue);

interface hashContextProps {
    children: any;
    hashValue: HashValue;
}

export const HashContextProvider = (props: hashContextProps) => {
    return (
        <HashContext.Provider value={props.hashValue}>
            {props.children}
        </HashContext.Provider>
    );
};

export const useHashRoute = () => {
    return useContext<HashValue>(HashContext);
};
