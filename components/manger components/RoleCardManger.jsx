import React from 'react'
import Image from 'next/image'
import mangerunselected from '../../public/mangerunselected.png'

const RoleCardManger = () => {
    return (
        <div style={{
            width: '457px',
            height: '310px',
            borderRadius: '10px',
            background: 'white',
            boxShadow: '0px 0px 4px 2px rgba(0, 0, 0, 0.25)',
        }}>
        <div style={{display:'flex',flexDirection:'column', justifyContent:'center' , alignItems:'center' , }}>
            <Image  style={{marginTop:'40px', marginBottom:'30px'}} src={mangerunselected} alt="logo" width={90} height={177}/>
            <div style={{
                color: '#A4A2A2',
                fontSize: '24px',
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: '32px',
            }}>Manger</div>
        </div>
        </div>
    )
}

export default RoleCardManger