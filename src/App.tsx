import React from 'react';
import './App.css';
import MainLayout from "./layout";
import {BrowserRouter, MemoryRouter, Route, Switch} from 'react-router-dom';
import {IRouter, routes} from "./constants/routes.constant";
import {DrawerToggleProvider} from "./context/DrawerOpenProvider/drawerOpenProvider.context";

interface AppProps {
}

interface AppState {
    open: boolean;
    toggleOpen: (open: boolean) => void;
}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        // toggle open
        const toggleOpen = (open: boolean) => {
            this.setState({open: open});
        };
        this.state = {
            open: false,
            toggleOpen: toggleOpen,
        }
    }

    RenderMainRoute = () => {
        return (
            <Switch>
                {
                    routes.map((route: IRouter, index: number) => {
                        return (
                            <Route path={route.path}
                                   exact={route.exact}
                                   key={route.title}
                                   render={() => <route.component/>}
                            />
                        );
                    })
                }
            </Switch>
        );
    };

    render() {
        return (
            <BrowserRouter>
                <DrawerToggleProvider drawerToggle={this.state}>
                    <MainLayout>
                        <this.RenderMainRoute/>
                    </MainLayout>
                </DrawerToggleProvider>
            </BrowserRouter>

        );
    }
}

export default App;
