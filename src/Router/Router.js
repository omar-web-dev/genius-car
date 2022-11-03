import { createBrowserRouter } from "react-router-dom";
import Layout2 from "../Layout/Layout2";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element : <Home/>
            },
            {
                path: 'home',
                element : <Home/>
            },
            {
                path: 'login',
                element : <Login/>
            },
        ]
    },
    // {
    //     path: 'login',
    //     element: <Layout2 />,
    //     children : [
    //         {path : 'login', element : <Login/>}
    //     ]
    // }
])