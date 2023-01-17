import React, { useState } from "react";
// import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const registrationForm = {
    userName : "",
    email : "",
    password : ""
}

const SignupComponent = ( props ) => {
    // console.log(props);
    const [user, setUser] = useState(registrationForm);
    let navigate = useNavigate();

    const onChnageHandler = (event) => {
        setUser( {...user, [event.target.name]: event.target.value });
    }

    const submit = (event) =>{
        event.preventDefault();
        props.registerHandler(user);
        navigate("/login");
      
    }

    return (
        <div>
             <div className="container col-md-7 mt-5">
                <div className="card">
                    <div className="card-header bg-light">
                        Register
                    </div>
            <form className="m-3" onSubmit={submit} >
            <div className="form-group row ">
                    <label htmlFor="Username" className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="Username" placeholder="Username" name="userName"
                        value={user.userName} onChange={onChnageHandler} />
                    </div>
                </div>
                <div className="form-group row mt-2">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Email" name="email"
                        value={user.email} onChange={onChnageHandler} />
                    </div>
                </div>
                <div className="form-group row mt-2">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" placeholder="Password" name="password"
                        value={user.password} onChange={onChnageHandler} />
                    </div>
                </div>
                <div className="form-group row mt-2">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </div>
            </form>
        </div>
        </div>
        </div>
    )

}

// const mapDispatchToProps = dispatch => ({
//     registerHandler: user => dispatch(register(user)),
//   });

// export default connect(null, mapDispatchToProps) (SignupComponent);

export default SignupComponent;