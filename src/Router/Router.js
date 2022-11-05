import { createBrowserRouter } from "react-router-dom";
import Layout2 from "../Layout/Layout2";
import Main from "../Layout/Main";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Home from "../Pages/Home/Home";
import Orders from "../Pages/Orders/Orders";
import Login from "../Pages/Login";
import SingUp from "../Pages/SingUp";

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
            {
                path: 'sing-up',
                element : <SingUp/>
            },
            {
                path: 'service/:id',
                element : <CheckOut/>,
                loader :({params}) => fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path: 'orders',
                element : <Orders/>,
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