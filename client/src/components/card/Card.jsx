/*import React  from 'react';
import {Link} from 'react-router-dom'
import './card.css'


const Card = ({country}) => {
  const { name, flagImage, continent, id } = country;

  return (
    <div className='card'>
      <Link to={`/detail/${id}`}>
        <img className='image' src={flagImage} alt={`${name} flag`}/>
        <h3 className='title'>{name}</h3>
        <p className='subtitle'>{continent}</p>
      </Link> 
    </div>
  )
}

export default Card
*/

import React  from 'react';
import {Link} from 'react-router-dom'
import './card.css'

function Card({flagImage, name, continent, id}){
    

    //const {name, image, id, temperament, weight} = dog
    return(

        <div className='cardContainer'>
            <Link to={'/countries/' + id}>
                <img className='cardImage' src={flagImage} alt= 'img not found' />
            </Link>
            <h2>{name}</h2>
            <h3>{continent}</h3>
            

            
        </div>
    )
}

export default Card;