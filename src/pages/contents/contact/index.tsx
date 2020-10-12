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
        Contact me 0901448926
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <p>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <p>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <p>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

    </div>);
};
export default Contact;
