
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import Activities from './components/Activities';
import EmployeeDashboard from './components/EmployeeDashboard';
import ManagerDashboard from './components/ManagerDashboard';
import TestComponent from "./components/TestComponent";
import EmployeeComponent from "./components/EmployeeComponent";
import ManagerComponent from "./components/ManagerComponent";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/departments" element={<Activities />} />
                <Route path="/dashboard/employee" element={<EmployeeDashboard />} />
                <Route path="/dashboard/manager" element={<ManagerDashboard />} />
                <Route path="/test" element={<TestComponent />}/>
                <Route path="/employee" element={<EmployeeComponent />} />
                <Route path="/manager" element={<ManagerComponent/>} />

            </Routes>
        </Router>
    );
};

export default App;
