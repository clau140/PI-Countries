import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { postActivity, getCountries, getActivity } from '../../redux/actions/actions'

import './create.css';

const validation = (input)=> {
    let errors = {};

    if(!input.name){
        errors.name = 'Write a name, please'
    }else if(input.name.length > 30){
        errors.name = 'Name cannot exceed 30 characters'
    }else if(!/^[a-zA-Z0-9-() .]+$/.test(input.name)){
        errors.name = 'Only letters, numbers, hyphens and parentheses are accepted'
    }

    if(!input.difficulty){
        errors.difficulty= 'required'
    }

    if(!input.duration){
        errors.duration= 'required'
    }

    if(!input.countries){
        errors.countries= 'required'
    }


    return errors;
}

const Create = () =>{

    const dispatch= useDispatch();
    const countries= useSelector(state => state.allCountries).sort((a, b)=>{
        if(a.name > b.name){
            return 1
        }
        if(a.name < b.name){
            return -1
        }
        return 0
    })
    

    const [errors, setErrors]= useState({})
    const [input, setInput]= useState({
        name: '',
        difficulty: '',
        duration: '',
        seasson: '',
        countries: []
    })

    useEffect(()=>{
        dispatch(getCountries())
    }, [dispatch])

    useEffect(()=>{
        dispatch(getActivity())
    }, [dispatch])

    function handleChange(e){
        setInput({
            ... input,
            [e.target.name]: e.target.value
        })
        setErrors(validation({
            ...input,
            [e.target.name]: e.target.value
        }))

    }

    function handleSelectCountries(id){
        setInput({
            ...input,
            countries: [...input.countries, id.target.value]
        })
        setErrors(validation({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

     function handleSubmit(e){
        e.preventDefault();

        setErrors(validation({
            ...input,
            [e.target.name]: e.target.value
        }))

        if(!Object.keys(errors).length && input.name && input.difficulty  && input.duration && input.countries){ 


        dispatch(postActivity(input))
        alert('Activity created')

        setInput({
            name:'',
            difficulty: '',
            duration: '',
            seasson: '',
            countries: []

        })
     }else{
        alert ('Activity not created')
     }
    }
    
     let selectedCountries= input.countries.map((i) =>
         i)
    const noRepeat= new Set(selectedCountries)
    let result= [...noRepeat];

   

    return (
      <div className="containerCreate">
        <div>
            <button><Link to={'/countries'}>Home</Link></button>
        </div>

       
           <div>
           <h1 className="titulo">Create a new Activity</h1>
            
            <div className="containerForm">

             <form className="form" onSubmit={(e)=> handleSubmit(e)} >
                <div>
                    <input 
                    className="inputCreate"
                    type="text" 
                    placeholder="Activity name"
                    name="name"
                    value={input.name}
                    onChange={(e)=> handleChange(e)}
                    />
                    {
                        errors.name && (
                            <p>{errors.name}</p>
                        )
                    }
                </div>
                <div>
                    <input 
                    className="inputCreate"
                    type="text" 
                    placeholder="Difficulty"
                    name= 'difficulty'
                    value= {input.difficulty}
                    onChange={(e)=> handleChange(e)}
                     />
                     {
                        errors.difficulty && (
                            <p>{errors.difficulty}</p>
                        )
                     }
                </div>
                <div>
                    <input 
                    type="text"
                    placeholder="Duration" 
                    name="duration"
                    value={input.duration}
                    onChange={(e)=> handleChange(e)}
                    />
                    {
                        errors.duration && (
                            <p>{errors.duration}</p>
                        )

                    }
                </div>
                <div>
                    <input 
                    type="text"
                    placeholder="Seasson" 
                    name="seasson"
                    value={input.seasson}
                    onChange={(e)=> handleChange(e)}
                    />
                </div>
                <div>
                    <label>Country: </label>
                    <select onChange={handleSelectCountries}>
                        <option value="">Select country</option>
                        {
                            countries.map( e=> (
                                <option value={e.id} name= 'countries' key={e.id}>{e.name}</option>
                            ))
                        }
                    </select>
                    {
                        errors.countries && (
                            <p>{errors.countries}</p>
                        )
                    }
                </div>
                <div>
                    <ul>
                        <li>
                          {
                          result.map(i => 
                          <div>
                            {i}
                          </div> )
                          }
                            
                            </li>
                    </ul>
                </div>

                <div>
                    <button 
                    className="buttonForm"
                    type="submit">
                        Add Activity
                    </button>
                </div>
           
             </form>
            </div>

           </div>
        </div>
      
    )
}


export default Create;