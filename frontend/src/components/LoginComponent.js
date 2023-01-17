import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginComponent = ( props ) => {
    // console.log(props);
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
  
    let navigate = useNavigate();

    const onSubmit = (event) => {
        event.preventDefault();
        props.loginHandler({userName, password});
    }

    if (props.isLoggedIn) {
        return navigate("/students-list");
        console.log(userName, password);  
      }    

    return (
        <div>
            <div className="container col-md-7 mt-5">
                <div className="card">
                    <div className="card-header bg-light">
                        Login
                    </div>
                    <form className="m-3" onSubmit={onSubmit} >
                        <div className="form-group row ">
                            <label htmlFor="Username" className="col-sm-2 col-form-label">Username</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="Username" placeholder="Username" name="userName"
                                    onChange={e => setUserName(e.target.value)} />
                            </div>
                        </div>

                        <div className="form-group row mt-2">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword3" placeholder="Password" name="password"
                                     onChange={e => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="form-group row mt-2">
                            <div className="col-sm-10">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

} 

export default LoginComponent;