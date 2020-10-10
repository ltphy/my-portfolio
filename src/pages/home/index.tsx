import React, {useEffect, useRef} from 'react';
import styles from './styles.module.scss';
import {homeRouters} from "../../constants/home_routes.constants";
import {Link, RouteComponentProps, useHistory, useRouteMatch, withRouter} from "react-router-dom";
import {useHashRoute} from "../../context/hash.context";

interface HomeProps extends RouteComponentProps {
    name: string;
}


const Home = (homeProps: HomeProps) => {
    //this place will render the place and component all //check which link is click then scroll into it
    const hashValue: string = useHashRoute();
    const hashRoutes = useRef<{ [key: string]: HTMLDivElement }>({});
    useEffect(() => {
        if (hashValue) {
            // const newHashRoute = homeProps.location.hash.replace("#", "");
            const myRef = hashRoutes.current[hashValue];
            setTimeout(() => {
                myRef.scrollIntoView({behavior: 'smooth', inline: "start", block: "start"})
            }, 100);
        }

    }, [hashValue]);

    return (<div className={styles.content_wrapper}>
        {
            homeRouters.map((route) => {
                return (
                    <div key={route.title} id={route.title} ref={(ref: HTMLDivElement) => {
                        hashRoutes.current[route.title] = ref
                    }} style={{"scrollMarginTop": "6rem"}}>
                        <route.component/>
                    </div>
                );
                // return (
                //     <Link to={{hash: route.title}} ref={(ref: Link) => {
                //         hashRoute.current[route.title] = ref
                //     }}>
                //         <route.component/>
                //     </Link>
                // );
            })
        }
    </div>);
};
export default withRouter(Home);
