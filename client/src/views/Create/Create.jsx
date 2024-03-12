import React, {useState, useEffect} from "react";
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { postActivity, getCountries, getActivity } from '../../redux/actions/actions'
import Loader from '../../components/loader/Loader'
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

    return errors;
}

const Create = () =>{

    const dispatch= useDispatch();
    const navigate= useNavigate()
    const countries= useSelector(state => state.allCountries).sort((a, b)=>{
        if(a.name > b.name){
            return 1
        }
        if(a.name < b.name){
            return -1
        }
        return 0
    })

    const listActivities = useSelector((state) => state.allActivities)
    
    const [carga, setCarga]= useState(true)
    
    const [input, setInput]= useState({
        name: '',
        difficulty: '',
        duration: '',
        seasson: '',
        countries: []
    })
    const [errors, setErrors]= useState({})

    useEffect(()=>{
        dispatch(getCountries()).then(()=> setCarga(false))
        dispatch(getActivity());
    }, [dispatch]);

  /*  useEffect(()=>{
        dispatch(getActivity())
    }, [dispatch])
*/
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

    function handleSelectDifficulty(e){
        setInput({
            ...input,
            difficulty: e.target.value
        })
    }

    function handleSelectDuration(e){
        setInput({
            ...input,
            duration: e.target.value
        })
    }

    function handleSelectSeasson(e){
        setInput({
            ...input,
            seasson: e.target.value
        })
    }

    function handleSelectCountries(id){
        setInput({
            ...input,
            countries: [...new Set([...input.countries, id.target.value])]
            //new Set para que no se almacenen repetidos
        })
        
    }

    function handleDeleteCountry(e){
        setInput({
            ...input,
            countries: input.countries.filter((c)=> c !== e)
        })
    }

     function handleSubmit(e){
        e.preventDefault();

        let namesNoRepeat= listActivities.filter((activity)=> activity.name === input.name)
       
        if(namesNoRepeat.length){
            alert('There is already an activity with that name')
            errors.name = 'There is already an activity with that name'
        
        } else {
            let error= Object.keys(validation(input))

            if(error.length || !input.countries.length || !input.difficulty.length ){
                alert('Falta completar datos')
                
            
            }else{
                dispatch(postActivity(input))
                alert('Activity created')

                setInput({
                    name:'',
                    difficulty: '',
                    duration: '',
                    seasson: '',
                    countries: []
        
                })
                navigate('/countries')
             
            }

    } 
}

const seasson = ['Winter', 'Spring', 'Autumn', 'Summer']
const difficulty = [1, 2, 3, 4, 5]
const duration = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
    
    /* 
    let selectedCountries= input.countries.map((i) =>
         i)
    const noRepeat= new Set(selectedCountries)
    let result= [...noRepeat];
    */
   if(carga){
    return (
        <div>
            <Loader/>
        </div>
    )
   }

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
                    <label>Activity: </label>
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
                    <label>Difficulty: </label>
                    <select onChange={(e)=> handleSelectDifficulty(e)}>
                        <option value="">Choose an option</option>
                        {
                            difficulty.map(e => (
                                <option value={e} name= 'difficulty'>{e}</option>
                            ))
                        }

                    </select>
                     
                </div>
                <div>
                    <label>Duration: </label>
                    <select onChange={(e)=> handleSelectDuration(e)}>
                        <option value="">Choose an option</option>
                        {
                            duration.map(e => (
                                <option value={e} name= 'duration'>{e}</option>
                            ))
                        }
                    </select>
                </div>

                <div>
                    <label>Seasson: </label>
                    <select onChange={(e)=> handleSelectSeasson(e)}>
                        <option value="">Select seasson</option>
                        {
                            seasson.map(e=> (
                                <option value={e} name= 'seasson' key={e}>{e}</option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <label>Country: </label>
                    <select onChange={(event)=> handleSelectCountries(event)}>
                        <option value="">Select country</option>
                        
                        {
                            countries?.map( e => (
                                <option value={e.id} name= 'countries' key={e.id}>{e.name}</option>
                            ))
                        }
                    </select>

                    
                </div>
                <div className="selected">
                    
                          {input.countries.map((i) => (
                          <div key={i}>
                            <p>{i}</p>
                            <button 
                            onClick={()=> handleDeleteCountry(i)}
                            key= {i.id}
                            id= {i.id}
                            value= {i.name}
                            >
                             <span>X</span>
                            </button>
                          </div> ))
                          }
                    
                </div>

                {
                    Object.keys(errors).length? (
                        <div>
                            <input type="submit" disabled name="Send" />
                        </div>

                    ) : (
                        <div>
                            <input type="submit" name="Send" />
                        </div>
                    )
                }

             </form>
            </div>

           </div>
        </div>
      
    )
}


export default Create;