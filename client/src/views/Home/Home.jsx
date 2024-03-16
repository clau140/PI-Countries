import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import {getCountries, getActivity, byAlphabeticalOrder, byPopulationOrder, filterByContinent} from '../../redux/actions/actions'
import Card from '../../components/card/Card'
import SearchBar from "../../components/searchBar/SearchBar";
import Pagination from "../../components/pagination/Pagination";
import Loader from '../../components/loader/Loader'
import './home.css'

export default function Home () {

    const dispatch = useDispatch();
    const allCountries = useSelector((state)=> state.countries)
   // const activity= useSelector((state)=> state.activity)

    // Pagina actual 
    const [currentPage, setCurrentPage] = useState(1)
    // Cantidad de paises por pagina
    const [countriesPage, setCountriesPage] = useState(10)

    const [order, setOrder] = useState('')

    //Posicion del ultimo pais
    const LastCountry = currentPage * countriesPage
    //Posicion del primer pais
    const FirstCountry = LastCountry - countriesPage
    // Se divide el array de acuerdo a la cantidad de paises necesarios (9)
    const currentCountries = allCountries.slice(FirstCountry, LastCountry)

    const pagination = (totalPages)=>{
        setCurrentPage(totalPages);
    }
    
    
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
        setOrder(e.target.value)
    }

    

    useEffect(() => {
        dispatch(getActivity())
    }, [dispatch]) 

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

            
             


              {/* Se hace el map sobre el nuevo array de countries, para renderizar solo los 
            necesarios por pagina */}
            <div>
           
            <ul className='card_grid'>
            {currentCountries?.map((el) => {
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
            <Pagination 
                countriesPage={countriesPage}
                allCountries={allCountries.length}
                pagination={pagination}
                currentPage={currentPage}
            />

        </div>
    )

}