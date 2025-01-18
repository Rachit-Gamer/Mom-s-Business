import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1>Welcome to My Next.js App</h1>
      <p>This is the homepage content.</p>
    </div>
  );
};

export default Home;