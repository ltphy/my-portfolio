import React, {useRef, useState} from 'react';
import {Container} from "react-bootstrap";
import Footer from './footer';
import Header from './header';
import {HashContextProvider, HashValue} from "../context/hash.context";
import {ThemeProvider} from '../context/ThemeProvider/theme.context';
import {darkTheme, lightTheme, Theme} from "../constants/theme_mode";
import makeStyles from '@material-ui/core/styles/makeStyles';
import {drawerWidth} from '../constants/default_constants';
import clsx from 'clsx';
import {useDrawerToggleContext} from "../context/DrawerOpenProvider/drawerOpenProvider.context";
import CustomDrawer from "../components/custom_drawer/custom_drawer";
import style from './styles.module.scss';

interface layoutProps {
    children: any;
}

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));
const MainLayout = (props: layoutProps) => {
    //set context here so that I dont need to pass prop etc
    const [hashValue, setHashValue] = useState<HashValue>({hashName: ""});
    const [themeValue, setThemeValue] = useState<Theme>(lightTheme);
    const useDrawerToggle = useDrawerToggleContext();
    const classes = useStyles();
    const setHashNavValue = (hashNav: string) => {
        //because this is a new object => and there fore force rerender
        //if use a normal string It wont force rerender because of React
        const newHashValue: HashValue = {hashName: hashNav};
        setHashValue(newHashValue);
    };
    const switchTheme = (switchTheme: boolean) => {
        if (switchTheme) {
            setThemeValue(darkTheme);
        } else {
            setThemeValue(lightTheme);
        }
    };
    return (
        <ThemeProvider theme={themeValue}>
            <div className={style.root}>
                <Header changeNavTab={setHashNavValue} switchTheme={switchTheme}/>
                <CustomDrawer/>
                <HashContextProvider hashValue={hashValue}>
                    <main className={clsx(classes.content, {[classes.contentShift]: useDrawerToggle.open})}>
                        {props.children}
                    </main>

                </HashContextProvider>
            </div>
            {/*<Footer/>*/}
        </ThemeProvider>);
};

export default MainLayout;
