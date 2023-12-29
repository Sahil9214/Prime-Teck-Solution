import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import DetailPage from "../Pages/DetailPage";
import ChartPage from "../Pages/ChartPage";
const AllRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<DetailPage />} />
      <Route path='/chart' element={<ChartPage/>} />
    </Routes>
  );
};

export default AllRouter;
