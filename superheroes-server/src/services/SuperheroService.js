import Superhero from "../models/Superhero.js";
import fileService from "./fileService.js";

class SuperheroService {
  async create(superhero, picture) {
    const fileName = fileService.saveFile(picture)
    const createdSuperhero = await Superhero.create({...superhero, Images: fileName});
    return createdSuperhero
  }

  async getAll(page, limit) {
    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    
    const results = {}

    const superheroesCount = await Superhero.countDocuments().exec()

    if (endIndex < superheroesCount) {
      results.next = {
        page: page + 1,
        limit: limit
      }
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit
      }
    }

    results.superheroesCount = superheroesCount
    results.pageCount = Math.ceil(superheroesCount / limit)
    results.superheroes = await Superhero.find().limit(limit).skip(startIndex).exec()
    return results
  }

  async getOne(id) {
    if (!id) {
      throw new Error("Id not specified!")
    }
    const superhero = await Superhero.findById(id)
    return superhero
  }

  async update(superhero, picture) {
    if (!superhero._id) {
      throw new Error("Id not specified!")
    }
    const fileName = fileService.saveFile(picture)
    const updatedSuperhero = await Superhero.findByIdAndUpdate(superhero._id, {...superhero, Images: fileName}, {new: true})
    return updatedSuperhero
  }

  async delete(id) {
    if (!id) {
      throw new Error("Id not specified!")
    }
    const superhero = await Superhero.findByIdAndDelete(id);
    return superhero
  }
}

export default new SuperheroService()