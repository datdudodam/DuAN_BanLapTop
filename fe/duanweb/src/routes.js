import { Component } from "react";
import {ROUTES } from "./until/router"
import HomePage from "./pages/users/HomePage";
import { Route,Routes } from "react-router-dom";
import MasterLayout from "./pages/users/theme/MasterLayout";
import Profile from "./pages/users/profile";
const renderUserRouter = () =>{
    const userRouter = [
        {
            path:ROUTES.USER.HOME,
            Component: <HomePage/>
        },
        {
            path:ROUTES.USER.Profile,
            Component:<Profile />
        }
    ]
    return(
        <MasterLayout>
        <Routes>
            {
                userRouter.map((item,key) =>(<Route key={key} path={item.path} element={item.Component}/>))
            }
        </Routes>
        </MasterLayout>
    )
}
const RouterCustom = () =>{
    return renderUserRouter();
}
export default RouterCustom;