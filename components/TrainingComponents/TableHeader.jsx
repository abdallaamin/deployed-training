import React from 'react'
import { MenuItem, Button } from '@mui/material';
import FinalExportBtn from '../FinalExportBtn';
import TrainingBulkBtn from './TrainingBulkUpdatBtn';

//  <UsersBulkUpdatBtn UsersIds={UsersIds} btnFlag={btnFlag} />
const TableHeader = ({ TableName, btnFlag, requestids }) => {
    return (
        <div className='mainHeaderContainer' style={{display:'flex',flexDirection:'row' , justifyContent:'space-between'}}>
            <div  className="Tablename" style={{
                padding: '25px 20px 25px 20px', fontStyle: 'normal', color: '#000000',
                fontWeight: '700',
                fontSize: '24px', lineHeight: '32px'
            }}> {TableName}

            </div>
            
            <div className='middleUpdateButtons' style={{ padding: '25px 20px 25px 20px', }}>
                <TrainingBulkBtn btnFlag={btnFlag} requestsids={requestids}/>
            </div>

            <div className='exportButtonContainer' style={{ padding: '25px 20px 25px 20px', }}>
                <FinalExportBtn />
            
            </div>
        </div>
    )
}

export default TableHeader