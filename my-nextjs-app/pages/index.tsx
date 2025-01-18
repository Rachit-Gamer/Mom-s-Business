import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1 className={styles.title}>Welcome to My Next.js App</h1>
      <p className={styles.description}>
        This is the homepage of your Next.js application.
      </p>
    </div>
  );
};

export default Home;