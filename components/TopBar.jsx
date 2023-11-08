import React from 'react'
import Notification from '../public/icons/notification.png'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import UserTopCard from './userscomponents/UserTopCard';

//className="bg-gray-200 h-16 flex items-center justify-between px-6"

const TopBar = () => {
  return (
    <div className={styles.maintop}>

      <div className={styles.topcard}>

        <div className={styles.notificationbtn}>
          <Image src={Notification} alt="logo" width={18} height={21} />
        </div>

        <hr className={styles.dividerhorz} />

        <div className={styles.usercontainer}>
          <UserTopCard />
        </div>
        
      </div>

    </div>
  )
}

export default TopBar      