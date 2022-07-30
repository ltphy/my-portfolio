import {PortfolioContent} from "./portfolio-card/PortfolioCard.interfaces";
import {PortfolioTitle} from "./portfolio.interfaces";
import { portfolio, deepLearningContribute, game } from "../../../assets";

export const portfolioList: PortfolioContent[] = [
    {
        title: 'My Portfolio',
        subTitle: 'Portfolio website to track my working progress.',
        image: portfolio,
        category: PortfolioTitle.Web,
        url: 'https://ltphy.github.io/my-portfolio'
    },
    {
        title: 'OpenPCDet',
        subTitle: 'Contribute to an open-source research project.',
        image: deepLearningContribute,
        category: PortfolioTitle.DeepLearning,
        url: 'https://github.com/open-mmlab/OpenPCDet'
    },
    {
        title: 'Garbage Collector',
        subTitle: 'A AI Game using Teachable Machine and Unity.',
        image: game,
        category: PortfolioTitle.All,
        url: 'https://medium.com/@phylieng97/create-machine-learning-game-by-joining-jstensorflow-and-unity-together-using-websocket-ca00982bca46'
    },
];