import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from '@material-ui/core/styles/createMuiTheme';
import Paper from "@material-ui/core/Paper";
import {IconButton} from "@material-ui/core";
import {BrightnessMediumOutlined, Facebook, GitHub, LinkedIn, Twitter} from '@material-ui/icons';
import { ReactComponent as YourSvg } from './your-svg.svg';


const useStyles = makeStyles((theme: Theme) => ({
    link_wrapper: {
        display: 'contents',

    },
    links_container: {
        height: '20vh',
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        marginRight: theme.spacing(2)
    }
}));

const ContactLinks = () => {
    const classes = useStyles();
    return (
        <div className={classes.link_wrapper}>
        <Paper className={classes.links_container} elevation={4}>
            <a href={'https://github.com/ltphy'} target={'_blank'}>
                <IconButton size={'medium'} className={classes.icon}>
                    <GitHub/>
                </IconButton>
            </a>
            <a href={'https://www.facebook.com/the.phy.9'} target={'_blank'}>
                <IconButton size={'medium'} className={classes.icon}>
                    <Facebook/>
                </IconButton>
            </a>
            <a href={'https://www.linkedin.com/in/phy-lieng-7872a910b/'} target={'_blank'}>
                <IconButton size={'medium'} className={classes.icon}>
                    <LinkedIn/>
                </IconButton>

            </a>
            <a href={'https://www.linkedin.com/in/phy-lieng-7872a910b/'} target={'_blank'}>
                <IconButton size={'medium'} className={classes.icon}>
                    <Twitter/>
                </IconButton>

            </a>
            <a href={'https://medium.com/@phylieng97'} target={'_blank'}>
                <IconButton>
                    <i className="fab fa-medium"/>

                </IconButton>
            </a>

        </Paper></div>);
};
export default ContactLinks;