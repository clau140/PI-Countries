import React  from 'react';
import gif from './loader.gif'
import './loader.css'

function Loader(){
    

    
    return(

        <div className='containerLoader'>
            
            <div className='load'>
                <img className='gif' src={gif} alt="loading" />
            </div>

            
        </div>
    )
}

export default Loader;