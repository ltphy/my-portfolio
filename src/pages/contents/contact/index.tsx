import React from "react";
import styles from "./styles.module.scss";
import rsz_phy2 from '../../../resources/rsz_phy2.jpg'
import {useThemeContext} from "../../../context/ThemeProvider/theme.context";
const Contact = () => {
    const useTheme = useThemeContext();

    const myStyleComponent = {
        "backgroundColor": "#efefef",
    };
    return (<div className={styles.content_wrapper} style={useTheme.content}>

    </div>);
};
export default Contact;
