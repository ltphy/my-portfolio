import Home from "../pages/home";

export interface IRouter {
    component: any;
    isPrivate: boolean,
    title: string,
    showHeaderNavBar: boolean,
    path: string,
};

export const routes: IRouter[] = [
    {
        component: Home,
        isPrivate: false,
        title: "Stories",
        showHeaderNavBar: true,
        path: "/",
    },
    {
        component: Home,
        isPrivate: false,
        title: "Contact",
        showHeaderNavBar: true,
        path: "/",
    },
    {
        component: Home,
        isPrivate: false,
        title: "About",
        showHeaderNavBar: true,
        path: "/",
    },
];