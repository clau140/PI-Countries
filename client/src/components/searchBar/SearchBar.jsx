import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import { getName } from '../../redux/actions/actions';
import './searchBar.css'

function SearchBar (){

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
        }else{
            dispatch(getName(name))
            setName('')
        }

    }
    return (
        <div>
            <form onSubmit={(e)=>handleSubmit(e)} >
                <input 
                className='input'
                type="text"
                value= {name}
                placeholder='Search country'
                onChange={(e)=> handleInputChange(e)}
                 />
                 <button className='buttonSearch' type='submit'>🔎</button>

            </form>
        </div>
    )

}

export default SearchBar;