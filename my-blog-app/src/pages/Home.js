import React from 'react';
import '../App.css';
import "./logo.webp";

const Home = () => {
  return <div> 
<main>
      <img src="logo.webp" alt="Company Logo" className='logo'></img>
      <section>
          <h1>Welcome me to Ostergren Ideas</h1>
          <p>Innovating the Future with AI</p>
      </section>

      <section>
          <h2>Our Journey</h2>
          <p>Our think tank embodies the spirit of innovation in AI. With rich experience in technology and management, Ostergren Ideas is poised to redefine industry standards, turning visionary ideas into realities.</p>
      </section>

      <section>
          <h2>Our Vision</h2>
          <p>We envision a future where AI is a cornerstone of progress across all sectors. Our dedicated blog keeps our community informed and engaged with the latest advancements and exploratory ideas in AI.</p>
      </section>
</main>
</div>;
};

export default Home;
