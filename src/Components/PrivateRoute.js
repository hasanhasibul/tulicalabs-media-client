import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const Privateroute = ({ children }) => {
    const username = localStorage.getItem('email')
    return (
        <div>
            {
                username ? <Outlet /> : <Navigate to="/login" />
            }
        </div>
    );
};

export default Privateroute;