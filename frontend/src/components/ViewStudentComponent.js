import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import studentService from "../services/studentService";

const ViewStudentComponent = () => {
    let params = useParams();
    const id = params.id;
    const [student, setStudent] = useState({});

    useEffect(()=> {
        studentService.getByID(params.id).then(res => {
            setStudent(res.data)
            console.log(res.data);
        }).catch(error => {
            console.log(error);
        });
    },[]);

    return (
        <div className="center">
        <div className="card" style={{width:"40rem"}} >
            <div className="card-header">
            Hello <strong>{student.firstname}</strong>!
            </div>
            <div className="card-body">
                <p className="card-text"><strong>First Name:</strong> {student.firstname} </p>
                <p className="card-text"  ><strong>Middle Name:</strong> {student.middlename} </p>
                <p className="card-text"><strong>Last Name:</strong>  {student.lastname} </p>
                <p className="card-text"><strong>Email:</strong> {student.email} </p>
                <p className="card-text"><strong>Phone Number:</strong> {student.mobile} </p>
                <p className="card-text"><strong>Address:</strong> {student.address} </p>
                <p className="card-text"><strong>City:</strong> {student.city} <strong> State:</strong> {student.state} </p>               
                <Link to={"/"} className="btn btn-sm btn-dark ">Go back</Link>
                <Link to={"/add-student" + "/" + student.id } className="btn btn-sm btn-primary button-space">Update</Link>
            </div>
        </div>
        </div>
    )
}

export default ViewStudentComponent;