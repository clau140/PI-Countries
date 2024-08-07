const axios = require ('axios');
const { Country } = require ('../db')
const  dbJson = require( "../../api/db.json")

//const getData = async ()=> await axios.get("http://localhost:5000/countries")

const loadDb = async ()=>{
    try{
        //const db = await getData();
        const db = dbJson.countries;
        
        for (let i = 0; i < db.length; i++) {
            let country = db[i];
           // let country = db.data[i];

            await Country.create({
                id: country.cca3,                                        
                name: country.name.common,                              
                flagImage: country.flags.png,
                continent: country.region,
                
                capital: country.capital?.[0] ?? 'Unknown capital',
                subregion: country.subregion,
                area: country.area,
                population: country.population})}
            console.log("load DB");
    }catch(error){
        console.log(error.message)}
}

module.exports = loadDb;  