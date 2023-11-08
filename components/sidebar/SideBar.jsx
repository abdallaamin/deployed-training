import React from 'react'
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './sidebar.module.css';
import Image from 'next/image'
import Logo from '../../public/logo.png'

//icons 
import Dashboard from '../../public/icons/1.png'
import Training from '../../public/icons/2.png'
import Adhoc from '../../public/icons/3.png'
import Cancellation from '../../public/icons/4.png'
import Users from '../../public/icons/5.png'
import Settings from '../../public/icons/6.png'

const sidebarNavItems = [
    {
        display: 'Dashboard',
        icon: Dashboard,
        to: '/admin/dashboard',
        section: 'dashboard'
    },
    {
        display: 'Training Requests',
        icon: Training,
        to: '/admin/training',
        section: 'training'
    },
    {
        display: 'Ad hoc Requests',
        icon: Adhoc,
        to: '/admin/adhoc',
        section: 'adhoc'
    },
    {
        display: 'Cancellation Requests',
        icon: Cancellation,
        to: '/admin/cancellation',
        section: 'cancellation'
    },
    {
        display: 'Users',
        icon: Users,
        to: '/admin/users',
        section: 'users'
    },
];

const sidebarSItems = [
    {
        display: 'Settings',
        icon: Settings,
        to: '/admin/settings',
        section: 'settings'
    },

];


const SideBar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const router = useRouter();

    useEffect(() => {
        const sidebarItem = sidebarRef.current.querySelector(`.${styles.sidebarMenuItem}`);
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);

            // Initialize active index based on the current route
            const curPath = router.pathname.split('/')[2];
            const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
            setActiveIndex(curPath.length === 0 ? 0 : activeItem);
        }, [router]);

    // Change active index and navigate when a sidebar item is clicked
    const handleSidebarItemClick = (index, to) => {
        setActiveIndex(index);
        router.push(to);
    };
    // change active index
    // useEffect(() => {
    //     const curPath = router.pathname.split('/')[2];
    //     const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
    //     setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    // }, [router]);

    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarLogo}>
                <Image src={Logo} alt="logo" width={132} height={45} className={styles.voisicon} />
            </div>

            <div ref={sidebarRef} className={styles.sidebarMenu}>
                <div
                    ref={indicatorRef}
                    className={styles.sidebarMenuIndicator}
                    style={{
                        transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                    }}
                ></div>
                <div className={styles.maintitle}>MAIN MENU</div>
                {sidebarNavItems.map((item, index) => (
                    <Link href={item.to} key={index} >
                            <div className={`${styles.sidebarMenuItem} ${activeIndex === index ? styles.active : ''}`}
                            onClick={() => handleSidebarItemClick(index, item.to)} >
                            <Image src={item.icon} alt="icon" width='16px' height='16px' 
                                className={activeIndex === index ? styles.activeIcon : ''}/>
                                <div className={styles.sidebarMenuItemText}>{item.display}</div>
                            </div>
                    </Link>
                ))}
            </div>


            <div className={styles.dividercontainer}>
                <hr className={styles.dividersolid} />
            </div>

            <div className={styles.sidebarMenu}>
                <div
                    className={styles.sidebarMenuIndicator}
                ></div>
            <div className={styles.preftitle}>PREFRENCE</div>
            {sidebarSItems.map((item, index) => (
                <Link href={item.to} key={index} >
                    <div className={`${styles.sidebarMenuItem}`}
                        onClick={() => handleSidebarItemClick(index, item.to)}>
                        <Image src={item.icon} alt="icon" width='16px' height='16px' 
                            className={activeIndex === index ? styles.activeIcon : ''}/>
                        <div className={styles.sidebarMenuItemText}>{item.display}</div>
                    </div>
                </Link>
            ))}
            </div>



        </div>
    )
}

export default SideBar


