import { superheroAPI } from "./../services/SuperheroService";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import pageReduser from './reducers/PageSlice'

const rootReducer = combineReducers({
  [superheroAPI.reducerPath]: superheroAPI.reducer,
  pageReduser
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(superheroAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];