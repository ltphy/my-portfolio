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

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
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
}));

const CustomDrawer = () => {
    const theme = useStyles();
    const useDrawerToggle = useDrawerToggleContext();

    return (
        <Drawer
            className={theme.drawer}
            open={useDrawerToggle.open}
            variant={'persistent'}
            anchor={'left'}

        >
            <div>
                <IconButton onClick={() => {
                    useDrawerToggle.toggleOpen(false);
                }}>
                    <ChevronLeftOutlined/>
                </IconButton>
            </div>
            <Divider/>
            <List>
                {
                    routes.map((route: IRouter) => (
                        <ListItem button key={route.title}>
                            <ListItemIcon> {route.icon}</ListItemIcon>
                            <ListItemText> {route.title}</ListItemText>
                        </ListItem>

                    ))
                }
            </List>
        </Drawer>);
};

export default CustomDrawer;