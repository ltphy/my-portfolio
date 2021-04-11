import Stories from "../pages/contents/stories";
import About from "../pages/contents/about";
import {Face, HomeOutlined} from '@material-ui/icons/';
import MailIcon from "@material-ui/icons/Mail";
import React from "react";

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
        title: "Stories",
        showHeaderNavBar: true,
        path: "/",
    },
    {
        component: About,
        iconRender: () => {
            return (<Face/>);
        },
        isPrivate: false,
        title: "About",
        showHeaderNavBar: true,
        path: "/About",
    },

];
