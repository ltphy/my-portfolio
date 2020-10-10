import Home from "../pages/home";
import Stories from "../pages/contents/stories";
import About from "../pages/contents/about";
export interface IRouter {
    component: any;
    isPrivate: boolean,
    title: string,
    showHeaderNavBar: boolean,
    path: string,
}

export const routes: IRouter[] = [
    {
        component: Home,
        isPrivate: false,
        title: "Home",
        showHeaderNavBar: true,
        path: "/",
    },
];
