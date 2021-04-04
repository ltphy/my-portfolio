import Home from "../pages/home";
import Stories from "../pages/contents/stories";
import About from "../pages/contents/about";
import {Face, HomeOutlined} from '@material-ui/icons/';

export interface IRouter {
    component: any;
    icon: any,
    isPrivate: boolean,
    title: string,
    showHeaderNavBar: boolean,
    path: string,
}

export const routes: IRouter[] = [
    {
        component: Home,
        icon: HomeOutlined,
        isPrivate: false,
        title: "Home",
        showHeaderNavBar: true,
        path: "/",
    },
    {
        component: About,
        icon: Face,
        isPrivate: false,
        title: "about",
        showHeaderNavBar: true,
        path: "/",
    },

];
