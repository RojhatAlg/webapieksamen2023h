import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <header>
                <h1>Welcome to Time Management Tool</h1>
            </header>
            <main>
                <p>This is the homepage of our time management application.</p>
                <p>Manage your activities, log hours, and stay organized.</p>
            </main>
            <footer>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
            </footer>
        </div>
    );
};

export default HomePage;
