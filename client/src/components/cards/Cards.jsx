import Card from '../card/Card'
import  './cards.css';

const Cards = ({ countries }) => {
  return (
  <div className='containerCards'>
    {countries.map((country) =>  (
      
      <Card country={country} key={country.name}/>
    ))}
  </div>
  )
}

export default Cards;