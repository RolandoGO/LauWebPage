import React from 'react'
import { Link } from 'react-router-dom'
import "./footerStyle.css"

export default function Footer() {
    return (
        <div className="footer">
            
            <div className="linksContainer">
                <Link className="links"  to="/adminLogIn">Admin logIn</Link>
                <Link className="links"  to="/admin">Admin</Link>

            </div>
        </div>
    )
}
