import React from "react";
import {useRoutes} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store";
import {RequestStatusType} from "./app-reducer";
import {Home} from "../components/Home/Home";



export const App = React.memo(() => {

    const status = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status)
    const error = useSelector<AppRootStateType, string | null>((state) => state.app.error)

    const dispatch = useDispatch()


    let routes = useRoutes([
        {path: '/', element: <Home/>},
    ]);

    return routes;

})
