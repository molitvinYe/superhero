import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ISuperhero, ISuperheroesList } from "../models/ISuperhero";

export const superheroAPI = createApi({
  reducerPath: "superheroAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["Superhero"],
  endpoints: (build) => ({
    fetchAllSuperheroes: build.query<ISuperheroesList, {page: number, limit?:number}>({
      query: ({page, limit = 5}) => ({
        url: "/superheroes",
        params: {
          page: page,
          limit: limit,
        },
      }),
      providesTags: (result) => ["Superhero"],
    }),

    fetchOneSuperhero: build.query<ISuperhero, string>({
      query: (id) => ({
        url: `/superheroes/${id}`,
      }),
      providesTags: (result) => ["Superhero"],
    }),
    
    createSuperhero: build.mutation<ISuperhero, FormData>({
      query: (superhero) => ({
        url: "/superheroes",
        method: "POST",
        body: superhero,
      }),
      invalidatesTags: ["Superhero"],
    }),

    uptadeSuperhero: build.mutation<ISuperhero, FormData>({
      query: (superhero) => ({
        url: `/superheroes`,
        method: "PUT",
        body: superhero,
      }),
      invalidatesTags: ["Superhero"],
    }),
    
    deleteSuperhero: build.mutation<ISuperhero, string>({
      query: (id) => ({
        url: `/superheroes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Superhero"],
    }),
    
  }),
});