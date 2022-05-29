import React, {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {Outlet, Navigate, useLocation} from 'react-router-dom'

export default function PrivateOutlet() {
    const {user} = useContext(AuthContext)
    const location = useLocation();

    return user?.email ? <Outlet /> : <Navigate to='/login' replace state={{ from: location }} />
};