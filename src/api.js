const createActivity = async (activityData) => {
    try {
        const response = await fetch('/activities', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(activityData),
        });

        if (!response.ok) {
            throw new Error('Failed to create activity');
        }

        const createdActivity = await response.json();
        // Do something with the created activity (e.g., update state)

    } catch (error) {
        console.error('Error creating activity:', error);
        // Handle the error gracefully (e.g., show an error message to the user)
    }
};

export { createActivity };