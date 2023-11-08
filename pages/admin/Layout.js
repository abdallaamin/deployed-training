import React from 'react'
import TopBar from '../../components/TopBar'
import UserWelcomeBar from '../../components/UserWelcomeBar'
import Styles from '../../styles/Home.module.css'
import Roundedbtn from '../../components/Roundedbtn'

import SideBar from '../../components/sidebar/SideBar'



{
  // <div style={{ right: 0, padding: '55px 35px 45px 10px' }}>
  //   <Roundedbtn />
  //      </div>

}
const Layout = ({ children }) => {
  return (
    <div className={Styles.maincontainer}>
      <SideBar />
      <div className={Styles.rightcontainer}>
        <TopBar />
        <UserWelcomeBar />

        <main>{children}</main>

      </div>
    </div>
  )
}

export default Layout