import makeStyles from "@material-ui/core/styles/makeStyles";
import React, {useEffect, useRef, useState} from 'react';
import {WorkOutline} from "@material-ui/icons";
import {Button, Card, Grid} from "@material-ui/core";
import {PortfolioTitle} from "./portfolio.interfaces";
import {portfolioList} from "./portfolio.constants";
import {PortfolioCard} from "./portfolio-card/PortfolioCard";
import {PortfolioContent} from "./portfolio-card/PortfolioCard.interfaces";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './styles.css';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        '& b': {
            color: theme.palette.text.primary,
        }
    },
    contactForm: {
        marginTop: '2rem',
    },
    contentWrapper: {
        padding: '80px',
    },
    title: {
        textAlign: 'center',
        '& > *': {
            fontWeight: 'bold',
            textTransform: 'uppercase',

            '&:first-child': {
                fontSize: '3rem',
            },
            '&:not(:first-child)': {
                marginBottom: '12px',
                padding: '5px 8px',
            }
        }
    },
    filterPortfolio: {
        margin: '20px 10px',
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center'
    },
    portfolioContainer: {
        width: '80%',
        margin: '8em auto',
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        '&.empty': {
            height: '100vh',
            alignItems: "flex-start",
        }
    },
    itemWrapper: {
        padding: '1%'
    },
    buttonFilter: {
        '&:focus': {
            borderColor: 'transparent'
        }
    },

}));
const Portfolio = () => {
    const classes = useStyles();
    const [filterPortfolio, setPortfolioList] = useState<PortfolioContent[]>(portfolioList);
    const [selected, setSelected] = useState<string>(PortfolioTitle.All);

    const onClickFilterButton = (value: string) => {
        setSelected(value);
        if (value === PortfolioTitle.All) {
            setPortfolioList(portfolioList);
            return;
        }
        const porfolios = portfolioList.filter((portfolio) => portfolio.category === value);

        setPortfolioList(porfolios);
    };

    const renderPortfolioCards = () => {
        return filterPortfolio.map((portfolio, index) => {
            return (
                <CSSTransition
                    key={portfolio.title}
                    classNames={'portfolio'}
                    timeout={300}
                >
                    <div className={classes.itemWrapper}>
                        <PortfolioCard portfolio={portfolio}/>
                    </div>
                </CSSTransition>
            );
        });
    };

    return (<div className={classes.contentWrapper}>
        <div className={classes.title}>
            <div>
                <WorkOutline fontSize="large"/>
            </div>
            <h1>Portfolio</h1>
        </div>
        <div>
            <div className={classes.filterPortfolio}>
                {Object.values(PortfolioTitle).map((value) => {
                    return <Button variant={selected === value ? "contained" : "text"}
                                   key={value}
                                   color='primary'
                                   className={classes.buttonFilter}
                                   onClick={() => onClickFilterButton(value)}>{value}</Button>
                })}
            </div>
            <TransitionGroup className={`${classes.portfolioContainer} ${filterPortfolio.length === 0 ? 'empty' : ''}`}>
                {renderPortfolioCards()}
            </TransitionGroup>

        </div>
    </div>);
};
export default Portfolio;