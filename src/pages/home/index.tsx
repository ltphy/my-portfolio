import React from 'react';
import styles from './styles.module.scss';
import Stories from '../contents/stories';
import Contact from "../contents/contact";


const Home = () => {

    return (<div className={styles.content_wrapper}>
        <Stories/>
        <Contact/>
    </div>);
};
export default Home;