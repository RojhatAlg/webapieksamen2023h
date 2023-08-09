import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Note the use of 'Routes' and 'Link'
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage'; // You would create this component too
import SignupPage from "./components/SignupPage";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          {/* Add more routes for other pages */}
        </Routes>
      </Router>
  );
};

export default App;
