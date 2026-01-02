import React, {forwardRef, useMemo} from 'react';
import { ListItemIcon, ListItemText, ListItemButton } from "@mui/material";
import {Link as RouterLink} from 'react-router-dom';
import {IRouter} from "../../../constants/routes.constant";
import { useTranslation } from 'react-i18next';

interface ListItemLinkProps {
    route: IRouter
}

const ListItemLink = (props: ListItemLinkProps) => {
    // get the render item =>
    const {route} = props;
    const {path, iconRender, title} = route;
    const { t } = useTranslation();

    // Map route titles to translation keys
    const getTranslationKey = (routeTitle: string) => {
        const titleMap: { [key: string]: string } = {
            'HOME': 'navigation.home',
            'ABOUT': 'navigation.about',
            'PORTFOLIO': 'navigation.portfolio',
            'CONTACT': 'navigation.contact'
        };
        return titleMap[routeTitle] || routeTitle;
    };

    // update render Link whenever to change the route
    const renderLink = useMemo(() => {
        return forwardRef((itemProps, ref: any) => <RouterLink to={path}
                                                               ref={ref} {...itemProps}/>);
    }, [path]);
    return (
        <ListItemButton component={renderLink}>
            <ListItemIcon> {iconRender()}</ListItemIcon>
            <ListItemText primary={t(getTranslationKey(title))}/>
        </ListItemButton>
    );
};
export default ListItemLink;