import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Product from './data/Product';
import Product_details from './data/Product_details';
import { Context } from './context/Cart_index';
import { useState } from 'react';
import Cart from "./cart/Cart";
function App(product_data) {
  const [state, setState] = useState({
    product_data: product_data,
    Cart: []
  });

  const addToCart = (product) => {
    console.log(product)
    setState({
      ...state,
      Cart: state.Cart.find((CartItems) => CartItems.id === product.id)
        ? state.Cart.map((CartItems) =>
          CartItems.id === product.id
            ? { ...CartItems, count: CartItems.count + 1 }
            : CartItems
        )
        : [...state.Cart, { ...product, count: 1 }],
    })
  }
  const increase = (product) => {
    setState({
      ...state,
      Cart: state.Cart.map((CartItems) =>
        CartItems.id === product.id
          ? { ...CartItems, count: CartItems.count + 1 }
          : CartItems
      ),
    });
  };

  const decrease = (product) => {
    setState({
      ...state,
      Cart: state.Cart.map((CartItems) =>
        CartItems.id === product.id
          ? { ...CartItems, count: CartItems.count > 1 ? CartItems.count - 1 : 1 }
          : CartItems
      ),
    });
  };

  const removeItem = (id) => {
    setState({
      ...state,
      Cart: state.Cart.filter((CartItems) => CartItems.id !== id),
    });
  };

  const CartItemsCount = state.Cart.reduce(
    (acc, data) => (acc += data.count),
    0
  );
  return (
    <Context.Provider
      value={{ state: state, addToCart, increase, decrease, removeItem ,CartItemsCount}}>

      <BrowserRouter>
     <Routes>

      {/*<div className="container">
        <h1 className="title">Shopping Cart with Context API</h1>

         <NavLink className="btn" activeClassName="active" exact to="/">
          Home
        </NavLink>
        <NavLink className="btn" activeClassName="active" to="/cart">
          Cart ({CartItemsCount > 0 ? CartItemsCount : 0})
        </NavLink> 
  </div>*/}
      <Route exact path="/" element={<Product />} />
      <Route exact path="/Product_details/:id" element={<Product_details />} />
      <Route exact path="/Cart" element={<Cart />} />
      </Routes>
     </BrowserRouter> 
    </Context.Provider>
  )
}

export default App;
