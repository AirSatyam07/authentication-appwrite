import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Home Page</h1>
      <Link to="/login">Go to Login</Link>
    </div>
  );
};

export default Home;