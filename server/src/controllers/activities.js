const axios = require('axios');
const {Country, Activity} = require('../db')

const createActivity = async ({name, difficulty, duration, seasson, countries })=> {
    try {
        const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            seasson
        })

        let selectCountries = await Country.findAll({
            where:{
                name: countries
            }
        })

        return newActivity.addCountry(selectCountries)

    

    } catch (error) {
        return error;
    }

}

const getAllActivities = async ()=>{
    try {
        let getActivities = await Activity.findAll({

        })
        return getActivities
    } catch (error) {
        return error.message
        
    }

    
}

module.exports= { createActivity, getAllActivities }