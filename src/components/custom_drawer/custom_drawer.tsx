import React from "react";
import {Divider, Drawer, IconButton, List} from '@mui/material';
import {makeStyles} from '@mui/styles';
import {drawerWidth} from "../../constants/default_constants";
import {useDrawerToggleContext} from "../../context/DrawerOpenProvider/drawerOpenProvider.context";
import {ChevronLeftOutlined} from "@mui/icons-material";
import {IRouter, routes} from "../../constants/routes.constant";
import clsx from "clsx";
import ListItemLink from "./list_item_link/list_item_link";
import {Theme} from "@mui/material/styles";
import {Fontface} from "@mui/material/styles/createMixins";

const useStyles = makeStyles((theme: Theme) => ({
    drawerPaper: {
        width: drawerWidth,
        whiteSpace: "nowrap",
        // Add base styles here that apply to both states
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: "hidden",
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9) + 1
        },
        overflowX: "hidden",
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center', // Changed from alignContent
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    }
}));
export const CustomDrawer = () => {
    const classes = useStyles({} as Fontface);
    const { open, toggleOpen } = useDrawerToggleContext();

    return (
        <Drawer
            anchor="left"
            open={open}
            classes={{
                paper: clsx(classes.drawerPaper, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
            // Remove className prop - it doesn't work on Drawer root
        >
            <div className={classes.toolbar}>
                <IconButton onClick={() => toggleOpen(!open)}>
                    <ChevronLeftOutlined/>
                </IconButton>
            </div>
            <Divider />
            <List>
                {routes.map((route: IRouter) => (
                    <div key={route.title}>
                        <ListItemLink route={route}/>
                        <Divider/>
                    </div>
                ))}
            </List>
        </Drawer>
    );
};
