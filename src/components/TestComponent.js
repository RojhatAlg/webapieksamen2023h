// src/components/TestComponent.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TestComponent = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('/api/test')
            .then(response => {
                setMessage(response.data.message);
            })
            .catch(error => {
                console.error('Error fetching test message:', error);
            });
    }, []);

    return (
        <div>
            <h2>Test Component</h2>
            <p>Message from the server: {message}</p>
        </div>
    );
};

export default TestComponent;
