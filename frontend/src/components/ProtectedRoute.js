import { useEffect } from 'react';
import  { Link, useNavigate } from 'react-router-dom';

const ProtectedRoute = (props) => {

    const { Component } = props;
    const navigate = useNavigate();
    useEffect(() => {
        let isLoggedIn = localStorage.getItem('user');
        if(!isLoggedIn){
            navigate("/login");
        }
    });
    return (
        <div>
            <Component/>
        </div>
    )

}

export default ProtectedRoute;