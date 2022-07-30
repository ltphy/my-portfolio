import React, {useEffect, useRef, useState} from "react";
import {useThemeContext} from "../../../context/ThemeProvider/theme.context";
import {fields} from "./stories.constants";
import {typeSpeed} from "../../../constants/default_constants";
import {withRouter} from "react-router-dom";
import styles from './styles.module.scss';
import {phy1, phy2, phy3, phy} from '../../../assets';

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

const imageList = [phy1, phy, phy2, phy3];

const Stories = () => {
    //will render
    const [currentImageIdx, setCurrentImageIdx] = useState<number>(0);

    const useTheme = useThemeContext();

    let timeoutList: NodeJS.Timeout[] = [];
    const useShowImageRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (useShowImageRef.current) {
            clearTimeout(useShowImageRef.current);
            useShowImageRef.current = null;
        }
        useShowImageRef.current = setTimeout(() => {
            // after rerender
            const imageIndex = (currentImageIdx + 1) % imageList.length;
            setCurrentImageIdx(imageIndex);
        }, 5000);
        return () => {
            if (useShowImageRef.current) {
                clearTimeout(useShowImageRef.current);
            }

        };

    }, [currentImageIdx]);
    useEffect(() => {
        typeWriter(fields[0], fields);

        return () => {
            setTypeText('');
            timeoutList.forEach((timeout) => clearTimeout(timeout));
            if (useShowImageRef.current) {
                clearTimeout(useShowImageRef.current);
                useShowImageRef.current = null;
            }
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
        <div className={styles.container}>
            <img
                src={imageList[currentImageIdx]}
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
        </div>
    </div>);
};
export default withRouter(Stories);
