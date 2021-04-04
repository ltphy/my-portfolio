import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import Home from "./pages/home";
import MainLayout from "./layout";
import {Route, Switch, withRouter, BrowserRouter as Router, HashRouter} from 'react-router-dom';
import {IRouter, routes} from "./constants/routes.constant";
import {DrawerToggleProvider} from "./context/DrawerOpenProvider/drawerOpenProvider.context";

function App() {
    const [open, toggleOpen] = useState<boolean>(false);
    const toggleOpenDrawer = useCallback((open: boolean) => {
        toggleOpen(open);
    }, []);

    const RenderMainRoute = () => {
        return (
            <Switch>
                {
                    routes.map((route: IRouter, index: number) => {
                        return (
                            <Route path={route.path}
                                   exact={route.path === '/'}
                                   key={route.title}
                                   render={() => <route.component/>}
                            />
                        );
                    })
                }
            </Switch>
        );
    };
    return (
        <Router>
            <MainLayout>
                <DrawerToggleProvider drawerToggle={{open, toggleOpen: toggleOpenDrawer}}>
                    <RenderMainRoute/>
                </DrawerToggleProvider>
            </MainLayout>
        </Router>

    );
}

export default App;
