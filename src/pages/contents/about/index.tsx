import React from "react";
import styles from "./styles.module.scss";
import {useThemeContext} from "../../../context/ThemeProvider/theme.context";

const About = () => {
    const useTheme = useThemeContext();
    return (<div className={styles.content_wrapper} style={useTheme.content}>
        <div>
            {/*<b>*/}
            {/*    R&D Developer*/}
            {/*    BeeSight Soft Inc. | June 2018 - April 2019*/}
            {/*    Projects about face detections and recognitions*/}
            {/*    Create a machine learning game by merging jsTensorflow and Unity*/}
            {/*    Game 2D using WebSocket*/}
            {/*    Implement face recognition on a Raspberry Pi 3.0*/}
            {/*    Work with Unity and Android to create a Snapchat-lookalike*/}
            {/*    project*/}
            {/*    <div>*/}
            {/*        What I have learnt*/}
            {/*    </div>*/}
            {/*    Prepared detailed technical reports, documentations, process chart*/}
            {/*    Learn to adapt from varied customer requirements of technical problems*/}
            {/*    Wrote some Medium papers about the complete projects.*/}
            {/*    Ask and interact with senior make my work faster, do not do everything*/}
            {/*    yourself and slow down the task*/}
            {/*</b>*/}
        </div>
    </div>);
};
export default About;
