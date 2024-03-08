import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { getDetail } from "../../redux/actions/actions";
export default function Detail () {

    const dispatch = useDispatch();
    const {id} = useParams();
    const detail = useSelector((state)=> state.detail)

    useEffect(()=>{
        dispatch(getDetail(id))
    }, [dispatch])


    
    return (
        <div className="container">
            <div className="detail">

                <div>
                    <button>
                        <Link to={'/countries'}>Home</Link>
                    </button>
                </div>
                <div>
                    {
                        <img src={detail.flagImage} alt={detail.name} />
                    }
                </div>
                <div>
                    <div>
                        <h1>{detail.name}</h1>
                    </div>
                    <div>
                        <h3>{detail.continent}</h3>
                        <h3>{detail.capital}</h3>
                        {
                            detail.subregion? <h3>{detail.subregion}</h3>
                            : <div></div>
                        }
                        
                        {
                            detail.area? <h3>{detail.area}</h3>
                            : <div></div>
                        }
                        <h3>{detail.population}</h3>
                    </div>
                </div>
                
           
            </div>

        </div>
    )

}