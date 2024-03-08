import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { postCountry } from '../../redux/actions/actions'

import './create.css';

const Create = () =>{

    const dispatch= useDispatch();
    
    

   

    return (
      <div className="containerCreate">
        <div>
            <button><Link to={'/countries'}>Home</Link></button>
        </div>

       
           <div>
           <h1 className="titulo">Create a new Activity</h1>
            
            <div className="containerForm">

             <form className="form" >
           
             </form>
            </div>

           </div>
        </div>
      
    )
}


export default Create;