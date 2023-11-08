import React from 'react'
import Image from 'next/image';
import emptytraining from '../../public/trackprogress.png'
const EmptyTrainingRequest = () => {
    return (
        <>
            <Image src={emptytraining} alt='emptyimage' width={222} height={218} style={{marginTop:'145px'}}/>
            <div style={{ 
            height:'64',
            marginTop:'30px',
            width: '555px',
            color: '#000',
            textAlign: 'center',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '32px',
        }}>You don't have training requests to track yet. You can add  training requests from the button above</div>
        </>
        )
}

export default EmptyTrainingRequest