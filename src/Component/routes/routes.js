import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Layout from '../Layout/Layout';
import Login from '../Login/Login';
import Order from '../Order/Order';
import Private from '../Private/Private';
import Register from '../Register/Register';

const routes =createBrowserRouter([{
    path:'/',
    element:<Layout></Layout>,
    children:[
        {
            path:'/home',
            element:<Home></Home>
        },{
            path:'/login',
            element:<Login></Login>
        },{
            path:'/register',
            element:<Register></Register>
        },{
            path:'/order',
            element:<Private><Order></Order></Private>
        }
    ]
}])

export default routes;