const { Router } = require("express")
const {Country, Activity} = require('../db')
const {createActivity, getAllActivities, removeActivity} = require("../controllers/activities")

const router = Router();

//POST /activities

/*
router.post('/', async (req, res)=>{
    try {
        const {name, difficulty, duration, seasson, countries} = req.body

        if(!name || !difficulty || !duration ){
            res.status(404).send('Must complete all required fields')
        } else{
            const response = await createActivity(req.body)
            res.status(200).send(response)
        }
    } catch (error) {
        res.status(404).send(error.message)
    }

})
*/
router.post('/', async (req, res, next) => {

    const {
        name,
        difficulty,
        duration,
        seasson,
        countries
    } = req.body;

    try {
        let activity = await Activity.create({ name, difficulty, duration, seasson })
        await activity.setCountries(countries)

        let activityWithCountry = await Activity.findOne({
            where: { name: name },
            attributes: {
                exclude: ['updatedAt', 'createdAt'],
            },
            include: {
                model: Country,
                through: {
                    attributes: []
                }
            }
        })
        res.json(activityWithCountry)
    } catch (error) {
        next(error)
    }

});
//GET /activities

router.get('/', async (req, res) => {
    try {
        const response = await getAllActivities()
        res.status(200).send(response)

    } catch (error) {
        res.status(404).send(error.message)
        
    }
})

//DELETE by id database

router.delete('/:id', async (req, res)=>{
    try {
        const {id} = req.params
        
       
        await removeActivity(id)

        res.status(200).send('Successfully removed')
        
        
    } catch (error) {
        res.status(404).send(error.message)
        
    }
})

module.exports = router