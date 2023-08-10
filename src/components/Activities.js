import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Activities = () => {
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/departments')
            .then(response => {
                setDepartments(response.data);
            })
            .catch(error => {
                console.error('Error fetching departments:', error);
            });
    }, []);

    return (
        <div>
            <h2>Departments</h2>
            <ul>
                {departments.map(department => (
                    <li key={department._id}> Department Name: {'\n'}
                         {department.name} - Manager: {department.manager ? department.manager.username : 'N/A'}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Activities;
