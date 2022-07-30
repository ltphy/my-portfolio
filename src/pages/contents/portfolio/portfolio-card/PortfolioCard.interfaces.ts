import {PortfolioTitle} from "../portfolio.interfaces";

export interface PortfolioContent {
    title: string;
    subTitle: string;
    image: string;
    category: PortfolioTitle;
    url?: string;
}
