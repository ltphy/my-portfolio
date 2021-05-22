import React, {useEffect, useState} from "react";
import styles from "./styles.module.scss";
import phy from '../../../resources/phy.jpg'
import {useThemeContext} from "../../../context/ThemeProvider/theme.context";
import {Col, Row} from "react-bootstrap";
import {fields} from "./stories.constants";
import {typeSpeed} from "../../../constants/default_constants";

const Stories = () => {
    //will render
    const useTheme = useThemeContext();
    let timeoutList: NodeJS.Timeout[] = [];
    useEffect(() => {
        const typeWriterTimeOut = typeWriter(fields[0], fields);
        // typeWriter2();
        return () => {
            setTypeText('');
            timeoutList.forEach((timeout) => clearTimeout(timeout));
        };
    }, []);
    const [typeText, setTypeText] = useState<string>('');

    const typeWriter = (text: string, textFields: string[]) => {
        if (text.length === 0) {
            // remove the previous value
            setTypeText('');
            textFields = textFields.slice(1);
            if (textFields.length === 0)
                textFields = fields;
            typeWriter(textFields[0], textFields);

        } else {
            setTypeText((prevState => {
                return prevState + text[0];
            }));
            const timeout = setTimeout(() => typeWriter(text.slice(1), textFields), typeSpeed);
            timeoutList.push(timeout);
        }
    };

    return (<Row style={useTheme.content}>
        <div className={styles.my_img}>

        </div>
        <div className={styles.title_content}>
            <div className={styles.layout_content}>
                <h4>
                    Hi, I am
                </h4>
                <h2 className={styles.page_title}>
                    Lieng The Phy
                </h2>
                <h4>
                    I am {' '}
                    <strong className={styles.typewriter2}>
                        {typeText}
                    </strong>
                </h4>
            </div>
        </div>
    </Row>);
};
export default Stories;
