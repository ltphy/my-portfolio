import {makeStyles, Card, CardActionArea, CardMedia, CardContent, Typography} from "@material-ui/core";
import React from "react";
import {MergeType} from "@material-ui/icons";
import {Portfolio} from "./PortfolioCard.interfaces";

interface PortfolioCardProps {
    portfolio: Portfolio;
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
    const {title, subTitle, image, category} = portfolio;
    const classes = useStyles();
    const onMouseOverPortfolio = (evcnt: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {

    };

    return (
        <Card className={classes.card} onMouseOver={onMouseOverPortfolio} elevation={3}>
            <CardActionArea>
                <CardMedia
                    className={classes.imageContent}
                    title={title}
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom>
                        {title}
                    </Typography>

                    <Typography>
                        {subTitle}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};