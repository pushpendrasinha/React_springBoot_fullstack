import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import studentService from "../services/studentService";

const formData = {
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    mobile: "",
    middlename: "",
    address: "",
    city: "",
    state: ""
}

const AddStudentComponent = () => {
    let params = useParams();
    const id = params.id;
    const [student, setStudent] = useState(formData);
    let navigate = useNavigate();

    useEffect(() => {
        if (id === undefined) {
            return
        } studentService.getByID(params.id).then(res => {
            setStudent(res.data)
            console.log(res.data);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    // on change handler to set input value into student
    const onChnageHandler = (event) => {
        setStudent({ ...student, [event.target.name]: event.target.value });
    };

    // on submit handler to get submitted inputs/data
    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (id === undefined) {
            studentService.add(student).then(res => {
                console.log(student);
                navigate("/students-list");
            }).catch(error => {
                console.log(error);
            });
        }
        studentService.update(id, student).then(res => {
            console.log(student);
            navigate("/students-list");
        });
    };

    return (
        <div>
            <div className="center">
                <div className="card">
                    <div className="card-header bg-light">
                        Add New Student
                    </div>
                    <form style={{ padding: "10px" }} onSubmit={onSubmitHandler} >
                        {
                            
                        }
                        <div className="form-row">
                            <div className="form-group col" style={{ display: "inline-block", marginLeft: "5px" }} >
                                <label >First Name</label>
                                <input type="text" className="form-control" placeholder="First Name" name="firstname"
                                    value={student.firstname} onChange={onChnageHandler} />
                            </div>
                            <div className="form-group col" style={{ display: "inline-block", marginLeft: "5px" }}>
                                <label >Middle Name</label>
                                <input type="text" className="form-control" placeholder="Middle Name" name="middlename"
                                    value={student.middlename} onChange={onChnageHandler} />
                            </div>
                            <div className="form-group col" style={{ display: "inline-block", marginLeft: "5px" }}>
                                <label >Last Name</label>
                                <input type="text" className="form-control" placeholder="Last Name" name="lastname"
                                    value={student.lastname} onChange={onChnageHandler} />
                            </div>
                        </div>
                        <div className="form-group col" style={{ marginLeft: "5px" }}>
                            <label >Email Id</label>
                            <input type="email" className="form-control" id="email" placeholder="example@example.com" name="email"
                                value={student.email} onChange={onChnageHandler} />
                        </div>
                        <div className="form-group col" style={{ marginLeft: "5px" }}>
                            <label >Phone Number</label>
                            <input type="text" className="form-control" id="phone" placeholder="Phone Number" name="mobile"
                                value={student.mobile} onChange={onChnageHandler} />
                        </div>
                        <div className="form-group col" style={{ marginLeft: "5px" }}>
                            <label hmlfor="inputAddress">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name="address"
                                value={student.address} onChange={onChnageHandler} />
                        </div>
                        <div className="form-row">
                            <div className="form-group col" style={{ marginLeft: "5px" }}>
                                <label >City</label>
                                <input type="text" className="form-control" id="inputCity" name="city"
                                    value={student.city} onChange={onChnageHandler} />
                            </div>
                            <div className="form-group col" style={{ marginLeft: "5px" }}>
                                <label >State</label>
                                <input type="text" className="form-control" id="inputCity" name="state"
                                    value={student.state} onChange={onChnageHandler} />
                            </div>
                        </div>
                        <br></br>
                        <Link to={"/students-list"} className="btn btn-sm btn-dark">Go back</Link>
                        <button type="submit" className="btn btn-success btn-sm button-space">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default AddStudentComponent;