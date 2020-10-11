import React, {useState} from 'react';
import {Navbar, Nav, Row, Col, Container} from 'react-bootstrap';
import {routes, IRouter} from "../../constants/routes.constant";
import styles from "./styles.module.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {homeRouters, IHomeRouter} from "../../constants/home_routes.constants";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {ThemeMode} from "../../constants/theme_mode";
import Switch from '@material-ui/core/Switch';

interface HeaderProps {
    changeNavTab: (hashNavValue: string) => void;
}

const Header = (headerProps: HeaderProps) => {
    const [themeMode, setThemeMode] = useState<boolean>();
    const switchThemeMode = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.checked);
        setThemeMode(event.target.checked);
    };
    const SwitchMode = () => {
        return (<Switch checked={themeMode} onChange={switchThemeMode} color={"secondary"}/>);
    };

    //this header is not used to move to other route but instead to move to certain href element
    return (
        <Navbar expand="lg" sticky={"top"} className={styles.nav_wrapper}>
            <Container fluid>
                <Col className={styles.brandWrapper}>
                    <Navbar.Brand className={styles.brand}>
                        Home
                    </Navbar.Brand>
                </Col>
                {/*To create a toggle button for nav bar*/}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.toggle}>
                    Menu <FontAwesomeIcon icon={faBars}/>
                </Navbar.Toggle>
                <Navbar.Collapse id={"responsive-navbar-nav"} className={styles.nav_container}>
                    <Nav>
                        {
                            homeRouters.map((route: IHomeRouter, index: number) => {
                                return (
                                    route.showHeaderNavBar &&
                                    (<Nav.Link className={styles.route} key={route.title} onClick={() => {
                                        headerProps.changeNavTab(route.title);
                                    }}>
                                        {route.title}
                                    </Nav.Link>)
                                );
                            })

                        }
                        <FormControlLabel control={<SwitchMode/>} className={styles.switchIcon} label={""}/>

                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
};
export default Header;
