import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div>
            <div>
                <h1>Jacky the Maths Tutor</h1>
            </div>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/Prices">Prices</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/Contact">Contact Me</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
