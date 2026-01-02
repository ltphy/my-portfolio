import React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useDrawerToggleContext} from "../../context/DrawerOpenProvider/drawerOpenProvider.context";
import {makeStyles} from '@mui/styles';
import clsx from 'clsx';
import {drawerWidth} from "../../constants/default_constants";
import LanguageSwitcher from "../../components/LanguageSwitcher";

interface HeaderProps {
    changeNavTab?: (hashNavValue: string) => void;
    switchTheme?: (theme: boolean) => void;
}

const useStyle = makeStyles((theme: any) => ({
    menuButton: {
        marginRight: theme.spacing(2),
        color: "#6366f1",
        '&:hover': {
            backgroundColor: 'rgba(99, 102, 241, 0.04)',
        }
    },
    hide: {
        display: 'none'
    },
    appBar: {
        backgroundColor: "#ffffff",
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(8px)',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['margin', 'width', 'box-shadow'], {
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
        fontWeight: 700,
        background: 'whitesmoke',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
    },
    titleDisplay: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

}));
const Header = (headerProps: HeaderProps) => {

    // const [themeMode, setThemeMode] = useState<boolean>();
    // const useTheme = useThemeContext();
    const useDrawerToggle = useDrawerToggleContext();
    const theme = useStyle();
    // const switchThemeMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log(event.target.checked);
    //     setThemeMode(event.target.checked);
    //     headerProps.switchTheme(event.target.checked);
    // };
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
                <div className={theme.titleDisplay}>
                    <div/>
                    <Typography variant={'h5'} noWrap className={theme.headerTitle}>
                        Lieng The Phy
                    </Typography>

                    <LanguageSwitcher />
                </div>

            </Toolbar>
        </AppBar>
    );
};
export default Header;
