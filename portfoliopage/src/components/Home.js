import React from 'react';
import '../App.css'; // Assuming you might have common styles here

function Home() {
  return (
    <div className="homePage">
      <h1>Welcome to My Portfolio!</h1>
      <div className="panel theme-mutant-blue">
        <h2>About Me</h2>
        <p>Hello! I’m [Your Name]. Welcome to my comic-themed portfolio.</p>
      </div>
      <div className="panel theme-mutant-yellow">
        <h2>Projects</h2>
        <p>Check out my work!</p>
      </div>
      <div className="panel theme-mutant-blue">
        <h2>Blog</h2>
        <p>Read my latest posts!</p>
      </div>
    </div>
  );
}

export default Home;
