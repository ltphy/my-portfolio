import React from "react";
import Drawer from '@material-ui/core/Drawer';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {drawerWidth} from "../../constants/default_constants";
import {useDrawerToggleContext} from "../../context/DrawerOpenProvider/drawerOpenProvider.context";
import {IconButton, ListItemIcon} from "@material-ui/core";
import {ChevronLeftOutlined} from "@material-ui/icons";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import {IRouter, routes} from "../../constants/routes.constant";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import clsx from "clsx";
import MailIcon from "@material-ui/icons/Mail";
import ListItemLink from "./list_item_link/list_item_link";
import {Switch} from "react-router";

const useStyles = makeStyles((theme) => ({
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