import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import { getName } from '../../redux/actions/actions';

import './searchBar.css'

function SearchBar ({setCurrentPage} ){

    const dispatch = useDispatch();
   
    const [name, setName]= useState('')
   
    function handleInputChange(e){
        e.preventDefault(); 
        setName(e.target.value)
       
    }

    function handleSubmit(e){
        e.preventDefault();
       

       if(!name.length){
            alert('Please enter a country')
        
        }
        else{
            dispatch(getName(name))
            setCurrentPage(1)
            setName('')

        } 

    }
    return (
        <div className='wrap'>
            <form onSubmit={(e)=>handleSubmit(e)} >
                <div className='search'>
                    
                <input 
                className='searchTerm'
                type="text"
                value= {name}
                placeholder='Search country'
                onChange={(e)=> handleInputChange(e)}
                 />
                 
                 <button className='searchButton' type='submit'
                 
                 >🔍</button>
                 
                 
                </div>
            </form>
        </div>
    )

}

export default SearchBar;