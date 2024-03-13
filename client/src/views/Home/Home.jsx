import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import {getCountries, getActivity, byAlphabeticalOrder} from '../../redux/actions/actions'
import Card from '../../components/card/Card'
import SearchBar from "../../components/searchBar/SearchBar";
import Loader from '../../components/loader/Loader'

export default function Home () {

    const dispatch = useDispatch();
    const [order, setOrder] = useState('')
    const allCountries = useSelector((state)=> state.allCountries)

    useEffect(()=>{
        dispatch(getCountries())
    }, [dispatch]);

    function handleOrder(e){
        e.preventDefault();
        dispatch(byAlphabeticalOrder(e.target.value))
        setOrder(e.target.value)
    }

    if(!allCountries.length){
        return <Loader/>
    }

    return (
        <div className="container">
            <div>
                <button><Link to={'/create'}>Create activity</Link></button>
            </div>
            <div>
             <SearchBar/>
             <div>
                <select onChange={(e)=> handleOrder(e)}>
                    <option value="Asc" key='Asc'>A-Z</option>
                    <option value="Desc" key='Desc'>Z-A</option>
                </select>
             </div>
            <div>

            <ul className='card_grid'>
            {allCountries?.map((el) => {
                return (
                
                     <Card
                        id={el.id}
                        name={el.name}
                        flagImage={el.flagImage}
                        continent={el.continent}
                        key={el.id}
                    />
                    
                    );
                  })}
         </ul>
            </div>
            </div>

        </div>
    )

}