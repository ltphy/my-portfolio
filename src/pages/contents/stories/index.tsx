import React from "react";
import styles from "./styles.module.scss";
import phy from '../../../resources/phy.jpg'
import {useThemeContext} from "../../../context/ThemeProvider/theme.context";
import {Col, Row} from "react-bootstrap";

const Stories = () => {
    //will render
    const useTheme = useThemeContext();
    return (<Row  style={useTheme.content}>
        <div className={styles.my_img}></div>

        {/*<Col sm={8} style={useTheme.content}>*/}
        {/*    /!*<div>*!/*/}
        {/*    /!*    Hello I am  Lieng The Phy, a software engineer &. I have studied in Ho Chi Minh University of Science*!/*/}
        {/*    /!*    and obtained my Bachelor of Computer Science in 2019.*!/*/}
        {/*    /!*</div>*!/*/}

        {/*    /!*<div>*!/*/}
        {/*    /!*    Love to workout besides programming.*!/*/}
        {/*    /!*</div>*!/*/}

        {/*</Col>*/}
    </Row>);
};
export default Stories;
