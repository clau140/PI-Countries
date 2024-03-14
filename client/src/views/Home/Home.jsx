import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import {getCountries, getActivity, byAlphabeticalOrder, byPopulationOrder, filterByContinent} from '../../redux/actions/actions'
import Card from '../../components/card/Card'
import SearchBar from "../../components/searchBar/SearchBar";
import Loader from '../../components/loader/Loader'
import './home.css'

export default function Home () {

    const dispatch = useDispatch();
    const [order, setOrder] = useState('')
    const allCountries = useSelector((state)=> state.countries)
    
    useEffect(()=>{
        dispatch(getCountries())
    }, [dispatch]);

    function handleOrder(e){
        e.preventDefault();
        dispatch(byAlphabeticalOrder(e.target.value))
        setOrder(e.target.value)
    }

    function handleOrderPopulation(e){
        e.preventDefault();
        dispatch(byPopulationOrder(e.target.value))
        setOrder(e.target.value)
    }

    function handleFilterByContinents(e){
        e.preventDefault();
        dispatch(filterByContinent(e.target.value))
        //setOrder(e.target.value)
    }

    if(!allCountries.length){
        return <Loader/>
    }

    return (
        <div className="containerHome">
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
                <select onChange={(e)=> handleOrderPopulation(e)}>
                    <option value="Min" key='Min'>Min population</option>
                    <option value="Max" key='Max'>Max population</option>
                </select>
             </div>
             <div>
                <select onChange={(e)=> handleFilterByContinents(e)}>
                <option value="All">All Continents</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Antarctic">Antarctic</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
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