import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <header className="homepage-header">
                <h1 className="homepage-title">Welcome to Time Management Tool</h1>
                <div className="login-container">
                    <Link to="/login" className="login-link">Login</Link>
                </div>
            </header>
            <main className="main-container">
                <p>This is the homepage of our time management application.</p>
                <p>Manage your activities, log hours, and stay organized.</p>
            </main>
            <Link to="/test">Test Component</Link>

        </div>
    );
};

export default HomePage;

