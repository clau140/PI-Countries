import React from 'react';
import  './pagination.css'


export default function Pagination ({countriesPage, allCountries, pagination, currentPage}) {

    

    const pageNumbers = [];

        for(let i=1; i<=Math.ceil(allCountries / countriesPage); i++){
            pageNumbers.push(i);
        }
    

    
    return(
        <nav className='nav'>
            <ul className='ul'>
                {pageNumbers &&
                    pageNumbers.map(number => (
                        <li key={number}>

                            <p
                            className={number === currentPage ? 'activePage' : 'p'}
                            onClick={() => pagination(number)}>
                                {number}
                                </p>
                    </li> 
                    
                    ))
                }     
              
            </ul>

        </nav>
    )
}