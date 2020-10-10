import React from 'react';
import './App.css';
import Home from "./pages/home";
import MainLayout from "./layout";
import {Route, Switch, withRouter, BrowserRouter as Router, HashRouter} from 'react-router-dom';
import {IRouter, routes} from "./constants/routes.constant";

function App() {
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
                <RenderMainRoute/>
            </MainLayout>
        </Router>

    );
}

export default App;
