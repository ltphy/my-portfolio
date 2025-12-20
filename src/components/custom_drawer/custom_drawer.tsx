import React from "react";
import { Drawer, IconButton, ListItemIcon, Divider, List, ListItem, ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {drawerWidth} from "../../constants/default_constants";
import {useDrawerToggleContext} from "../../context/DrawerOpenProvider/drawerOpenProvider.context";
import {ChevronLeftOutlined} from "@mui/icons-material";
import {IRouter, routes} from "../../constants/routes.constant";
import clsx from "clsx";
import MailIcon from "@mui/icons-material/Mail";
import ListItemLink from "./list_item_link/list_item_link";

const useStyles = makeStyles((theme: any) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap"
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        // theme.spacing default 8px x 7 for icon
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9) + 1
        },
        // property specifies whether to clip the content, add a scroll bar, or display overflow content of a block-level element.

        overflowX: "hidden"

    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignContent: 'center',
        padding: theme.spacing(1, 1),

        // necessary for content to be below app bar
        ...theme.mixins.toolbar
    }
}));

const CustomDrawer = () => {
    const theme = useStyles();
    const useDrawerToggle = useDrawerToggleContext();

    return (
        <Drawer
            className={clsx(theme.drawer, {
                [theme.drawerOpen]: useDrawerToggle.open,
                [theme.drawerClose]: !useDrawerToggle.open
            })}
            classes={{
                paper: clsx({
                    [theme.drawerOpen]: useDrawerToggle.open,
                    [theme.drawerClose]: !useDrawerToggle.open,
                }),
            }}
            open={useDrawerToggle.open}
            variant={'permanent'}
            anchor={'left'}

        >
            <div className={theme.toolbar}>
                <IconButton onClick={() => {
                    useDrawerToggle.toggleOpen(false);
                }}>
                    <ChevronLeftOutlined/>
                </IconButton>
            </div>
            <List>
                {
                    routes.map((route: IRouter, index: number) => {
                            return (<div key={route.title}> <ListItemLink  route={route}/>
                                    <Divider/>
                                </div>
                            );
                        }
                    )

                }
            </List>
        </Drawer>);
};

export default CustomDrawer;