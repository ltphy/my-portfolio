import Stories from "../pages/contents/stories";
import About from "../pages/contents/about";
import {Face, HomeOutlined, PhoneAndroid, WorkOutline} from '@material-ui/icons/';
import React from "react";
import Contact from "../pages/contents/contact";
import Portfolio from "../pages/contents/portfolio/portfolio";

export interface IRouter {
    component: any;
    iconRender: any,
    isPrivate: boolean,
    title: string,
    showHeaderNavBar: boolean,
    path: string,
    exact: boolean,
}

const defaultRoute = '/my-portfolio'
export const routes: IRouter[] = [
    {
        component: Stories,
        iconRender: () => {
            return (<HomeOutlined/>);
        },
        isPrivate: false,
        title: "HOME",
        showHeaderNavBar: true,
        path: `${defaultRoute}/`,
        exact: true
    },
    {
        component: About,
        iconRender: () => {
            return (<Face/>);
        },
        isPrivate: false,
        title: "ABOUT",
        showHeaderNavBar: true,
        path: `${defaultRoute}/about`,
        exact: true

    },
    {
        component: Portfolio,
        iconRender: () => {
            return (<WorkOutline/>);
        },
        isPrivate: false,
        title: "PORTFOLIO",
        showHeaderNavBar: true,
        path: `${defaultRoute}/portfolio`,
        exact: true
    },
    {
        component: Contact,
        iconRender: () => {
            return (<PhoneAndroid/>);
        },
        isPrivate: false,
        title: "CONTACT",
        showHeaderNavBar: true,
        path: `${defaultRoute}/contact`,
        exact: true
    },
];
