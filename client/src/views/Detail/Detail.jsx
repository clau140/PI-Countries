import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { getDetail } from "../../redux/actions/actions";
import Loader from '../../components/loader/Loader'
import './detail.css'

export default function Detail () {

    const dispatch = useDispatch();
    const {id} = useParams();
    const detail = useSelector((state)=> state.detail)

    useEffect(()=>{
        dispatch(getDetail(id))
    }, [dispatch])


    
    return (
        <div className="containerDetail">
            

                <div className="containerButtonDetail">
                    
                        <Link to={'/countries'} className="buttonDetail">Home</Link>
                    
                </div>
                
                <div className="containerInfo">
                    <div className="cardInfo">
                <div>
                    
                    <h1>{detail.name}</h1>
                    <div className="flag">
                {
                    <img className="imgFlag" src={detail.flagImage} alt={detail.name} />
                }
            </div>
                    
                    </div>
                    <div className="info">
                        <h3>Country code: {detail.id}</h3>
                        <h3>Continent: {detail.continent}</h3>
                        <h3>Capital: {detail.capital}</h3>
                        {
                            detail.subregion? <h3>Subregion: {detail.subregion}</h3>
                            : <div></div>
                        }
                        
                        {
                            detail.area? <h3>Area: {detail.area} km2</h3>
                            : <div></div>
                        }
                        <h3>Population: {detail.population}</h3>
                        
                        <div className="activities">
                <strong>Turist Activities </strong>
                {
                    detail.activities && detail.activities.length ?
                    detail.activities.map(
                        (a)=> (
                            <div>
                                <p><strong>{a.name}</strong> Difficulty: {a.difficulty}, Duration: {a.duration} hs., Seasson: {a.seasson}</p>
                            </div>
                        )
                    ) :
                    <div>No activities to show</div>
                }

            </div>
                    </div>
                </div>
                

                </div>
            </div>
            
        
    )

}