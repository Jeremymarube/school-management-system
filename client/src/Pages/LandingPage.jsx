import React from 'react';
import Typewriter from 'typewriter-effect';

export default function LandPage() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1>
        <Typewriter
          options={{
            strings: ['Welcome to School Management System'],
            autoStart: true,
            loop: false,
            delay: 75,
          }}
        />
      </h1>
      <p style={{ marginTop: '1rem', fontSize: '1.2rem' }}>
        <Typewriter
          options={{
            strings: ['Manage Students, Teachers, and Classes with ease.'],
            autoStart: true,
            loop: false,
            delay: 50,
            cursor: '',
          }}
        />
      </p>
    </div>
  );
}