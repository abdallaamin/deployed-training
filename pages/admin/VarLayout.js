import React from 'react'
import SideBar from '../../components/sidebar/SideBar'
import TopBar from '../../components/TopBar'
import WelcomeBar from '../../components/WelcomeBar'
import Styles from '../../styles/Home.module.css'
import Roundedbtn from '../../components/Roundedbtn'

{
    // <div style={{ position: 'absolute', right: 0, bottom: '-20px', padding: '55px 35px 45px 10px' }}>
    //     <Roundedbtn />
    // </div>
}
const Layout = ({ children }) => {
    return (
        <div className={Styles.maincontainer}>
            <SideBar />
            <div className={Styles.rightcontainer}>
                <TopBar />
                <WelcomeBar />
                <main>{children}</main>
            </div>

        </div>
    )
}

export default Layout