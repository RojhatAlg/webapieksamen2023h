import React, { useState, useEffect } from 'react';

const ManagerComponent = () => {
    const [activities, setActivities] = useState([
        { id: 1, name: 'Activity 1', department: 'Department X', hours: 8 },
        { id: 2, name: 'Activity 2', department: 'Department Y', hours: 6 },
        // ... Add more activities
    ]);
    const [newActivity, setNewActivity] = useState({
        name: '',
        department: '',
        description: '',
        hours: '',
    });

    useEffect(() => {
        // Fetch manager's activities from the server
        fetchManagerActivities();
    }, []);

    const fetchManagerActivities = async () => {
        try {
            // Simulate fetching data from the server
            // const response = await fetch('/api/manager/activities');
            // const data = await response.json();
            // setActivities(data);
        } catch (error) {
            console.error('Error fetching manager activities:', error);
        }
    };

    const handleCreateActivity = async () => {
        try {
            // Simulate creating an activity and updating the list
            // const response = await fetch('/api/create/activity', {
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json',
            //   },
            //   body: JSON.stringify(newActivity),
            // });
            // if (response.ok) {
            //   fetchManagerActivities();
            //   setNewActivity({
            //     name: '',
            //     department: '',
            //     description: '',
            //     hours: '',
            //   });
            // }
        } catch (error) {
            console.error('Error creating activity:', error);
        }
    };

    const handleDeleteActivity = async (activityId) => {
        try {
            // Simulate deleting an activity and updating the list
            // const response = await fetch(`/api/delete/activity/${activityId}`, {
            //   method: 'DELETE',
            // });
            // if (response.ok) {
            //   fetchManagerActivities();
            // }
        } catch (error) {
            console.error('Error deleting activity:', error);
        }
    };

    return (
        <div>
            <h2>Manager Component</h2>

            <div>
                <h3>Active Activities</h3>
                <ul>
                    {activities.map(activity => (
                        <li key={activity.id}>
                            {activity.name} - {activity.department} - {activity.hours} hours
                            <button onClick={() => handleDeleteActivity(activity.id)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3>Create New Activity</h3>
                <input
                    type="text"
                    placeholder="Activity Name"
                    value={newActivity.name}
                    onChange={e =>
                        setNewActivity({ ...newActivity, name: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Department"
                    value={newActivity.department}
                    onChange={e =>
                        setNewActivity({ ...newActivity, department: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={newActivity.description}
                    onChange={e =>
                        setNewActivity({ ...newActivity, description: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Hours"
                    value={newActivity.hours}
                    onChange={e =>
                        setNewActivity({ ...newActivity, hours: e.target.value })
                    }
                />
                <button onClick={handleCreateActivity}>Create Activity</button>
            </div>
        </div>
    );
};

export default ManagerComponent;
