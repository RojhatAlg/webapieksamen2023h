import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

function EmployeeComponent() {
    const [activities, setActivities] = useState([]);
    const [loggedHours, setLoggedHours] = useState(0);
    const [selectedActivity, setSelectedActivity] = useState('');
    const maxHours = 40; // Example maximum hour limit

    useEffect(() => {
        // Fetch available activities from the server
        fetch('/api/activities')
            .then(response => response.json())
            .then(data => setActivities(data))
            .catch(error => console.error(error));
    }, []);

    const handleLogHours = () => {
        // Send logged hours to the server
        fetch('/api/log-hours', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ activity: selectedActivity, hours: loggedHours })
        })
            .then(response => response.json())
            .then(data => {
                // Update logged hours and any other necessary state
                setLoggedHours(data.updatedLoggedHours);

            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>Employee Dashboard</h1>
            <h2>Available Activities:</h2>
            <ul>
                {activities.map(activity => (
                    <li key={activity.id}>{activity.name}</li>
                ))}
            </ul>
            <h2>Logged Hours: {loggedHours}</h2>
            <input
                type="number"
                value={loggedHours}
                onChange={event => setLoggedHours(event.target.value)}
                max={maxHours}
            />
            <select value={selectedActivity} onChange={event => setSelectedActivity(event.target.value)}>
                <option value="">Select an Activity</option>
                {activities.map(activity => (
                    <option key={activity.id} value={activity.id}>
                        {activity.name}
                    </option>
                ))}
            </select>
            <button onClick={handleLogHours}>Log Hours</button>

            <Link to="/dashboard/employee">Dashboard</Link>
        </div>
    );
}

export default EmployeeComponent;
