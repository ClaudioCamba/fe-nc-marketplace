import "./App.css";
import NavigationBar from "./NavigationBar";
import ProductList from './ProductList';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/test" element={<TestingRouter />}/>
        <Route path="/test2" element={<h1>HERE!</h1>}/>
      </Routes>
      
      {/* 
        - TODO add in search bar 
        - TODO Update navigation to correct links
        - TODO Setup Routers for navigation links
        - TODO Add categories to navigation / slider
        - TODO Add sell item option to navigation
      */}
      <ProductList />
    </>
  );
}

export default App;



function TestingRouter() {
  return <h1>You are in this Router</h1>
}