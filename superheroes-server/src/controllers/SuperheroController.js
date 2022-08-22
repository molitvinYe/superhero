import SuperheroService from '../services/SuperheroService.js';

class SuperheroController {
  async create(req, res) {
    try {
      const superhero = await SuperheroService.create(req.body, req.files.Images)
      res.status(200).json(superhero)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async getAll(req, res) {
    try {
      const page = parseInt(req.query.page)
      const limit = parseInt(req.query.limit)
      const superheroes = await SuperheroService.getAll(page, limit)

      return res.json(superheroes)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async getOne(req, res) {
    try {
      const superhero = await SuperheroService.getOne(req.params.id)
      return res.json(superhero)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async update(req, res) {
    try {
      const updateSuperhero = await SuperheroService.update(req.body, req.files.Images)
      return res.json(updateSuperhero)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async delete(req, res) {
    try {
      const superhero = await SuperheroService.delete(req.params.id)
      return res.json(superhero) 
    } catch (e) {
      res.status(500).json(e)
    }
  }
}

export default new SuperheroController()