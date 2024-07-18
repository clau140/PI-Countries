//const { Country, Activity } = require('../db');
const { Router } = require("express")

const {getAllCountries, getById} = require("../controllers/countries")

const router = Router();

//GET /country
// GET /country?name="..."

router.get('/', async (req, res)=>{
    try {
        const {name}= req.query
        const response = await getAllCountries()

        if(name){
            let countryName= await response.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));
            countryName.length ?
            res.status(200).send(countryName) :
            res.status(404).send('Country not found')
        } else{

            res.status(200).send(response)
        }

        
    } catch (error) {

       res.status(400).send(error.message);
    }
})

//GET countries/:id

router.get('/:id', async (req, res)=>{
    try {
        const {id} = req.params;
        const data = await getById(id)

        if(!data || Object.keys(data).length === 0 ){
            res.status(404).send('Not found')

        }
        res.status(200).json(data)
    } catch (error) {
        return error.message
    }
})

module.exports = router

