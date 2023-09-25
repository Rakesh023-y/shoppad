import React from "react";
import { Context , useContext} from "../context/Cart_index";
import CartItem from "./CartItems";

const Cart=()=>{

  const {state}  = useContext(Context);
  console.log(state)
    return(
      <div className="cart">
       {state && state.Cart && state.Cart.map((product)=>
        <CartItem key={product.id} product={product}/> )}
</div>
    )
}
export default Cart;