import "./App.css";
import NavigationBar from "./NavigationBar";
import ProductList from "./ProductList";
import { Routes, Route } from "react-router-dom";
import { SellPage } from "./SellPage";
import {useState} from 'react';
import categoriesExamples from "../assets/data/getCatergoriesExample.json";
console.log(categoriesExamples);
function App() {
  const [categories, setCategories] = useState(categoriesExamples.categories)

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/sell" element={<SellPage categories={categories} />} />
        <Route path="/test2" element={<h1>HERE!</h1>} />
      </Routes>

      {/* 
        - TODO add in search bar 
        - TODO Update navigation to correct links
        - TODO Setup Routers for navigation links
        - TODO Add categories to navigation / slider
        - TODO Add sell item option to navigation
      */}
    </>
  );
}

export default App;
