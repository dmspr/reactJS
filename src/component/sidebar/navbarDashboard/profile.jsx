import React from "react";
import { CgProfile } from 'react-icons/cg'
import './profile.scss'


export default function Profile() {
    const handleLogout = () => {
        localStorage.removeItem('access_token')
        window.location = '/'
    }
    return (
        <div className="dropdown">
            <button className="dropbtn"><CgProfile size="25px" /></button>
            <div className="dropdown-content">
                <a href="/profile">Edit Profile</a>
                <a href="/setting">Setting</a>
                <a href='/' onClick={() => handleLogout()}>Log Out</a>
            </div>
        </div>
    )
}