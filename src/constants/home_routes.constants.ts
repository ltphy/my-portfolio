import Home from "../pages/home";
import About from "../pages/contents/about";
import Stories from "../pages/contents/stories";
import Contact from "../pages/contents/contact";

export interface IHomeRouter {
    component: any;
    title: string,
    showHeaderNavBar: boolean,
    path: string,
}
export const homeRouters: IHomeRouter[] = [
    {
        component: Stories,
        title: "Stories",
        showHeaderNavBar: true,
        path: "#Stories",
    },
    {
        component: About,
        title: "About",
        showHeaderNavBar: true,
        path: "#About",
    },

    {
        component: Contact,
        title: "Contact",
        showHeaderNavBar: true,
        path: "#Contact",
    },
];
