import React, { useEffect, useState } from "react";
import * as Icons from "react-icons/fa"
import { Link } from 'react-router-dom'
import { sidebarData } from "../sidebar";
import './style.scss'
import { IconContext } from "react-icons/lib";
import Profile from "./profile";


export default function NavbarDash() {
    const [mobile, setMobile] = useState(false)
    const [sidebar, setSidebar] = useState(false)

    useEffect(() => {
        if (window.innerWidth < 1065) {
            setMobile(true)
        }
    }, [])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1065) {
                setMobile(true)
            } else {
                setMobile(false)
                setSidebar(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <nav className="navbar-dash"> <Link to="#" className='menu-bars' onClick={() => setSidebar(false)}>
                    HOMEPAGE
                </Link>
                    {!mobile && (<ul className="nav-menu-items">
                        {sidebarData.map((v, idx) => {
                            return (
                                <li key={idx} className={v.nName}>
                                    <Link to={v.path}>
                                        {v.icon}
                                        <span>{v.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>)}
                    {!mobile && <Profile />}

                    {mobile && (
                        <div className="sidebar-toggle">{sidebar ? <Icons.FaTimes className="sidebar-toggle-logo" onClick={() => setSidebar(!sidebar)} /> : <Icons.FaBars className="sidebar-toggle-logo" onClick={() => setSidebar(!sidebar)} />}</div>
                    )}
                </nav>
                <div className={sidebar ? "sidebar active" : "sidebar"}>
                    {!mobile && (<ul className="sidebar-itemss">
                        {sidebarData.map((v, idx) => {
                            return (
                                <li key={idx} className={v.sName} onClick={() => setSidebar(false)}>
                                    <Link to={v.path}>
                                        {v.icon}
                                        <span>{v.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>)}
                    <Profile />
                </div>
            </IconContext.Provider>
        </>

    )
}

