import React, {useEffect, useState} from "react";
import {useThemeContext} from "../../../context/ThemeProvider/theme.context";
import {fields} from "./stories.constants";
import {typeSpeed} from "../../../constants/default_constants";
import {withRouter} from "react-router-dom";
import styles from './styles.module.scss';

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];

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

    return (<div style={useTheme.content}>
        {/*<div className={{...styles.my_img}}/>*/}
        <img
            src={'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg'}
            className={styles.my_img}
        />

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
    </div>);
};
export default withRouter(Stories);
