import React, {useEffect, useState} from 'react';
import {SwitchClassKey, SwitchProps} from '@material-ui/core/Switch';
import {useThemeContext} from "../../context/ThemeProvider/theme.context";
import {AppBar, Toolbar} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Typography from "@material-ui/core/Typography";
import {useDrawerToggleContext} from "../../context/DrawerOpenProvider/drawerOpenProvider.context";
import makeStyles from "@material-ui/core/styles/makeStyles";
import clsx from 'clsx';
import {drawerWidth} from "../../constants/default_constants";

interface Styles extends Partial<Record<SwitchClassKey, string>> {
    focusVisible?: string;
}

interface Props extends SwitchProps {
    classes: Styles;
}

interface HeaderProps {
    changeNavTab: (hashNavValue: string) => void;
    switchTheme: (theme: boolean) => void;
}

const useStyle = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    headerTitle: {
        marginLeft: "auto",
        marginRight: "auto",
        fontWeight: 900,
    }
}));
const Header = (headerProps: HeaderProps) => {

    const [themeMode, setThemeMode] = useState<boolean>();
    const useTheme = useThemeContext();
    const useDrawerToggle = useDrawerToggleContext();
    const theme = useStyle();
    const switchThemeMode = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.checked);
        setThemeMode(event.target.checked);
        headerProps.switchTheme(event.target.checked);
    };
    //this header is not used to move to other route but instead to move to certain href element
    return (

        <AppBar position={'fixed'} className={clsx(theme.appBar, {[theme.appBarShift]: useDrawerToggle.open})}>
            <Toolbar>
                <IconButton color={"inherit"} aria-label={"open drawer"}
                            onClick={() => {
                                console.log('onCLick', useDrawerToggle.open);
                                console.log('function', useDrawerToggle.toggleOpen);
                                useDrawerToggle.toggleOpen(!useDrawerToggle.open);
                            }} edge="start"
                            className={clsx(theme.menuButton, useDrawerToggle.open && theme.hide)}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant={'h5'} noWrap className={theme.headerTitle}>
                    Lieng The Phy
                </Typography>
            </Toolbar>
        </AppBar>
        // <Navbar expand="lg" sticky={"top"} className={styles.nav_wrapper} style={useTheme.navBar}>
        //     <Container fluid>
        //         <Col className={styles.brandWrapper}>
        //             <Navbar.Brand className={styles.brand} style={{"color": useTheme.navBar.color}}>
        //                 Phy Lieng
        //             </Navbar.Brand>
        //         </Col>
        //         {/*To create a toggle button for nav bar*/}
        //         <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.toggle}>
        //             Menu <FontAwesomeIcon icon={faBars}/>
        //         </Navbar.Toggle>
        //         <Navbar.Collapse id={"responsive-navbar-nav"} className={styles.nav_container}>
        //             <Nav>
        //                 {
        //                     homeRouters.map((route: IHomeRouter, index: number) => {
        //                         return (
        //                             route.showHeaderNavBar &&
        //                             (<Nav.Link className={styles.route} style={{"color": useTheme.navBar.color}}
        //                                        key={route.title} onClick={() => {
        //                                 headerProps.changeNavTab(route.title);
        //                             }}>
        //                                 {route.title}
        //                             </Nav.Link>)
        //                         );
        //                     })
        //
        //                 }
        //
        //             </Nav>
        //         </Navbar.Collapse>
        //
        //     </Container>
        // </Navbar>
    );
};
export default Header;
