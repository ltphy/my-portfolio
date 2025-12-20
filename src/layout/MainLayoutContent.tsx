import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material/styles";
import {useState} from "react";
import {useDrawerToggleContext} from "../context/DrawerOpenProvider/drawerOpenProvider.context";
import Header from "./header";
import React from "react";
import {HashContextProvider, HashValue} from "../context/hash.context";
import clsx from "clsx";
import {CustomDrawer} from "../components/custom_drawer/custom_drawer";
import style from "./styles.module.scss";

const useStyles = makeStyles((theme: Theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(8),
        transition: theme.transitions.create(['margin', 'transform'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh',
        color: "white",
    },
    contentShift: {
        transition: theme.transitions.create(['margin', 'transform'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

interface layoutProps {
    children: any;
}

const MainLayoutContent = (props: layoutProps) => {
    const [hashValue, setHashValue] = useState<HashValue>({hashName: ""});
    const useDrawerToggle = useDrawerToggleContext();
    const classes = useStyles(); // Now it has access to theme from parent ThemeProvider

    return (
        <div className={style.root}>
            <Header/>
            <CustomDrawer/>
            <HashContextProvider hashValue={hashValue}>
                <main className={clsx(classes.content, {[classes.contentShift]: useDrawerToggle.open})}>
                    {props.children}
                </main>
            </HashContextProvider>
        </div>
    );
};

export default MainLayoutContent;
