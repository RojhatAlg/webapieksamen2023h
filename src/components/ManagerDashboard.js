import React from 'react';
import { Link } from 'react-router-dom';

const ManagerDashboard = () => {
    // Replace with your employee data
    const employees = [
        { id: 1, name: 'Employee A', department: 'Department X' },
        { id: 2, name: 'Employee B', department: 'Department Y' },
        // ... Add more employees
    ];

    return (
        <div>
            <h2>Manager Dashboard</h2>

            <h3>Employees</h3>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Department</th>
                </tr>
                </thead>
                <tbody>
                {employees.map(employee => (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.department}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <Link to="/manager">Go to Manager Component</Link>
        </div>
    );
};

export default ManagerDashboard;

