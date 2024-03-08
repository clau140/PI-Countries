import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import {getCountries} from '../../redux/actions/actions'
import Card from '../../components/card/Card'


export default function Home () {

    const dispatch = useDispatch();

    const allCountries = useSelector((state)=> state.allCountries)

    useEffect(()=>{
        dispatch(getCountries())
    }, [dispatch]);

    return (
        <div className="container">
            <div>
                <button><Link to={'/create'}>Create activity</Link></button>
            </div>
            <div>
                <h1>Home</h1>
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