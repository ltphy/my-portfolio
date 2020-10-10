import React, {useRef, useState} from 'react';
import {Container} from "react-bootstrap";
import Footer from './footer';
import Header from './header';
import {HashContextProvider} from "../context/hash.context";

interface layoutProps {
    children: any;
}

const MainLayout = (props: layoutProps) => {
    //set context here so that I dont need to pass prop etc
    const [hashValue,setHashValue] = useState<string>("");

    const setHashNavValue = (hashNav: string) => {
        console.log(hashNav);
        setHashValue(hashNav);
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
