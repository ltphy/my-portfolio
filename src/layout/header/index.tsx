import React from 'react';
import {Navbar, Nav, Row, Col, Container} from 'react-bootstrap';
import {routes, IRouter} from "../../constants/routes.constant";
import styles from "./styles.module.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
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
                            routes.map((route: IRouter, index: number) => {
                                return (
                                    route.showHeaderNavBar && <Nav.Link className={styles.route}>
                                        {route.title}
                                    </Nav.Link>
                                );
                            })
                        }
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}
export default Header;