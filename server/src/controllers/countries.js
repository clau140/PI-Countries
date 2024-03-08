const axios = require('axios');
const {Country, Activity} = require('../db')


const getAllCountries = async ()=>{
    return await Country.findAll({
        include: 
            { model: Activity,
              attributes: ['name'],
              through: {
                attributes: [],
              }
            
            
        }
    })
}

const getById = async (id)=>{
  try {
    const data = await getAllCountries();
    const countryId = data.find((country)=> country.id.toString() === id.toString())
    return countryId

  } catch (error) {
    return error
  }
  
  
}

module.exports= { getAllCountries, getById }