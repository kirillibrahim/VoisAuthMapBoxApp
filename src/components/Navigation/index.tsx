import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css'; // Import the CSS module

const Navigation: React.FC = () => {
  return (
    <nav className={styles.nav}> 
      <ul className={styles.list}>
        {/* <li className={styles.item}>
          <Link to="/" className={styles.link}>Home</Link>
        </li>
        <li className={styles.item}>
          <Link to="/register" className={styles.link}>Register</Link>
        </li>
        <li className={styles.item}>
          <Link to="/login" className={styles.link}>Login</Link>
        </li> */}
        <li className={styles.item}>
          {/* <a href="/users" className={styles.link}>User List</a> */}
          <Link to="/users" className={styles.link}>User List</Link>
        </li>
        <li className={styles.item}>
          <Link to="/map" className={styles.link}>Map</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
