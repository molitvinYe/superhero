export interface ISuperhero {
  _id: string,
  nickname: string,
  real_name: string,
  origin_description: string,
  superpowers: string,
  catch_phrase: string ,
  Images?: Array<string>,
}

export interface ISuperheroesList {
  next?: INavigate,
  previous?: INavigate,
  superheroesCount: number,
  pageCount: number,
  superheroes: ISuperhero[]
}

export interface INavigate {
  page: number,
  limit: number
}