import {makeStyles, Card, CardActionArea, CardMedia, CardContent, Typography} from "@material-ui/core";
import React from "react";
import {PortfolioContent} from "./PortfolioCard.interfaces";
import {Link} from 'react-router-dom';

interface PortfolioCardProps {
    portfolio: PortfolioContent;
}

const useStyles = makeStyles({
    card: {
        width: '400px',
    },
    imageContent: {
        height: '300px',
    },

});
export const PortfolioCard = ({portfolio}: PortfolioCardProps) => {
    const {title, subTitle, image, category, url} = portfolio;
    const classes = useStyles();
    const onMouseOverPortfolio = (evcnt: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {

    };


    return (
        <Link to={{pathname: url}} target='_blank'>
            <Card className={classes.card} onMouseOver={onMouseOverPortfolio} elevation={3}>
                <CardActionArea>

                    <CardMedia
                        className={classes.imageContent}
                        title={title}
                        image={image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h5">
                            {title}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                            {subTitle}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>

    );
};