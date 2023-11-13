import React from 'react'
import Layout from './Layout'
import styles from '../../styles/manger.module.css'
import Button from '@mui/joy/Button';
import RoleCardManger from '../../components/manger components/RoleCardManger';
import RoleCardSPOC from '../../components/manger components/RoleCardSpoc';


const index = () => {
  return (
    <Layout>
    <div className={styles.selecttitle}>Please Select User Type</div>
      <div style={{ width: "auto", height: '100%', display: 'flex', flexDirection: 'column' , alignItems: 'center', paddingLeft: '20px', paddingTop: '35px' }} >
    
          <div className={styles.cardscontainer}>
          <RoleCardManger />
          <RoleCardSPOC />
        </div>
        
          <div className={styles.selectbtncontainer}>
            <Button  color='danger' component="span"  size='lg' disabled >
              CONFIRM ROLE
            </Button>
          </div>

          </div>

    </Layout>
  )
}

export default index