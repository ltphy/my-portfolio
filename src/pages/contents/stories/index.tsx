import React from "react";
import styles from "./styles.module.scss";
import rsz_phy2 from '../../../resources/rsz_phy2.jpg'
import {useThemeContext} from "../../../context/ThemeProvider/theme.context";

const Stories = () => {
    //will render
    const useTheme = useThemeContext();
    return (<div className={styles.content_wrapper} style={useTheme.content}>
        <img src={rsz_phy2} alt={"This is Phy"} className={styles.my_img}/>
    </div>);
};
export default Stories;
