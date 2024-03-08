import React from "react";
import { Link } from 'react-router-dom'
import './landing.css'

export default function Landing () {
    return (
        <div className="container">
            <div>
                <h1>Discover the world</h1>
                <div>
                    <button>
                        <Link to='/countries'>
                          Home
                        </Link>

                    </button>
                </div>
            </div>

        </div>
    )

}