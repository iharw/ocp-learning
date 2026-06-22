import React from 'react';

export default function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Hello I am Harw</h1>
      <p style={styles.message}>Welcome to my React Hello World App</p>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '3rem',
    color: '#0066cc',
    margin: '20px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
  },
  message: {
    fontSize: '1.2rem',
    color: '#333',
  },
};
