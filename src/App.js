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
                        <Route path="/" element={<ListUserComponent />} />
                        {/*<Route path="/users" element={<ListUserComponent />} />*/}
                        <Route path="/add-user" element={<CreateUserComponent />} />
                        {/*<Route path="/add-user/:id" element={<CreateUserComponent />} />*/}
                        {/*<Route path="/view-user/:id" element={<ViewUserComponent />} />*/}
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
