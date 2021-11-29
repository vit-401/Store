import React, {useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {Error404} from "../Components/Error404";
import {Home} from "../Components/Home";
import {Login} from "../Components/Login";


function App() {
    const [isAuth, setIsAuth] = useState(false)


    useEffect(() => {
        const isAuthFromLocal = localStorage.getItem("isAuth")
        if (isAuthFromLocal) {
            setIsAuth(!!isAuthFromLocal)
        }
    }, [])


    const routs = [
        {path: '/', Component: Home, auth: true, access: ['employee', 'manager']},
        {path: '/login', Component: Login, access: ['employee', 'manager']},
    ]


    return <Routes>
        {
            routs.map(item => {
                if (item.auth) {
                    return <Route
                        path={item.path}
                        element={!isAuth ? <Navigate to={"/login"}/> : <item.Component/>}
                    />
                }
                return <Route key={item.path} path={item.path} element={<item.Component/>}/>
            })
        }
        <Route path={"/404"} element={<Error404/>}/>
        <Route path={'*'} element={<Navigate to={"/404"}/>}/>
    </Routes>
}

export default App;


