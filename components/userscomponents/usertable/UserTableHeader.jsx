import React from 'react'
import { MenuItem, Button } from '@mui/material';
import FinalExportBtn from '../../FinalExportBtn';
import styles from '../../../styles/Home.module.css'
// import AddNewAdminModal from '../AddNewAdminModal';
import AddNewSPOCModal from '../AddNewSPOCModal';
import AddNewManagerModal from '../AddNewManagerModal';
import AddNewAdminModal from '../AddNewAdminModal';
import UsersBulkUpdatBtn from '../../userscomponents/usertable/UsersBulkUpdateBtn';
import BulkDeleteBtn from './BulkDeleteBtn';

// <AddNewAdminModal />
const UserTableHeader = ({ TableName, btnFlag, UsersIds }) => {
    return (
        <div className='mainHeaderContainer' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div className="Tablename" style={{
                padding: '25px 20px 25px 20px', fontStyle: 'normal', color: '#000000',
                fontWeight: '700',
                fontSize: '24px', lineHeight: '32px'
            }}> {TableName}

            </div>

            <div className='middleUpdateButtons' style={{ padding: '25px 20px 25px 20px', gap: '5px', display: 'flex', justifyContent: 'space-between', }}>

                <UsersBulkUpdatBtn btnFlag={btnFlag} UsersIds={UsersIds} />
                <BulkDeleteBtn UsersIds={UsersIds} btnFlag={btnFlag} />
            </div>

            <div className='exportButtonContainer' style={{ padding: '25px 20px 25px 20px', display: 'flex', flexDirection: 'row' }}>
                <hr className={styles.dividerhorz} />
                {TableName === "Admins" &&
                    < AddNewAdminModal />
                }
                {TableName === "SPOCS" &&
                    < AddNewSPOCModal />
                }
                {TableName === "Managers" &&
                    < AddNewManagerModal />
                }
                <FinalExportBtn />

            </div>
        </div>
    )
}

export default UserTableHeader