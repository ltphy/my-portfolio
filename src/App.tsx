import React, { useState } from 'react';
import './App.css';
import MainLayout from "./layout";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IRouter, routes } from "./constants/routes.constant";
import { DrawerToggleProvider } from "./context/DrawerOpenProvider/drawerOpenProvider.context";

const App = () => {
    return (
        <BrowserRouter>
            <DrawerToggleProvider>
                <MainLayout>
                    <Routes>
                        {routes.map((route: IRouter) => (
                            <Route
                                key={route.title}
                                path={route.path}
                                element={<route.component />}
                            />
                        ))}
                    </Routes>
                </MainLayout>
            </DrawerToggleProvider>
        </BrowserRouter>
    );
};

export default App;
