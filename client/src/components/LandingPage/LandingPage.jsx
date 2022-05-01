import React from 'react';
import {Link} from 'react-router-dom';
import styles from './LandingPage.module.css'



function LandingPage() {
  return (
    <div className={styles.bg}>
      <h2 className = {styles.author}> By Cristina Rizzolli</h2>
      <Link to='/home'>
        <button className={styles.buttonIng}>Start</button>
      </Link>
    </div>
  )
}

export default LandingPage