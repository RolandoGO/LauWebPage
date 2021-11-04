import React from 'react'
import { Link } from 'react-router-dom'
import "./footerStyle.css"

export default function Footer() {
    return (
        <div className="footer">
            <span>Autor: <strong>Laura Grethe Ojeda</strong></span>
            <div className="linksContainer">
                <Link className="links"  to="/LauWebPage/adminLogIn">Admin logIn</Link>
                <Link className="links"  to="/LauWebPage/admin">Admin</Link>

            </div>
        </div>
    )
}
