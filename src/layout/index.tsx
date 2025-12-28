import React, {useRef, useState} from 'react';
import Header from './header';
import {HashContextProvider, HashValue} from "../context/hash.context";
import { makeStyles } from '@mui/styles';
import {ThemeProvider, useTheme, createTheme, Theme} from '@mui/material/styles';
import clsx from 'clsx';
import {useDrawerToggleContext} from "../context/DrawerOpenProvider/drawerOpenProvider.context";
import {CustomDrawer} from "../components/custom_drawer/custom_drawer";
import style from './styles.module.scss';
import MainLayoutContent from "./MainLayoutContent";

const theme = createTheme({
    palette: {
        primary: {
            main: '#6366f1', // Modern indigo
            light: '#818cf8',
            dark: '#4f46e5',
        },
        secondary: {
            main: '#ec4899', // Modern pink
            light: '#f472b6',
            dark: '#db2777',
        },
        background: {
            default: '#f8fafc',
            paper: '#ffffff',
        },
        text: {
            primary: '#1e293b',
            secondary: '#64748b',
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 700,
            letterSpacing: '-0.02em',
        },
        h2: {
            fontWeight: 700,
            letterSpacing: '-0.01em',
        },
        h5: {
            fontWeight: 600,
        },
    },
    shape: {
        borderRadius: 12,
    },
    shadows: [
        'none',
        '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        ...Array(18).fill('0 25px 50px -12px rgba(0, 0, 0, 0.25)'),
    ] as any,
    spacing: 8,
});

interface layoutProps {
    children: any;
}

const MainLayout = (props: layoutProps) => {
    return (
            <ThemeProvider theme={theme}>
                <MainLayoutContent>
                    {props.children}
                </MainLayoutContent>
            </ThemeProvider>);
};

export default MainLayout;
