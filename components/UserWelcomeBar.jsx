import React from 'react'
import styles from '../styles/Home.module.css'
import AltUpload from './AltUpload'

//<Button sx={{ color: 'red', borderRadius: '50%' }}>download </Button>

const WelcomeBar = () => {
  return (
    <div className={styles.welcomemaincontainer}>

      <div className={styles.welcometopcontainer}>
        <div className={styles.welcomeleftcontainer}>
          <div className={styles.welcomtitle}>Hello Abdalla  👋</div>
          <div className={styles.welcomemessage}>Let's check your training Requests !</div>
        </div>
        <div className={styles.welcomerightcontainer}>
        </div>
      </div>

      <div className={styles.welcomedowncontainer}>
        <hr className={styles.divider} />
      </div>
    </div>
  )
}

export default WelcomeBar