// src/pages/Home.jsx

import React from 'react';
import AnimatedSection from '../Animations/AnimatedSection';

const Home = () => {
  return (
    <div className="space-y-20 p-8">
      <AnimatedSection>
        <h1 className="text-4xl font-bold">Welcome to My Website</h1>
      </AnimatedSection>

      <AnimatedSection>
        <p className="text-lg">
          This section fades in when you scroll down to it.
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <div className="p-4 bg-blue-100 rounded-lg shadow">
          <h2 className="text-2xl font-semibold">Card Content</h2>
          <p>This card uses the same animation wrapper.</p>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;
