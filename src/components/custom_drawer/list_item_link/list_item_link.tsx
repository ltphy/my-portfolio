import React, {forwardRef, useMemo} from 'react';
import {ListItemIcon} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import {Link as RouterLink} from 'react-router-dom';
import {IRouter} from "../../../constants/routes.constant";

interface ListItemLinkProps {
    route: IRouter
}

const ListItemLink = (props: ListItemLinkProps) => {
    // get the render item =>
    const {route} = props;
    const {path, iconRender, title} = route;
    // update render Link whenever to change the route
    const renderLink = useMemo(() => {
        return forwardRef((itemProps, ref: any) => <RouterLink to={{pathname: path}}
                                                               ref={ref} {...itemProps}/>);
    }, [path]);
    return (
        <ListItem button component={renderLink}>
            <ListItemIcon> {iconRender()}</ListItemIcon>
            <ListItemText primary={title}/>
        </ListItem>
    );
};
export default ListItemLink;