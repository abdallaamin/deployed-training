import React from 'react'
import { BiChevronDown } from 'react-icons/bi';
import styles from '../../styles/manger.module.css'
import UserAccountMenu from './UserAccountMenu'

{
    //<div style={{
//     color: 'white', paddingLeft: '4px', paddingTop: '3.5px', fontStyle: 'normal',
//         fontWeight: '500',
//             fontSize: '13px',
//                 lineHeight: '20px'
// }}> KA</div >
//className={styles.usercardlogo}
}
const MangerCardTop = () => {
    return (
        <div className={styles.mainusercard}>
            
            <div >
                <UserAccountMenu />
            </div>
            <div className={styles.usercardname}>Kareem Abdelsadek</div>
            <div style={{ paddingRight: '23px', paddingTop: '7px' }}>
                <BiChevronDown size={20} color='white' />
            </div>
        </div>
    )
}

export default MangerCardTop