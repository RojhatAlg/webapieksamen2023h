import React, { useState } from 'react';
import './CSS/LoginPage.css';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const { isAdmin, token } = await response.json();
                // Store the token in localStorage or session storage for authentication purposes
                localStorage.setItem('token', token);

                if (isAdmin) {
                    navigate('/dashboard/manager');
                } else {
                    navigate('/dashboard/employee');
                }
            } else {
                setError('Invalid email or password');
            }
        } catch (error) {
            setError('An error occurred');
        }
    };

    return (
        <div className="loginpage-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Login</button>
                {error && <p className="error-message">{error}</p>}
            </form>
            <footer className="loginpage-footer">
                <Link to="/">Home</Link>
            </footer>
        </div>
    );
};

export default LoginPage;
