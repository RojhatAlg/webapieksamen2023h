import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EmployeeDashboard = () => {
    const [userActivities, setUserActivities] = useState([]);
    const [pendingActivities, setPendingActivities] = useState([]);

    useEffect(() => {
        // Fetch user activities and pending activities from the server
        fetchUserActivities();
        fetchPendingActivities();
    }, []);

    const fetchUserActivities = async () => {
        try {
            const response = await fetch('/api/user/activities');
            const data = await response.json();
            setUserActivities(data);
        } catch (error) {
            console.error('Error fetching user activities:', error);
        }
    };

    const fetchPendingActivities = async () => {
        try {
            const response = await fetch('/api/pending/activities');
            const data = await response.json();
            setPendingActivities(data);
        } catch (error) {
            console.error('Error fetching pending activities:', error);
        }
    };

    return (
        <div>
            <h2>Employee Dashboard</h2>

            <div>
                <h3>Your Activities</h3>
                <ul>
                    {userActivities.map(activity => (
                        <li key={activity.id}>{activity.name}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h3>Pending Activities</h3>
                <ul>
                    {pendingActivities.map(activity => (
                        <li key={activity.id}>{activity.name}</li>
                    ))}
                </ul>
            </div>

            <Link to="/employee">Go to Employee Component</Link>
        </div>
    );
};

export default EmployeeDashboard;
