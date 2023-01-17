import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login, logout } from "../services/Actions/action";

const Header = (props) => {
    // console.log(props);
    let navigate = useNavigate();

    const logout = () => {
        props.logoutHandler();
        navigate("/login");
    }

    // if(props.isLoggedIn){
    //         backgroundColor: "DodgerBlue"
    // }
    // }
   

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark p-3 ">
                <Link to={"/"} className="navbar-brand">
                    Students Management App
                </Link>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item" style={ props.isLoggedIn ? { display : 'block' } : { display: 'none' } } >
                        <Link to={"/students-list"} className="nav-link">
                            All Students
                        </Link>
                    </li>
                    <li className="nav-item" style={ props.isLoggedIn ? { display : 'block' } : { display: 'none' } } >
                        <Link to={"/add-student"} className="nav-link">
                            Add Student
                        </Link>
                    </li>
                    <li className="nav-item" style={ !props.isLoggedIn ? { display: 'block' } : { display: 'none' } } >
                        <Link to={"/signup"} className="nav-link">
                            Signup
                        </Link>
                    </li>
                    <li className="nav-item">
                        {!props.isLoggedIn ? ( <Link to={"/login"} className="nav-link">
                            Login </Link>  ) : (
                            <button onClick={logout} className="nav-link btn btn-link"  >
                                Logout </button>
                            )}
                    </li>
                </div>
            </nav>
        </header>
    )
}

export default Header;