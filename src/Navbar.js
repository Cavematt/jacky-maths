import React from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
    return (
        <div className="navbarAll">
            <div class="navLinko">
                <Link to="/" class="navTitle">Jacky the Maths Tutor</Link>
                <ul>  
                    <li class="navLinks">                      
                    <Link class="navLink" to="/Contact">Contact Me</Link>
                    </li>
                </ul>
                <ul>
                    <li class="navLinks">
                    <Link class="navLink" to="/Prices">Prices</Link>
                    </li>
                </ul>
                <ul>
                    <li class="navLinks">
                        <Link class="navLink" to="/Testimonials">Testimonials</Link>
                    </li>
                </ul>
                <ul>
                    <li class="navLinks">
                        <Link class="navLink" to="/">Home</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
