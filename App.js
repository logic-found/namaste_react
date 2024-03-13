import React from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter, Outlet, Route,Routes, createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom';
import Home from './Home';
import PageNotFound from './PageNotFound';
import About from './About';
import Navbar from './Navbar';

const rootElement = document.getElementById('root');

const App = () => {
    return (
        <>
        <Navbar/>
        <Outlet/>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        children: [
            {
                path : "/",
                element : <Home/>
            },
            {
                path : "/about",
                element : <About/>
            },
        ],
        errorElement : <PageNotFound/>
    }
])


const root = createRoot(rootElement);
root.render(<RouterProvider router={appRouter}/>);