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
      
      {/* //TODO add in search bar */}
      <ProductList />
    </>
  );
}

export default App;



function TestingRouter() {
  return <h1>You are in this Router</h1>
}