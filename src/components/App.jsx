import "./App.css";
import NavigationBar from "./NavigationBar";
import ProductList from "./ProductList";
import { Routes, Route } from "react-router-dom";
import { SellPage } from "./SellPage";
import { useEffect, useState } from "react";
import { getCategories } from "../utils/ApiRequests";
import { UserList } from "./UserList";

function App() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data.categories);
    });
  }, []);

  return (
    <>
      <NavigationBar categories={categories} />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/sell" element={<SellPage categories={categories} />} />
        <Route path="/search" element={<ProductList />} />
        <Route path="/Users" element={<UserList />} />
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

