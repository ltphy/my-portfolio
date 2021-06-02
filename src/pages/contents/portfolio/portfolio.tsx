import makeStyles from "@material-ui/core/styles/makeStyles";
import React, {useEffect, useRef, useState} from 'react';
import {WorkOutline} from "@material-ui/icons";
import {Button, Card, Grid} from "@material-ui/core";
import {PortfolioTitle} from "./portfolio.interfaces";
import {portfolioList} from "./portfolio.constants";
import {PortfolioCard} from "./portfolio-card/PortfolioCard";


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
        flexGrow: 1,
    }
}));
const Portfolio = () => {
    const classes = useStyles();
    const inputListDivRef = useRef<HTMLDivElement>();
    const [selected, setSelected] = useState<string>('');

    const onClickFilterButton = (value: string) => {
        setSelected(value);
    };
    const renderPortfolioCards = () => {
        const numberOfItems = 3;
        const numberOfRows = Math.ceil(portfolioList.length / 3);
        const portfolioCards = [];
        for (let i = 0; i < numberOfRows; i++) {
            const start = i * numberOfItems;
            let end = start + numberOfItems;
            if (end > portfolioList.length) {
                end = portfolioList.length;
            }
            const portfolioRow = [...portfolioList.slice(start, end)];
            portfolioCards.push(<Grid container spacing={5} style={{'marginBottom': '1em'}}>
                {
                    portfolioRow.map((portfolio) => {
                        return (
                            <Grid item xs>
                                <PortfolioCard portfolio={portfolio}/>
                            </Grid>);
                    })
                }
            </Grid>);
        }
        return portfolioCards;

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
                    return <Button variant={selected === value ? "contained" : "text"} key={value} color='primary'
                                   onClick={() => onClickFilterButton(value)}>{value}</Button>
                })}
            </div>
            <div className={classes.portfolioContainer}>
                {renderPortfolioCards()}
            </div>

        </div>

    </div>);
};
export default Portfolio;