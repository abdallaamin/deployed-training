import React from 'react'
import { BiChevronDown } from 'react-icons/bi';
import styles from '../../styles/Home.module.css'
import AdminAccountMenu from '../admin components/AdminAccountMenu'

const UserTopCard = () => {
    return (
        <div className={styles.mainusercard}>
            <div>
                <AdminAccountMenu />
            </div>
            <div className={styles.usercardname}>Abdalla Amin</div>
            <div style={{ paddingRight: '23px', paddingTop: '7px' }}>
                <BiChevronDown size={20}/>
            </div>
        </div>
    )
}

export default UserTopCard