import React from 'react';
import {Container} from "react-bootstrap";
import Footer from './footer';
import Header from './header';

interface layoutProps {
    children: any;
}

const MainLayout = (props: layoutProps) => {
    return (
        <div>
            <Header/>
            {props.children}
            <Footer/>
        </div>);
};

export default MainLayout;