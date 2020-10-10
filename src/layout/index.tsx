import React, {useRef, useState} from 'react';
import {Container} from "react-bootstrap";
import Footer from './footer';
import Header from './header';
import {HashContextProvider, HashValue} from "../context/hash.context";

interface layoutProps {
    children: any;
}

const MainLayout = (props: layoutProps) => {
    //set context here so that I dont need to pass prop etc
    const [hashValue, setHashValue] = useState<HashValue>({hashName: ""});

    const setHashNavValue = (hashNav: string) => {
        //because this is a new object => and there fore force rerender
        //if use a normal string It wont force rerender because of React
        const newHashValue:HashValue = {hashName:hashNav};
        setHashValue(newHashValue);
    };
    return (
        <div>
            <Header changeNavTab={setHashNavValue}/>
            <HashContextProvider hashValue={hashValue}>
                {props.children}
            </HashContextProvider>

            <Footer/>
        </div>);
};

export default MainLayout;
