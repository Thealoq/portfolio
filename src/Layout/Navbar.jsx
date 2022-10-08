import "../Layout/layout.css"
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState, useEffect } from "react";
export default function Navbar() {
    const [Content, SetContent] = useState(false);
    function OpenMenu() {
        if (Content == false) {
            SetContent(true)
            document.getElementById("nav-res").style.display = "flex"
        } else {
            SetContent(false)
            document.getElementById("nav-res").style.display = "none"
        }
    }
    return (
        <div>
            <div className="navbar-body">
                <div className="nav-page">
                    <div className="title">Portfolio</div>
                    <div className="nav-pages">
                        <div className="page"><a href="/">Bio</a></div>
                        <div className="page"><a href="/">Projects</a></div>
                        <div className="page"><a href="/">Github</a></div>
                    </div>
                    <div className="space-nav">
                      <GiHamburgerMenu onClick={event => OpenMenu(event)} size={24}/>
                    </div>
                </div>
            </div>
            <div id="nav-res" className="pages">
                <div className="page"><a href="/">Bio</a></div>
                <div className="page"><a href="/">Projects</a></div>
                <div className="page"><a href="/">Github</a></div>
            </div>
        </div>
    )
}