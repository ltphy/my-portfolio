import React from "react";
import styles from "./styles.module.scss";
import rsz_phy2 from '../../../resources/rsz_phy2.jpg'
const Stories = () => {

    return (<div className={styles.content_wrapper}>
        <img src={rsz_phy2} alt={"This is Phy"} className={styles.my_img}/>
    </div>);
};
export default Stories;