import React, { useState, useEffect } from 'react';
import UserService from '../services/UserService';
import { useNavigate } from 'react-router-dom';

function ListUserComponent() {
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);

    const deleteUser = (id) => {
        UserService.deleteUser(id).then(() => {
            setUsers(users.filter(user => user.id !== id));
        });
    }

    const viewUser = (id) => {
        navigate(`/view-users/${id}`);
    }

    const editUser = (id) => {
        navigate(`/add-user/${id}`);
    }

    const addUser = () => {
        navigate('/add-user/add');
    }
    
    useEffect(() => {
        UserService.getUsers().then((res) => {
            if (res.data == null) {
                navigate('/add-user/add');
            }
            setUsers(res.data);
        });
    }, []);

    return (
        <div>
            <h2 className="text-center">Users List</h2>
            <div className="row">
                <button className="btn btn-primary" onClick={addUser}> Add User</button>
            </div>
            <br />
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th> User First Name</th>
                            <th> User Last Name</th>
                            <th> User Email Id</th>
                            <th> Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user =>
                            <tr key={user.id}>
                                <td> {user.firstName} </td>
                                <td> {user.lastName}</td>
                                <td> {user.emailId}</td>
                                <td>
                                    <button onClick={() => editUser(user.id)} className="btn btn-info">Update</button>
                                    <button style={{ marginLeft: "10px" }} onClick={() => deleteUser(user.id)} className="btn btn-danger">Delete</button>
                                    <button style={{ marginLeft: "10px" }} onClick={() => viewUser(user.id)} className="btn btn-info">View</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListUserComponent;