import React, { useState, useEffect } from 'react';
import UserService from '../services/UserService';
import { useNavigate,useParams } from 'react-router-dom';

function CreateUserComponent(props) {
    const navigate = useNavigate();
    const { id } = useParams();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');

    useEffect(() => {
        if (id !== '_add') {
            UserService.getUserById(id).then((res) => {
                let user = res.data;
                setFirstName(user.firstName);
                setLastName(user.lastName);
                setEmailId(user.emailId);
            });
        }
    }, [id]);

    const saveOrUpdateUser = (e) => {
        e.preventDefault();
        let user = {
            firstName: firstName,
            lastName: lastName,
            emailId: emailId
        };

        if (id === '_add') {
            UserService.createUser(user).then(() => {
                navigate('/users');
            });
        } else {
            UserService.updateUser(user, id).then(() => {
                navigate('/users');
            });
        }
    }

    const cancel = () => {
        navigate('/users');
    }

    const getTitle = () => {
        return id === '_add' ? <h3 className="text-center">Add User</h3> : <h3 className="text-center">Update User</h3>;
    }

    return (
        <div>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {getTitle()}
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> First Name: </label>
                                    <input placeholder="First Name" name="firstName" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label> Last Name: </label>
                                    <input placeholder="Last Name" name="lastName" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label> Email Id: </label>
                                    <input placeholder="Email Address" name="emailId" className="form-control" value={emailId} onChange={(e) => setEmailId(e.target.value)} />
                                </div>
                                <button className="btn btn-success" onClick={saveOrUpdateUser}>Save</button>
                                <button className="btn btn-danger" onClick={cancel} style={{ marginLeft: "10px" }}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateUserComponent;
