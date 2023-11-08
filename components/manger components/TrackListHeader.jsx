import React from 'react'
import styles from '../../styles/manger.module.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const TrackListHeader = () => {
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' , marginTop:'29px' }}>
                <div className={styles.tracktitle}>Track Training Requests</div>
                <ArrowDropDownIcon size={30} style={{ color: '#BE0000', marginTop: '8px' }} />
            </div>
            <div style={{
                marginLeft: '18px',
                marginTop: '10px',
                color: '#767474',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: '24px'
            }}>Deadline for submitting requests : 12/2/2023  </div>
        </div>
    )
}

export default TrackListHeader