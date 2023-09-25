import React from "react";
import { useNavigate } from "react-router";
import { Context, useContext } from "../context/Cart_index";

const Details_header = () => {

  const { CartItemsCount } = useContext(Context);

  const history = useNavigate();

  const handleHome = () => {
    history("/")
  }
  const handleAddToCart = () => {
    history("/Cart")
  }
  return (
    <nav className="navbar bg-body-secondary ">
      <div className="container-fluid">
        <a className="navbar-brand home_route" onClick={handleHome}><b>Home</b></a>

        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <img className="search_bar mx-2" src="https://cdn-icons-png.flaticon.com/128/141/141944.png" />
          <img className="wishlist_1 mx-2" src="https://img.icons8.com/?size=1x&id=86&format=png" />
          <img className="cart_bag" onClick={handleAddToCart} src="https://cdn-icons-png.flaticon.com/128/6248/6248715.png" />
          <span className="item_count">{CartItemsCount}</span>
        </form>
      </div>
    </nav>
  )
}
export default Details_header;