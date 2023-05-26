import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Product from './data/Product';
import Product_details from "./data/Product_details";


function App() {
  return (
     <BrowserRouter>
     <Routes>
      <Route exact path="/" element={<Product/>}/>
      <Route exact path="/product_details/:id" element={<Product_details/>}/>
     </Routes>
     </BrowserRouter>     
  );
}

export default App;
