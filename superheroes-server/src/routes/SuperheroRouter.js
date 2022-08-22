import Router from 'express'
import SuperheroController from '../controllers/SuperheroController.js'

const superheroRouter = new Router()

superheroRouter.post('/superheroes', SuperheroController.create)
superheroRouter.get('/superheroes', SuperheroController.getAll)
superheroRouter.get('/superheroes/:id', SuperheroController.getOne)
superheroRouter.put('/superheroes', SuperheroController.update)
superheroRouter.delete('/superheroes/:id', SuperheroController.delete)
 
export default superheroRouter