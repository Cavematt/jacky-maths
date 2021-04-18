import React from 'react'
import {Link} from "react-router-dom"
import "./Prices.css"
import Average from "./Average.jpg"

function Prices() {
    return (
        <div>
            <div className="allPrice">
                <img className="pricePhoto" src={Average} alt="average prices table" />
                <div className="priceText">
                    <h1>Prices</h1>
                    <p>As you can see from the graphic, which is dated 2013/14, My prices are extremelly competitive and regular lessons can be paid for via standing order, Cash or bank transfer</p>
                    <p>I charge £10 per 30 minutes or £18 per hour within Thurso</p>
                    <p>Outwith Thurso I charge 45p per mile return to Thurso to cover the cost of fuel and my time, although this can be reduced if I have other students in your area who are taught afterwards or before. Please contact me for further information. </p>
                    <div className="buttonPriceContainer">
                        <Link className="linkListprice" to="/testimonials">Check out my testimonials</Link>
                        <Link className="linkListprice" to="/Contact">Contact Me</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Prices
