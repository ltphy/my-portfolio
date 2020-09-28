import Home from "../pages/home";
import Stories from "../pages/contents/stories";
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
        title: "Home",
        showHeaderNavBar: true,
        path: "/",
    },
    {
        component: Stories,
        isPrivate: false,
        title: "Stories",
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