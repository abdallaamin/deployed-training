import React from 'react'
//import UserTopCard from './userscomponents/UserTopCard';
import Logo from '../../public/logo.png'
import Image from 'next/image'
import styles from '../../styles/manger.module.css'
import MangerCardTop from '../manger components/MangCardTop'

const TopBar = () => {
    return (
        <div className={styles.maintop}>

            <div className={styles.logo}>
                <Image src={Logo} alt="logo" width={97} height={28} />
            </div>


            <div className={styles.usercontainer}>
                <MangerCardTop />
            </div>


        </div>
    )
}

export default TopBar