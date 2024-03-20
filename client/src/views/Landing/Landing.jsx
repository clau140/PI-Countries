import React from "react";
import { Link } from 'react-router-dom'
import './landing.css'

export default function Landing () {
    return (
        <div className="landingContainer">
            <div>
                <div className="text" >Descovery the world</div>
                <div className="buttonDiv">
                    <Link className="buttonLanding" to='/countries'></Link>
                    
                
                </div>
            </div>

        </div>
    )

}