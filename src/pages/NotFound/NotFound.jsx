import React from "react";
import Logo from "./404.jpg"
import './style.scss'

export default function NotFound() {

    return (
        <div className="not-found">
            <img src={Logo} alt="404" />
            <h3> Opsss Page Not Found</h3>
            <div className="text">
                <p>The link you followed probably broken, or the page has been removed return to <a href='/' >home page</a></p>
            </div>
        </div>
    )
}
