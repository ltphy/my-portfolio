import Stories from "../pages/contents/stories";
import About from "../pages/contents/about";
import {Face, HomeOutlined, PhoneAndroid} from '@material-ui/icons/';
import React from "react";
import Contact from "../pages/contents/contact";

export interface IRouter {
    component: any;
    iconRender: any,
    isPrivate: boolean,
    title: string,
    showHeaderNavBar: boolean,
    path: string,
}

export const routes: IRouter[] = [
    {
        component: Stories,
        iconRender: () => {
            return (<HomeOutlined/>);
        },
        isPrivate: false,
        title: "HOME",
        showHeaderNavBar: true,
        path: "/",
    },
    {
        component: About,
        iconRender: () => {
            return (<Face/>);
        },
        isPrivate: false,
        title: "ABOUT",
        showHeaderNavBar: true,
        path: "/About",
    },
    {
        component: Contact,
        iconRender: () => {
            return (<PhoneAndroid/>);
        },
        isPrivate: false,
        title: "CONTACT",
        showHeaderNavBar: true,
        path: "/Contact",
    },
];
