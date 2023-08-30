import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ListUserComponent from './components/ListUserComponent';
import CreateUserComponent from './components/CreateUserComponent';
import ViewUserComponent from './components/ViewUserComponent';


function App() {
    return (
        <div>
            <Router>

                <div className="container">
                    <Routes>
                        <Route path="/" exact component={ListUserComponent}></Route>
                        <Route path="/users" component={ListUserComponent}></Route>
                        <Route path="/add-users/:id" component={CreateUserComponent}></Route>
                        <Route path="/view-user/:id" component={ViewUserComponent}></Route>
                    </Routes>
                </div>
            </Router>

        </div>
    );
}
export default App;