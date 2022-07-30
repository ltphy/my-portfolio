import React, {useRef, useState} from 'react';
import Header from './header';
import {HashContextProvider, HashValue} from "../context/hash.context";
import {makeStyles, ThemeProvider, useTheme} from '@material-ui/core/styles';
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
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        color: "white",
        height: '100%'
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
    const useDrawerToggle = useDrawerToggleContext();
    const classes = useStyles();
    // const setHashNavValue = (hashNav: string) => {
    //     //because this is a new object => and there fore force rerender
    //     //if use a normal string It wont force rerender because of React
    //     const newHashValue: HashValue = {hashName: hashNav};
    //     setHashValue(newHashValue);
    // };

    return (
            <div className={style.root}>
                <Header/>
                <CustomDrawer/>
                <HashContextProvider hashValue={hashValue}>
                    <main className={clsx(classes.content, {[classes.contentShift]: useDrawerToggle.open})}>
                        {props.children}
                    </main>

                </HashContextProvider>
            </div>);
};

export default MainLayout;
