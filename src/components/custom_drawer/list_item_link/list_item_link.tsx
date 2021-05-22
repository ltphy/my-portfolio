import React, {forwardRef, useMemo} from 'react';
import {ListItemIcon} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import {Link as RouterLink} from 'react-router-dom';

interface ListItemLinkProps {
    iconRender: () => any;
    primary: string;
    to: string;
}

const ListItemLink = (props: ListItemLinkProps) => {
    const {iconRender, primary, to} = props;
    // update render Link whenever to change.
    const renderLink = useMemo(() => {
        console.log('to', to);
        return forwardRef((itemProps, ref: any) => <RouterLink to={to}
                                                               ref={ref} {...itemProps}/>);
    }, [to]);
    return (
        <ListItem button component={renderLink}>
            <ListItemIcon> {iconRender()}</ListItemIcon>
            <ListItemText primary={primary}/>
        </ListItem>
    );
};
export default ListItemLink;