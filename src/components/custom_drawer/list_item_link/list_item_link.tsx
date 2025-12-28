import React, {forwardRef, useMemo} from 'react';
import { ListItemIcon, ListItemText, ListItemButton } from "@mui/material";
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
        return forwardRef((itemProps, ref: any) => <RouterLink to={path}
                                                               ref={ref} {...itemProps}/>);
    }, [path]);
    return (
        <ListItemButton component={renderLink}>
            <ListItemIcon> {iconRender()}</ListItemIcon>
            <ListItemText primary={title}/>
        </ListItemButton>
    );
};
export default ListItemLink;