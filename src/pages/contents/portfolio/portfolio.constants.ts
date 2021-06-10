import {PortfolioContent} from "./portfolio-card/PortfolioCard.interfaces";
import {PortfolioTitle} from "./portfolio.interfaces";

export const portfolioList: PortfolioContent[] = [
    {
        title: 'My Portfolio',
        subTitle: 'Portfolio website to track my working progress.',
        image: '/images/portfolio.gif',
        category: PortfolioTitle.Web,
        url: 'http://ltphy.github.io/my-portfolio'
    },
    {
        title: 'OpenPCDet',
        subTitle: 'Contribute to an open-source research project.',
        image: '/images/deeplearning_contribute.png',
        category: PortfolioTitle.DeepLearning,
        url: 'https://github.com/open-mmlab/OpenPCDet'
    },
    {
        title: 'Garbage Collector',
        subTitle: 'A AI Game using Teachable Machine and Unity.',
        image: '/images/game.gif',
        category: PortfolioTitle.All,
        url: 'https://medium.com/@phylieng97/create-machine-learning-game-by-joining-jstensorflow-and-unity-together-using-websocket-ca00982bca46'
    },
];