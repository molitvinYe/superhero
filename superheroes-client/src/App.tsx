import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import PageLayout from "./components/layouts/PageLayout";
import AllSuperheroesPage from "./pages/AllSuperheroesPage";
import OneSuperheroesPage from "./pages/OneSuperheroPage";
import CreateSuperheroPage from "./pages/CreateSuperheroPage";
import EditSuperheroPage from "./pages/EditSuperheroPage";

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Navigate to="superheroes/1" />} />
        <Route path="superheroes/:page" element={<AllSuperheroesPage />} />
        <Route path="superhero/:id" element={<OneSuperheroesPage />} />
        <Route path="superhero/create" element={<CreateSuperheroPage />} />
        <Route path="superhero/edit/:id" element={<EditSuperheroPage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
